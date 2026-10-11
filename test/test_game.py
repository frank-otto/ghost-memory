"""Ghost Memory headless test suite (Playwright + Chrome/SwiftShader). Writes test/results.txt and test/shots/shot-*.png"""
import asyncio, os, json, base64, io, time
from playwright.async_api import async_playwright
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
URL = 'file://' + ROOT + '/index.html'
ARGS = ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist', '--autoplay-policy=no-user-gesture-required']
R = []
def check(name, ok, info=''):
    R.append((name, bool(ok), info)); print(('PASS ' if ok else 'FAIL ') + name + ('' if ok else f'  -> {info}'), flush=True)
INIT = "localStorage.setItem('gm-quality', JSON.stringify('high')); window.__gmNoAutoQ = true;"
async def page(b, w=1280, h=800, tut=True, mobile=False, extra=''):
    opts = dict(viewport={'width': w, 'height': h})
    if mobile: opts.update(is_mobile=True, has_touch=True, device_scale_factor=2)
    ctx = await b.new_context(**opts)
    await ctx.add_init_script(INIT + ("localStorage.setItem('gm-tut','true');" if tut else '') + extra)
    pg = await ctx.new_page(); logs = []
    pg.on('console', lambda m: logs.append(f'{m.type}: {m.text}') if m.type == 'error' else None)
    pg.on('pageerror', lambda e: logs.append(f'PAGEERROR: {e}'))
    await pg.goto(URL)
    await pg.wait_for_function('document.body.classList.contains("ready") && window.__gm', timeout=120000)
    await pg.evaluate('__gm.hold(true)')
    return ctx, pg, logs
async def ev(pg, js): return await pg.evaluate(js)
async def sim(pg, sec, dt=1/30): await pg.evaluate(f'__gm.sim({int(sec/dt)}, {dt})')
async def shot(pg, name):
    await pg.evaluate('__gm.render()'); await pg.screenshot(path=f'{ROOT}/test/shots/{name}.png', timeout=120000)
async def snap(pg): return await pg.evaluate('__gm.snap()')
async def wait_ready(pg, maxs=6):
    for _ in range(int(maxs / 0.25)):
        if await ev(pg, '__gm.ready()'): return True
        await sim(pg, 0.25)
    return False
async def match_one(pg):
    i = await ev(pg, "__gm.cards().findIndex(c=>c.state==='down')")
    j = await ev(pg, f'__gm.pairOf({i})')
    await ev(pg, f'__gm.flip({i}); __gm.flip({j})'); await sim(pg, 1.0); return i, j
async def solve(pg):
    while (await snap(pg))['found'] < (await snap(pg))['pairs']:
        await wait_ready(pg); await match_one(pg)
    await sim(pg, 3.2)

async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch(executable_path='/usr/bin/google-chrome', headless=True, args=ARGS)
        # ---------- first start: menu, tutorial ----------
        ctx, pg, logs = await page(b, tut=False)
        await sim(pg, 0.5)
        s = await snap(pg)
        vis = await ev(pg, "__gm.cards().filter(c=>c.mode!=='hidden').length")
        check('load: no console errors', not logs, logs[:5])
        check('frame 0: attract demo has ghosts in the air', s['state'] == 'attract' and vis >= 1, vis)
        await shot(pg, 'shot-start')
        await pg.click('#btnPlay')
        check('first-start tutorial shown', await ev(pg, "!document.getElementById('tut').classList.contains('hidden')"))
        await pg.click('#btnTutSkip')
        s = await snap(pg)
        check('tutorial skip starts level 1 (3x4)', s['state'] == 'play' and s['n'] == 12, s)
        check('peek at start', s['peek'] > 0.5, s['peek'])
        await ev(pg, '__gm.skipPeek()'); await sim(pg, 0.8)
        await pg.click('#btnHelp2'); check('"?" re-opens tutorial', await ev(pg, "!document.getElementById('tut').classList.contains('hidden')")); await pg.click('#btnTutGo')
        # flip
        await ev(pg, '__gm.flip(0)'); await sim(pg, 0.3)
        c0 = (await ev(pg, '__gm.cards()'))[0]
        check('flip: stone opens + ghost rises', c0['state'] == 'up' and c0['mode'] in ('rise', 'idle'), c0)
        await sim(pg, 0.4); await shot(pg, 'shot-flip')
        # mismatch
        j = await ev(pg, '__gm.mismatchOf(0)'); await ev(pg, f'__gm.flip({j})'); await sim(pg, 1.05)
        m = (await ev(pg, '__gm.cards()'))
        check('mismatch: ghosts shrug', m[0]['mode'] in ('shrug', 'sink'), m[0])
        await sim(pg, 2.0); s = await snap(pg); m = await ev(pg, '__gm.cards()')
        check('mismatch: stones close again, move counted', m[0]['state'] == 'down' and m[j]['state'] == 'down' and s['moves'] == 1 and s['log']['miss'] == 1, s)
        # match + combo
        await wait_ready(pg); i, k = await match_one(pg); s1 = await snap(pg)
        check('match: pair found + points', s1['found'] == 1 and s1['total'] >= 100, s1)
        check('match: ghosts dance', (await ev(pg, '__gm.cards()'))[i]['mode'] in ('dance', 'swirl'))
        await sim(pg, 0.2); await shot(pg, 'shot-match')
        await wait_ready(pg); await match_one(pg); s2 = await snap(pg)
        check('combo: second pair in a row = x2 bonus', s2['combo'] == 2 and s2['total'] - s1['total'] == 150 and s2['log']['combo'] >= 1, (s1['total'], s2['total'], s2['combo']))
        await sim(pg, 3)
        mt = await ev(pg, "__gm.cards().filter(c=>c.state==='done').length")
        check('matched stones stay solved (candles)', mt == 4, mt)
        # keyboard
        await wait_ready(pg)
        idx = await ev(pg, "__gm.cards().findIndex(c=>c.state==='down')")
        await ev(pg, f'__gm.S.focus = {idx}'); await pg.keyboard.press('Enter'); await sim(pg, 0.2)
        check('keyboard: Enter flips focused stone', (await ev(pg, '__gm.cards()'))[idx]['state'] == 'up')
        await pg.keyboard.press('ArrowRight'); f = await ev(pg, '__gm.S.focus'); check('keyboard: arrows move focus', f == min(idx + 1, 11), f)
        await sim(pg, 2.5)
        # finish level 1 → level done
        await solve(pg); s = await snap(pg)
        check('level clear → stars panel', s['state'] == 'lvdone' and await ev(pg, "!document.getElementById('lvDone').classList.contains('hidden')"), s)
        st = await ev(pg, '__gm.S.lvStars[0]'); check('star rating 1..3', st in (1, 2, 3), st)
        check('best level stars saved', await ev(pg, "JSON.parse(localStorage.getItem('gm-lv-0'))") >= 1)
        await pg.click('#btnNext'); s = await snap(pg)
        check('level 2 = 4x4', s['lvl'] == 1 and s['n'] == 16, s)
        types = await ev(pg, '__gm.cards().map(c=>c.type)')
        check('golden pumpkin pair present (L2+)', types.count('gold') == 2, types)
        await ev(pg, '__gm.skipPeek()'); await sim(pg, 0.8)
        gi = types.index('gold'); gj = types.index('gold', gi + 1); t0 = (await snap(pg))['total']
        await ev(pg, f'__gm.flip({gi}); __gm.flip({gj})'); await sim(pg, 1.0); s = await snap(pg)
        check('golden pair bonus (+600)', s['gold'] and s['total'] - t0 == 600 and s['log']['gold'] == 1, (t0, s['total']))
        await sim(pg, 0.3); await shot(pg, 'shot-gold')
        await sim(pg, 3); await solve(pg); await pg.click('#btnNext')
        s = await snap(pg); check('level 3 = 4x5 (5 cols)', s['lvl'] == 2 and s['n'] == 20, s)
        # swap twist
        await ev(pg, '__gm.skipPeek()'); await sim(pg, 0.8)
        before = await ev(pg, '__gm.cards().map(c=>c.type).join()')
        await ev(pg, '__gm.swap()'); await sim(pg, 0.8); sw = await snap(pg)
        await sim(pg, 0.4); await shot(pg, 'shot-swap')
        await sim(pg, 2.0); after = await ev(pg, '__gm.cards().map(c=>c.type).join()')
        bl, al = before.split(','), after.split(',')
        diff = [x for x in range(len(bl)) if bl[x] != al[x]]
        check('swap twist: cheeky ghost swaps two stones', sw['swapping'] and len(diff) in (0, 2) and (await snap(pg))['log']['swap'] == 1, diff)
        check('swap: grid positions follow swapped stones', await ev(pg, "__gm.S.cards.every((c,i)=>Math.abs(c.stone.root.position.x-c.x)<0.01 && Math.abs(c.stone.root.position.z-c.z)<0.01)"))
        # auto swap after mismatches
        for _ in range(6):
            await wait_ready(pg)
            a = await ev(pg, "__gm.cards().findIndex(c=>c.state==='down')"); bb = await ev(pg, f'__gm.mismatchOf({a})')
            await ev(pg, f'__gm.flip({a}); __gm.flip({bb})'); await sim(pg, 2.6)
        check('swap triggers by itself after some misses', (await snap(pg))['log']['swap'] >= 2, (await snap(pg))['log'])
        await sim(pg, 3); await solve(pg); await pg.click('#btnNext')
        s = await snap(pg); check('level 4 = 5x6 (30 stones)', s['lvl'] == 3 and s['n'] == 30, s)
        await ev(pg, '__gm.skipPeek()'); await sim(pg, 9)
        s = await snap(pg); check('fog round rolls in (L4)', s['fog'] and s['fogK'] > 0.5 and s['log']['fog'] >= 1, s)
        await wait_ready(pg); await match_one(pg); await sim(pg, 0.1)
        a = await ev(pg, "__gm.cards().findIndex(c=>c.state==='down')"); await ev(pg, f'__gm.flip({a})'); await sim(pg, 0.7)
        await shot(pg, 'shot-level4')
        await sim(pg, 0.3); await ev(pg, f'__gm.flip(__gm.pairOf({a}))'); await sim(pg, 2)
        await solve(pg); await pg.click('#btnNext'); await sim(pg, 1.5)
        s = await snap(pg)
        check('campaign end → end screen', s['state'] == 'end' and await ev(pg, "!document.getElementById('end').classList.contains('hidden')"), s)
        txt = {k: await pg.inner_text('#' + k) for k in ['endScore', 'rank', 'stPairs', 'stMoves', 'stBest', 'endStars']}
        check('end stats: score, rank, pairs 39, stars, best', txt['stPairs'] == '39' and txt['rank'] and '⭐' in txt['endStars'] and txt['stBest'] != '0', txt)
        en = await ev(pg, "__gm.shareText('en')"); de = await ev(pg, "__gm.shareText('de')")
        check('share text EN/DE', 'GHOST MEMORY' in en and 'Player' in en and 'Züge' in de and '#GhostMemory' in de, (en, de))
        await pg.fill('#name', 'Spooky'); check('name field updates share text', 'Spooky' in (await pg.text_content('#shareText') or ''))
        await pg.fill('#name', 'Player')
        await ctx.grant_permissions(['clipboard-read', 'clipboard-write']) if False else None
        await pg.click('#btnShare'); await asyncio.sleep(0.8)
        check('copy share', (await ev(pg, 'window.__gmLastShare || ""')).startswith('👻'))
        url = await ev(pg, '__gm.makeShot()')
        from PIL import Image
        im = Image.open(io.BytesIO(base64.b64decode(url.split(',')[1]))); check('end card PNG 1080x1350', im.size == (1080, 1350), im.size)
        im.save(f'{ROOT}/test/shots/endcard.png')
        rk = await ev(pg, "[0,30000].map(x=>__gm.S && x)"); 
        await shot(pg, 'shot-end')
        # sounds
        snd = await ev(pg, '__gm.sounds()'); check('all sounds decode (36)', snd['n'] == 36, snd['n'])
        bad = await ev(pg, "(()=>{const b=[];for(const k of Object.keys(__gm.sfx)){try{__gm.sfx[k]()}catch(e){b.push(k+':'+e.message)}}return b})()")
        check('all sfx callable', not bad, bad)
        vb = await ev(pg, "(()=>{const b=[];for(const t of ['pumpkin','witch','bat','skeleton','cat','vampire','mummy','candle','monster','owl','sheet','zombie','devil','spider','gold']){try{__gm.sfx.voice(t)}catch(e){b.push(t)}}return b})()")
        check('per-ghost giggles', not vb, vb)
        # quality levels
        for q in ['low', 'mid', 'high', 'ultra']:
            await ev(pg, f"__gm.applyQuality('{q}', true)"); await sim(pg, 0.2); await ev(pg, '__gm.render()')
        check('quality levels Niedrig/Mittel/Hoch/Ultra', await ev(pg, '__gm.quality()') == 'ultra' and not logs, logs[:3])
        await ev(pg, "__gm.applyQuality('high', true)")
        await ev(pg, "__gm.setLang('de')"); check('DE toggle', (await pg.inner_text('#btnReplay')).strip().startswith('↻ NOCHMAL'), await pg.inner_text('#btnReplay')); await ev(pg, "__gm.setLang('en')")
        check('no console errors during campaign', not logs, logs[:5])
        await ctx.close()
        # ---------- 2 players ----------
        ctx, pg, logs = await page(b)
        await pg.fill('#n1', 'Ghosty'); await pg.fill('#n2', 'Boo')
        await pg.click('#btnPlay2'); s = await snap(pg)
        check('2P: starts on 4x4, Ghosty first', s['mode'] == 'two' and s['n'] == 16 and s['turn'] == 0 and s['players'][0]['name'] == 'Ghosty', s)
        await ev(pg, '__gm.skipPeek()'); await sim(pg, 0.8)
        a = 0; bb = await ev(pg, '__gm.mismatchOf(0)'); await ev(pg, f'__gm.flip({a}); __gm.flip({bb})'); await sim(pg, 1.2)
        s = await snap(pg); check('2P: mismatch passes turn to Boo', s['turn'] == 1, s['turn'])
        await sim(pg, 1.5); await wait_ready(pg); await match_one(pg); s = await snap(pg)
        check('2P: match scores for Boo and she keeps the turn', s['turn'] == 1 and s['players'][1]['pairs'] == 1, s['players'])
        await sim(pg, 0.6); await shot(pg, 'shot-2p')
        tb = await pg.inner_text('#tp1'); check('2P: HUD shows names + turn', 'Boo' in tb and await ev(pg, "document.getElementById('tp1').classList.contains('on')"), tb)
        await sim(pg, 2.5); await solve(pg); await sim(pg, 1.2); s = await snap(pg)
        es = await pg.inner_text('#endScore'); duel = await pg.inner_text('#endDuel')
        check('2P: winner celebration + end screen', s['state'] == 'end' and 'Boo' in es and 'Ghosty' in duel, (es, duel))
        check('2P: share text duel', 'Boo' in await ev(pg, "__gm.shareText('en')"))
        check('2P: no console errors', not logs, logs[:5])
        await ctx.close()
        # ---------- Kinder-Modus ----------
        ctx, pg, logs = await page(b)
        await pg.check('#chkKids'); await pg.click('#btnPlay'); s = await snap(pg)
        check('kids: fewer cards (3x2) + long peek', s['kids'] and s['n'] == 6 and s['peek'] > 3, s)
        await sim(pg, 1.2); await shot(pg, 'shot-kids')
        check('kids: no timer shown', await ev(pg, "getComputedStyle(document.querySelector('#hudStats .tm')).display") == 'none')
        await sim(pg, 3); await solve(pg); s = await snap(pg)
        check('kids: always at least 2 stars, no time bonus pressure', s['state'] == 'lvdone' and await ev(pg, '__gm.S.lvStars[0]') >= 2, s)
        await pg.click('#btnNext'); s = await snap(pg); check('kids level 2 = 4x3', s['n'] == 12, s)
        check('kids: no console errors', not logs, logs[:5])
        await ctx.close()
        # ---------- mobile ----------
        ctx, pg, logs = await page(b, 390, 844, mobile=True)
        await sim(pg, 0.3); await shot(pg, 'shot-mobile-menu')
        await pg.tap('#btnPlay'); await ev(pg, '__gm.skipPeek()'); await sim(pg, 0.8)
        s = await snap(pg); check('mobile: portrait layout (3 cols x 4 rows)', s['cols'] == 3 and s['rows'] == 4, s)
        pt = await ev(pg, '__gm.screenOf(4)')
        await ev(pg, '__gm.hold(false)'); await pg.touchscreen.tap(pt['x'], pt['y']); await asyncio.sleep(0.3); await ev(pg, '__gm.hold(true)')
        c = await ev(pg, '__gm.cards()')
        check('mobile: real touch tap flips a stone', any(x['state'] == 'up' for x in c), [x['state'] for x in c])
        await sim(pg, 0.7); await shot(pg, 'shot-mobile')
        check('mobile: no console errors', not logs, logs[:5])
        await ctx.close(); await b.close()
    ok = sum(1 for r in R if r[1])
    with open(f'{ROOT}/test/results.txt', 'w') as f:
        f.write(f'Ghost Memory tests — {time.strftime("%Y-%m-%d %H:%M")} — {ok}/{len(R)} passed\n')
        for n, o, i in R: f.write(('PASS ' if o else 'FAIL ') + n + ('' if o else f'  -> {i}') + '\n')
    print(f'{ok}/{len(R)} passed')
asyncio.run(main())
