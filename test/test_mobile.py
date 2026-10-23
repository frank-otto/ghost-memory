"""Ghost Memory – phone start-screen regression test (real touch emulation).
WebKit iPhone 13, iPhone 8 (375×667), iPhone SE (320×568) + Chromium Pixel 7 – each portrait AND landscape (8 configs).
Checks: ONE tap on PLAY from page load lands in a playable level 1 (no tutorial screen, a non-blocking hint instead, audio unlocked);
every start-screen, options-sheet (levels, 2 players, kids, mute, quality, volume, help) and HUD control can be TAPPED,
is ≥ 44 px and on screen; nothing scrolls; language auto-detect; German fits; no console errors; GPU counts flat (Chromium).
Run: python3 test/test_mobile.py [base-url]   (exit 0 = all passed; screenshots → test/shots/mobile/)"""
import asyncio, os, sys, threading, http.server, functools, socketserver
from playwright.async_api import async_playwright
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.environ.get('GM_SHOTS', ROOT + '/test/shots/mobile/'); os.makedirs(OUT, exist_ok=True)
if len(sys.argv) > 1: URL = sys.argv[1]
else:
    class _Q(http.server.SimpleHTTPRequestHandler):
        def log_message(self, *a): pass
    _srv = socketserver.ThreadingTCPServer(('127.0.0.1', 0), functools.partial(_Q, directory=ROOT)); _srv.daemon_threads = True
    threading.Thread(target=_srv.serve_forever, daemon=True).start(); URL = 'http://127.0.0.1:%d/index.html' % _srv.server_address[1]
ONLY = os.environ.get('GM_ONLY', '')
R = []
def check(n, ok, info=''): R.append(bool(ok)); print(('PASS ' if ok else 'FAIL ') + n + (f' — {info}' if info != '' else ''), flush=True)
DEVICES = [('webkit', 'iPhone 13', False, 'de-DE'), ('webkit', 'iPhone 13', True, 'en-US'), ('webkit', 'iPhone 8', False, 'en-US'), ('webkit', 'iPhone 8', True, 'de-AT'),
           ('webkit', 'iPhone SE', False, 'de-DE'), ('webkit', 'iPhone SE', True, 'en-GB'), ('chromium', 'Pixel 7', False, 'de-DE'), ('chromium', 'Pixel 7', True, 'en-US')]
HIT = """sels => sels.flatMap(sel => { const all = [...document.querySelectorAll(sel)]; if (!all.length) return [[sel, 'missing']]; return all.map((e, i) => { const n = sel + (all.length > 1 ? '#' + i : '');
  const r = e.getBoundingClientRect(), cs = getComputedStyle(e); if (cs.display === 'none' || cs.visibility === 'hidden' || r.width < 2) return [n, 'hidden'];
  if (r.left < -1 || r.top < -1 || r.right > innerWidth + 1 || r.bottom > innerHeight + 1) return [n, 'off-screen ' + [r.left, r.top, r.right, r.bottom].map(Math.round)];
  for (const [fx, fy] of [[.5, .5], [.25, .5], [.75, .5]]) { const t = document.elementFromPoint(r.left + r.width * fx, r.top + r.height * fy); if (!t || !(t === e || e.contains(t) || (e.tagName === 'INPUT' && e.closest('label') && e.closest('label').contains(t)))) return [n, 'covered by ' + (t ? (t.id || t.className || t.tagName) : 'nothing')]; }
  if (r.height < 43.5 || r.width < 43.5) return [n, 'too small ' + Math.round(r.width) + 'x' + Math.round(r.height)]; return [n, 'ok']; }); })"""
NOSCROLL = "(() => { const d = document.scrollingElement; return d.scrollHeight <= innerHeight + 1 && d.scrollWidth <= innerWidth + 1; })()"
async def ev(pg, js): return await pg.evaluate(js)
async def until(pg, js, secs=20):
    for _ in range(int(secs * 5)):
        try:
            if await pg.evaluate(js): return True
        except Exception: pass
        await pg.wait_for_timeout(200)
    return False
async def hit(pg, sels):
    h = await ev(pg, f'({HIT})({sels!r})'); bad = {k: v for k, v in h if v != 'ok'}; return bad, len(h)
async def boot(b, d, loc):
    ctx = await b.new_context(**d, locale=loc)
    await ctx.add_init_script("window.__gmNoAutoQ = true; try{if(!sessionStorage.getItem('gmInit')){sessionStorage.setItem('gmInit','1'); localStorage.clear(); localStorage.setItem('gm-quality', JSON.stringify('low'));}}catch(e){}")
    pg = await ctx.new_page(); pg.set_default_timeout(30000); errs = []
    pg.on('console', lambda m: errs.append(m.text[:160]) if m.type == 'error' else None); pg.on('pageerror', lambda e: errs.append('PAGEERROR ' + str(e)[:160]))
    await pg.goto(URL); await pg.wait_for_function('document.body.classList.contains("ready") && window.__gm', timeout=120000)
    return ctx, pg, errs
async def run(p, eng, dev, land, loc):
    d = dict(p.devices[dev]); d.pop('default_browser_type', None)
    if land: d['viewport'] = {'width': d['viewport']['height'], 'height': d['viewport']['width']}
    W, H = d['viewport']['width'], d['viewport']['height']; tag = f"{dev.replace(' ', '')}-{'land' if land else 'port'}"; T = f'[{tag} {eng} {W}×{H} {loc}]'
    kw = {} if eng == 'webkit' else dict(executable_path='/usr/bin/google-chrome', args=['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'])
    b = await (p.webkit if eng == 'webkit' else p.chromium).launch(**kw)
    try:
        ctx, pg, errs = await boot(b, d, loc)
        want = 'de' if loc.startswith('de') else 'en'
        pt = (await pg.inner_text('#btnPlay .pl, #btnPlay span[data-i18n=play]')).strip()
        check(f'{T} language auto-detected from the browser ({want})', await ev(pg, 'document.documentElement.lang') == want and pt == ('SPIELEN' if want == 'de' else 'PLAY'), pt)
        await pg.wait_for_timeout(1500); await pg.screenshot(path=f'{OUT}{tag}-0-start.png')
        # ---------- 1) the start screen ----------
        lay = await ev(pg, """(() => { const p = document.getElementById('btnPlay').getBoundingClientRect(), h = document.querySelector('#start .title').getBoundingClientRect();
          return { p: [p.left, p.top, p.width, p.height].map(Math.round), cy: (p.top + p.height / 2) / innerHeight, overlap: !(h.bottom <= p.top || h.top >= p.bottom),
            title: h.top >= -1 && h.bottom <= innerHeight + 1 && h.left >= -1 && h.right <= innerWidth + 1, toast: getComputedStyle(document.getElementById('toast')).visibility, lvl: document.getElementById('playL').textContent }; })()""")
        check(f'{T} start: one big glowing PLAY (≥ 56 px tall, ≥ 220 px wide, shows the level) in the thumb zone, title on screen and clear of it, no stray toast',
              lay['p'][3] >= 56 and lay['p'][2] >= 220 and (.5 if land else .55) <= lay['cy'] <= .93 and not lay['overlap'] and lay['title'] and lay['toast'] == 'hidden' and lay['lvl'].startswith(('Level 1', 'Level 1')), lay)
        check(f'{T} start: nothing scrolls', await ev(pg, NOSCROLL))
        bad, n = await hit(pg, ['#btnPlay', '#btnSettings', '#langSeg button'])
        check(f'{T} start: PLAY, ⚙ options and DE/EN are tappable, on screen and ≥ 44 px ({n} controls)', not bad and n == 4, bad)
        other = await ev(pg, "['#chkKids', '#btnHelp', '.how', '#qualSeg', '#levels', '#btnPlay2', '#n1'].filter(s => { const e = document.querySelector(s); return e && e.getBoundingClientRect().width > 0 && getComputedStyle(e).visibility !== 'hidden'; })")
        check(f'{T} start: levels / 2 players / kids / help / how-to / quality are tucked into the options sheet', not other, other)
        other_l = 'en' if want == 'de' else 'de'
        await pg.tap(f'#langSeg button[data-lang={other_l}]'); l1 = await ev(pg, 'document.documentElement.lang'); await pg.tap('#langSeg button[data-lang=de]')
        check(f'{T} tap DE/EN switches the language', l1 == other_l and await ev(pg, 'document.documentElement.lang') == 'de')
        of = await ev(pg, "[...document.querySelectorAll('#start button, #settings button, #settings .pill, #tut button')].filter(e => e.getClientRects().length && (e.scrollWidth > e.clientWidth + 2)).map(e => e.id || e.textContent.trim().slice(0, 18))")
        check(f'{T} German: no button text overflows', not of, of)
        check(f'{T} German start screen still fits (no scroll, PLAY tappable)', await ev(pg, NOSCROLL) and not (await hit(pg, ['#btnPlay', '#btnSettings', '#langSeg button']))[0])
        # ---------- 2) ⚙ Modes & options sheet ----------
        await pg.tap('#btnSettings'); await pg.wait_for_timeout(400); await pg.screenshot(path=f'{OUT}{tag}-1-options-de.png')
        sh = await ev(pg, "(() => { const m = document.querySelector('#settings .panel'); return [!document.getElementById('settings').classList.contains('hidden'), m.scrollHeight <= m.clientHeight + 1]; })()")
        check(f'{T} options sheet opens and fits without scrolling', sh == [True, True], sh)
        bad, n = await hit(pg, ['#btnSetX', '#levels button', '#btnPlay2', '#n1', '#n2', '#chkKids', '#chkMute', '#qualSeg button', '#volMusic', '#volSfx', '#btnHelp', '#btnCloseSettings'])
        bad = {k: v for k, v in bad.items() if not (k.startswith('#chk') and v.startswith('too small'))}  # native checkbox sits inside a 44 px label row
        bad = {k: v for k, v in bad.items() if not (v == 'hidden' and k in ('#btnCloseSettings', '#volMusic', '#volSfx') and H <= 720)}  # Done (✕ does the same) / sliders are dropped on purpose on short screens
        check(f'{T} options: every control is tappable, on screen, ≥ 44 px ({n})', not bad, bad)
        sz = await ev(pg, "['#chkKids', '#chkMute'].map(s => Math.round(document.querySelector(s).closest('label').getBoundingClientRect().height))")
        check(f'{T} options: kids / mute rows are ≥ 44 px tall', min(sz) >= 43.5, sz)
        await pg.tap('#levels button[data-l="1"]'); l2 = await ev(pg, "[__gm.S.startLvl, document.getElementById('playL').textContent]"); await pg.tap('#levels button[data-l="0"]')
        check(f'{T} tap a level selects it (PLAY shows it)', l2[0] == 1 and 'Level 2' in l2[1] and await ev(pg, '__gm.S.startLvl') == 0, l2)
        await pg.tap('#chkKids'); k1 = await ev(pg, "document.body.classList.contains('kids')"); await pg.tap('#chkKids')
        check(f'{T} tap kids mode on and off', k1 and not await ev(pg, "document.body.classList.contains('kids')"))
        await pg.tap('#qualSeg button[data-q=mid]'); q1 = await ev(pg, '__gm.quality()'); await pg.tap('#qualSeg button[data-q=low]')
        check(f'{T} tap quality switches it', q1 == 'mid' and await ev(pg, '__gm.quality()') == 'low', q1)
        await pg.tap('#chkMute'); m1 = await ev(pg, "document.getElementById('btnMute').textContent"); await pg.tap('#chkMute')
        check(f'{T} tap mute / unmute', m1 == '🔇' and await ev(pg, "document.getElementById('btnMute').textContent") == '🔊', m1)
        await pg.tap('#btnSetX'); check(f'{T} ✕ closes the sheet', await ev(pg, "document.getElementById('settings').classList.contains('hidden')"))
        await pg.tap('#btnSettings'); await pg.tap('#btnHelp'); await pg.wait_for_timeout(300); await pg.screenshot(path=f'{OUT}{tag}-2-help-de.png')
        tu = await ev(pg, "(() => { const m = document.querySelector('#tut .panel'); return [!document.getElementById('tut').classList.contains('hidden'), m.scrollHeight <= m.clientHeight + 1]; })()")
        bad, _ = await hit(pg, ['#btnTutGo', '#btnTutSkip'])
        check(f'{T} "How to play" opens from the sheet, fits, its buttons are tappable', tu == [True, True] and not bad, (tu, bad))
        await pg.tap('#btnTutSkip'); check(f'{T} help closes back to the start screen', await ev(pg, "document.getElementById('tut').classList.contains('hidden') && __gm.snap().state === 'attract'"))
        await pg.tap('#btnSettings'); await pg.tap('#btnPlay2')
        check(f'{T} "2 PLAYERS" in the sheet starts a 2-player game', await until(pg, "__gm.snap().state === 'play' && __gm.snap().mode === 'two'", 8), await ev(pg, '__gm.snap().mode'))
        await ctx.close()
        # ---------- 3) fresh page load: ONE tap → playable level 1 ----------
        ctx, pg, errs2 = await boot(b, d, loc); errs += errs2
        await pg.wait_for_timeout(800); pb = await ev(pg, "(() => { const r = document.getElementById('btnPlay').getBoundingClientRect(); return [r.left + r.width / 2, r.top + r.height / 2]; })()")
        await pg.touchscreen.tap(pb[0], pb[1])
        ok = await until(pg, "__gm.snap().state === 'play'", 10)
        st = await ev(pg, "[__gm.snap().state, __gm.snap().mode, __gm.snap().n, document.getElementById('tut').classList.contains('hidden'), document.getElementById('start').classList.contains('hidden')]")
        check(f'{T} ONE tap on PLAY from page load → level 1 (3×4 board), no tutorial screen', ok and st == ['play', 'solo', 12, True, True], st)
        check(f'{T} audio unlocks on that first tap', await until(pg, "__gm.audioState() === 'running'", 5), await ev(pg, '__gm.audioState()'))
        hn = await until(pg, "document.getElementById('hint').classList.contains('show')", 15); ht = await ev(pg, "document.getElementById('hint').textContent")
        check(f'{T} after the peek a non-blocking hint explains the game', hn and ('Grabstein' in ht or 'gravestone' in ht), ht)
        await pg.wait_for_timeout(300); await pg.screenshot(path=f'{OUT}{tag}-3-play.png')
        await until(pg, '__gm.ready()', 10); sp = await ev(pg, '__gm.screenOf(__gm.cards().length - 1)')  # a front-row stone
        await pg.touchscreen.tap(sp['x'], sp['y'])
        flipped = await until(pg, "__gm.cards().some(c => c.state !== 'down')", 5)
        check(f'{T} tapping a gravestone flips it (playable by touch); the hint then goes away', flipped and await until(pg, "!document.getElementById('hint').classList.contains('show')", 4), await ev(pg, '__gm.cards().map(c => c.state).join()'))
        bad, n = await hit(pg, ['#btnHelp2', '#btnMute', '#btnPause'])
        check(f'{T} in-game HUD buttons (help, mute, pause) are tappable and ≥ 44 px', not bad and n == 3, bad)
        await pg.tap('#btnPause'); bad, _ = await hit(pg, ['#btnResume', '#btnQuit']); check(f'{T} pause screen buttons tappable', not bad, bad); await pg.tap('#btnResume')
        if eng == 'chromium':
            g = []
            for k in range(5):
                await ev(pg, f"__gm.start('solo', {k % 4}); __gm.sim(90, 1/30); __gm.start('solo', 0); __gm.sim(90, 1/30); __gm.render(); true")
                g.append(await ev(pg, '__gm.geo()'))
            gs, ts = [x['geometries'] for x in g], [x['textures'] for x in g]
            check(f'{T} GPU: geometry / texture counts stay flat over 10 restarted levels (no leak)', max(gs) - min(gs) <= 2 and max(ts) - min(ts) <= 2, (gs, ts))
        check(f'{T} no console / page errors', not errs, errs[:3])
    finally: await b.close()
async def main():
    async with async_playwright() as p:
        for cfg in DEVICES:
            if ONLY and ONLY not in cfg[1].replace(' ', '') + ('-land' if cfg[2] else '-port'): continue
            n0 = len(R)
            for att in (1, 2):
                try: await asyncio.wait_for(run(p, *cfg), 420); break
                except Exception as e:
                    msg = (str(e) or type(e).__name__).split('\n')[0][:200]
                    if att == 1 and ('crash' in msg.lower() or 'closed' in msg.lower() or 'Timeout' in msg):
                        print(f'RETRY {cfg[1]} {cfg[2]}: browser crashed / timed out ({msg})', flush=True); del R[n0:]; continue
                    check(f'[{cfg[1]} {"land" if cfg[2] else "port"}] run completed', False, msg); break
    print(f'\n{sum(R)}/{len(R)} mobile checks passed'); sys.exit(0 if R and all(R) else 1)
asyncio.run(main())
