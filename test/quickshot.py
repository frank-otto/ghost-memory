"""Quick visual check: python3 test/quickshot.py [name] [js-before-shot] [sim-seconds] [w h]"""
import asyncio, os, sys
from playwright.async_api import async_playwright
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ARGS = ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist']
async def main():
    name = sys.argv[1] if len(sys.argv) > 1 else 'q'; js = sys.argv[2] if len(sys.argv) > 2 else ''; sec = float(sys.argv[3]) if len(sys.argv) > 3 else 0
    w, h = (int(sys.argv[4]), int(sys.argv[5])) if len(sys.argv) > 5 else (1280, 800)
    async with async_playwright() as p:
        b = await p.chromium.launch(executable_path='/usr/bin/google-chrome', headless=True, args=ARGS)
        ctx = await b.new_context(viewport={'width': w, 'height': h})
        await ctx.add_init_script("localStorage.setItem('gm-quality', JSON.stringify('high')); localStorage.setItem('gm-tut','true'); window.__gmNoTut = true; window.__gmNoAutoQ = true;")
        pg = await ctx.new_page(); logs = []
        pg.on('console', lambda m: logs.append(f'{m.type}: {m.text}') if m.type in ('error', 'warning') else None)
        pg.on('pageerror', lambda e: logs.append(f'PAGEERROR: {e}'))
        await pg.goto('file://' + ROOT + '/index.html')
        await pg.wait_for_function('document.body.classList.contains("ready") && window.__gm', timeout=120000)
        await pg.evaluate('__gm.hold(true)')
        if js: await pg.evaluate(js)
        if sec: await pg.evaluate(f'__gm.sim({int(sec*30)}, 1/30)')
        await pg.evaluate('__gm.render()')
        await pg.screenshot(path=f'{ROOT}/test/shots/{name}.png')
        print(await pg.evaluate('JSON.stringify(__gm.snap())'))
        print('calls', await pg.evaluate('__gm.drawCalls()'))
        print('\n'.join(logs[:20]))
        await b.close()
asyncio.run(main())
