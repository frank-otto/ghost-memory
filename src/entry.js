// Ghost Memory — main: renderer + bloom, moonlit graveyard, gravestone memory board (flip / match / mismatch), ghost choreography
// (rise, shrug & sink, pair dance + swirl to the sky), levels with timer/moves/stars, twists (swap ghost, fog rounds, golden pair),
// 2-player hot-seat duel, Kinder-Modus, attract demo behind the menu, end card PNG, share text and test hooks.
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { createWorld, updateWorld, QUALITY } from './world.js';
import { TYPES, ICON, createGhost, updateGhost, setExpr, createStone, updateStone, tintHole, glowOf } from './ghosts.js';
import * as FX from './fx.js';
import * as A from './audio.js';
import { T, setLang, getLang, applyI18n, rankFor, shareText, fmt, mmss } from './i18n.js';
import { rand, clamp, lerp, damp, pick, store } from './util.js';

const $ = id => document.getElementById(id);
const TIMERS = [];
function later(fn, ms) { TIMERS.push({ t: ms / 1000, fn }); }
function runTimers(dt) { for (let i = TIMERS.length - 1; i >= 0; i--) { const x = TIMERS[i]; x.t -= dt; if (x.t <= 0) { TIMERS.splice(i, 1); try { x.fn(); } catch (e) { console.error(e); } } } }
export const LEVELS = [
  { c: 4, r: 3, name: 'lv1' }, { c: 4, r: 4, name: 'lv2', gold: true },
  { c: 5, r: 4, name: 'lv3', gold: true, swap: true }, { c: 6, r: 5, name: 'lv4', gold: true, swap: true, fog: true }
];
export const KLEVELS = [{ c: 3, r: 2, name: 'lvk1' }, { c: 4, r: 3, name: 'lvk2', gold: true }, { c: 4, r: 4, name: 'lvk3', gold: true }];
const SX = 1.9, SZ = 2.25;
const S = {
  state: 'attract', mode: 'solo', kids: store.get('gm-kids', false) === true, quality: store.get('gm-quality', ''), qualityUser: !!store.get('gm-quality', ''),
  lvl: 0, startLvl: 0, cards: [], cols: 4, rows: 4, sel: [], busy: 0, moves: 0, time: 0, combo: 0, bestCombo: 0, score: 0, total: 0, pairsFound: 0, pairs: 0, gold: false,
  totalMoves: 0, totalTime: 0, totalPairs: 0, starsSum: 0, starsMax: 0, lvStars: [],
  turn: 0, players: [{ name: 'Player 1', pairs: 0, score: 0 }, { name: 'Player 2', pairs: 0, score: 0 }],
  peekT: 0, fogT: 0, fogOn: false, swapCd: 0, swapAnim: null, focus: 0, paused: false, tut: false,
  best: store.get('gm-best', 0) || 0, nameV: store.get('gm-name', 'Player'), shareLang: getLang(), clock: 0, log: { flip: 0, match: 0, miss: 0, swap: 0, fog: 0, gold: 0, combo: 0, turn: 0 },
  aiT: 1, endR: null
};
if (!QUALITY[S.quality]) S.quality = '';

// ---------------- renderer / scene ----------------
const canvas = $('gl');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance', alpha: false, stencil: false });
renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.15; renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.shadowMap.type = THREE.PCFShadowMap;
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(46, 1, 0.1, 700);
let composer = null, W = null;
const F = FX.createFx(scene);
const O = FX.createOverlay($('fx2d'));
let dprNow = 1;
const cam = { pos: new THREE.Vector3(0, 10, 10), look: new THREE.Vector3(0, 0.5, 0), dist: 14, px: 0, py: 0 };
const board = new THREE.Group(); scene.add(board);
function qName() { return S.quality || 'high'; }
function buildComposer() {
  const q = QUALITY[qName()];
  if (composer) { composer.dispose && composer.dispose(); composer = null; }
  if (!q.bloom) return;
  const size = renderer.getDrawingBufferSize(new THREE.Vector2());
  const rt = new THREE.WebGLRenderTarget(size.x, size.y, { type: THREE.HalfFloatType, samples: q.msaa });
  composer = new EffectComposer(renderer, rt);
  composer.addPass(new RenderPass(scene, camera));
  composer.addPass(new UnrealBloomPass(new THREE.Vector2(size.x, size.y), 0.75 * q.bloom, 0.55, 0.8));
  composer.addPass(new OutputPass());
}
function resize() {
  const w = window.innerWidth, h = window.innerHeight, q = QUALITY[qName()];
  dprNow = Math.min(window.devicePixelRatio || 1, q.pr);
  renderer.setPixelRatio(dprNow); renderer.setSize(w, h, false);
  camera.aspect = w / h; camera.fov = camera.aspect < 0.9 ? 62 : 46; camera.updateProjectionMatrix();
  if (composer) { composer.setPixelRatio(dprNow); composer.setSize(w, h); }
  FX.resizeOverlay(O, w, h, Math.min(window.devicePixelRatio || 1, 2));
  if (W) W.stars.material.uniforms.pr.value = dprNow;
  if (S.cards.length) layout(true);
}
function applyQuality(qn, user = false) {
  S.quality = qn; if (user) { S.qualityUser = true; store.set('gm-quality', qn); }
  const q = QUALITY[qn], fk = W ? W.fogK : 0;
  if (W) scene.remove(W.root);
  W = createWorld(scene, qn); W.fogK = fk;
  renderer.shadowMap.enabled = !!q.shadow; renderer.shadowMap.needsUpdate = true;
  F.scale = q.particles;
  buildComposer(); resize();
  document.querySelectorAll('#qualSeg button').forEach(b => b.classList.toggle('on', b.dataset.q === qn));
}
// ---------------- board ----------------
function levelDef() { return (S.kids ? KLEVELS : LEVELS)[S.lvl] || LEVELS[0]; }
function clearBoard() { for (const c of S.cards) { board.remove(c.stone.root); board.remove(c.gh.root); } S.cards = []; S.sel = []; S.evalT = 0; S.unlockT = 0; S.busy = 0; }
function buildBoard(def, seedTypes) {
  clearBoard();
  const n = def.c * def.r, pairs = n / 2; S.pairs = pairs; S.pairsFound = 0;
  let types = seedTypes || [...TYPES].sort(() => Math.random() - 0.5).slice(0, def.gold ? pairs - 1 : pairs);
  if (!seedTypes && def.gold) types.push('gold');
  const deck = [...types, ...types].sort(() => Math.random() - 0.5);
  deck.forEach((type, i) => {
    const stone = createStone((Math.random() * 3) | 0); board.add(stone.root); tintHole(stone, glowOf(type));
    const gh = createGhost(type); gh.root.visible = false; board.add(gh.root);
    S.cards.push({ i, type, stone, gh, state: 'down', mode: 'hidden', t: 0, x: 0, z: 0, hx: 0, hz: 0 });
  });
  S.defC = def.c; S.defR = def.r; layout(false);
}
function layout(keep) {
  const port = camera.aspect < 0.9;
  S.cols = port && S.defC > S.defR ? S.defR : S.defC; S.rows = S.cards.length / S.cols;
  S.cards.forEach((c, i) => {
    const col = i % S.cols, row = (i / S.cols) | 0;
    c.x = (col - (S.cols - 1) / 2) * SX; c.z = (row - (S.rows - 1) / 2) * SZ - 0.4;
    if (!S.swapAnim || !S.swapAnim.cards.includes(c)) c.stone.root.position.set(c.x, 0, c.z);
    c.hx = c.x; c.hz = c.z + 0.62;
  });
  // fit the camera: board bounding box at a ~55° elevation
  const w = S.cols * SX + 1.0, d = S.rows * SZ + 0.8, vf = THREE.MathUtils.degToRad(camera.fov), hf = 2 * Math.atan(Math.tan(vf / 2) * camera.aspect);
  const el = THREE.MathUtils.degToRad(port ? 50 : 30);
  const dw = (w / 2) / Math.tan(hf / 2) + 1.4, dd = (d * (port ? 0.6 : 0.45)) / Math.tan(vf / 2) + 1.2;
  cam.dist = Math.max(dw, dd) * (port ? 1.0 : 1.0) + 1.2; cam.el = el;
  if (!keep) snapCam();
}
function snapCam() { camTarget(cam.pos); camera.position.copy(cam.pos); camera.lookAt(cam.look); }
const _ct = new THREE.Vector3();
function camTarget(out) {
  const t = S.clock, el = cam.el + Math.sin(t * 0.21) * 0.02, yaw = Math.sin(t * 0.13) * 0.05 + cam.px * 0.04, dist = cam.dist * (window.__gmCamK || 1);
  out.set(Math.sin(yaw) * Math.cos(el) * dist, Math.sin(el) * dist + 0.6 + cam.py * 0.3, Math.cos(yaw) * Math.cos(el) * dist + 0.4);
  const at = S.state === 'attract' ? 1 : 0; cam.att = damp(cam.att || 0, at, 1.5, 1 / 60); const pt = camera.aspect < 0.9; cam.look.set(Math.sin(t * 0.17) * 0.15, 0.3 + cam.att * 2.2, (pt ? -2.0 : -2.0 - S.rows * 0.2) - cam.att * 3);
  return out;
}
// ---------------- ghost choreography ----------------
function setMode(c, m) { c.mode = m; c.t = 0; if (m !== 'hidden') c.gh.root.visible = true; }
const ease = x => 1 - Math.pow(1 - x, 3), back = x => { const s = 1.70158; x -= 1; return x * x * ((s + 1) * x + s) + 1; };
function updateCard(c, dt) {
  c.t += dt; const g = c.gh, r = g.root, t = c.t; let pose = {};
  updateStone(c.stone, dt, S.clock);
  if (c.mode === 'hidden') { r.visible = false; return; }
  const face = Math.atan2(camera.position.x - r.position.x, camera.position.z - r.position.z);
  r.rotation.y = face;
  if (c.mode === 'rise') {
    const k = clamp(t / 0.62, 0, 1), e = back(k);
    r.position.set(c.hx, lerp(-0.6, 1.5, e), c.hz); r.scale.setScalar(lerp(0.25, 1, ease(k))); pose = { spin: (1 - ease(k)) * Math.PI * 2, squash: -0.4 * (1 - k), armL: 1.6 * k, armR: 1.6 * k };
    if (k >= 1) { setMode(c, 'idle'); setExpr(g, 'happy'); }
  } else if (c.mode === 'peek') {
    const k = clamp(t / 0.5, 0, 1); r.position.set(c.hx, lerp(-0.4, 1.0, ease(k)), c.hz); r.scale.setScalar(lerp(0.3, 0.78, ease(k))); pose = { bob: 0.6 };
  } else if (c.mode === 'idle') {
    r.position.set(c.hx, 1.5, c.hz); r.scale.setScalar(1); pose = { armL: 0.4, armR: 0.4 };
  } else if (c.mode === 'shrug') {
    const k = clamp(t / 0.25, 0, 1), sh = Math.sin(t * 9) * 0.12;
    r.position.set(c.hx, 1.5 - k * 0.1, c.hz); pose = { armL: 2.3 * k, armR: 2.3 * k, tilt: sh, eyes: 0.6, bob: 0.3, squash: 0.2 * k };
    if (t > (S.fogOn ? 0.55 : 0.85)) { setMode(c, 'sink'); A.sfx.sink(); }
  } else if (c.mode === 'sink') {
    const k = clamp(t / 0.45, 0, 1), e = k * k;
    r.position.set(c.hx, lerp(1.4, -0.8, e), c.hz); r.scale.setScalar(lerp(1, 0.4, e)); pose = { armL: 1.5 * (1 - k), armR: 1.5 * (1 - k), eyes: 0.5, bob: 0.2 };
    if (t > 0.12 && c.stone.target) { c.stone.target = 0; }
    if (k >= 1) { setMode(c, 'hidden'); c.stone.wob = 1; dust(c, 0.5); c.state = 'down'; }
  } else if (c.mode === 'dance') {
    const p = c.partner, mx = (c.hx + p.hx) / 2, mz = (c.hz + p.hz) / 2 + 0.3, k = clamp(t / 0.45, 0, 1), e = ease(k);
    const a = c.da + t * 5.2, rad = lerp(Math.hypot(c.hx - mx, c.hz - mz), 0.62, e);
    const ox = c.hx + (mx + Math.cos(a) * rad - c.hx) * e, oz = c.hz + (mz + Math.sin(a) * rad - c.hz) * e;
    r.position.set(ox, 1.6 + Math.abs(Math.sin(t * 8)) * 0.35 * e + e * 0.4, oz); r.scale.setScalar(1 + 0.08 * Math.sin(t * 16));
    pose = { armL: 2.6, armR: 2.6, tilt: Math.sin(t * 8) * 0.25, spin: t * 2, squash: Math.sin(t * 16) * 0.15 };
    if (t > 1.45) { setMode(c, 'swirl'); c.sx = r.position.x; c.sz = r.position.z; c.sy = r.position.y; if (c.lead) A.sfx.swirl(); }
  } else if (c.mode === 'swirl') {
    const k = clamp(t / 1.15, 0, 1), e = k * k, a = c.da + 5.2 * 1.45 + t * (6 + 8 * k), p = c.partner, mx = (c.sx + p.sx) / 2, mz = (c.sz + p.sz) / 2;
    const rad = 0.62 * (1 - k);
    r.position.set(mx + Math.cos(a) * rad, lerp(c.sy, 8.5, e), mz + Math.sin(a) * rad); r.scale.setScalar(lerp(1, 0.15, e)); pose = { armL: 2.8, armR: 2.8, spin: t * 6, glow: 1.5 };
    if (Math.random() < 0.9) FX.sparkle(F, r.position, rgbOf(c.type), 3, 1.2, 0.22, 0.8, -0.5);
    if (k >= 1) { setMode(c, 'hidden'); FX.sparkle(F, r.position, rgbOf(c.type), 40, 5, 0.3, 1.2, 0.6); if (c.lead) FX.ring(F, r.position.clone(), 4, 0.6, glowOf(c.type)); }
  }
  r.scale.multiplyScalar(1.22);
  updateGhost(g, dt, pose);
}
function rgbOf(type) { const c = new THREE.Color(glowOf(type)); return [c.r * 1.6 + 0.2, c.g * 1.6 + 0.2, c.b * 1.6 + 0.2]; }
function dust(c, k = 1) { FX.sparkle(F, new THREE.Vector3(c.stone.root.position.x, 0.15, c.stone.root.position.z + 0.2), [0.75, 0.62, 0.55], 26 * k, 2.2, 0.32, 0.9, 1.2); }
// ---------------- game logic ----------------
function canFlip(c) { return c && c.state === 'down' && !S.busy && S.sel.length < 2 && S.peekT <= 0 && !S.swapAnim && (S.state === 'play' || S.state === 'attract') && !S.paused && !S.tut; }
function flip(c) {
  if (typeof c === 'number') c = S.cards[c];
  if (!canFlip(c)) return false;
  c.state = 'up'; c.stone.target = 1; c.stone.wob = 0.6; S.sel.push(c); setMode(c, 'rise'); dust(c);
  const pan = clamp(c.x / 6, -1, 1); A.sfx.flip(pan); A.sfx.rise(pan); A.sfx.voice(c.type, pan);
  FX.flashLight(F, new THREE.Vector3(c.hx, 1.2, c.hz + 0.4), glowOf(c.type), 6);
  if (S.state === 'play') S.log.flip++;
  if (S.sel.length === 2) { S.busy = 1; S.evalT = 0.85; if (S.state === 'play') { S.moves++; S.totalMoves++; } }
  return true;
}
function evaluate() {
  if (S.sel.length < 2) { S.sel = []; S.busy = 0; return; }
  const [a, b] = S.sel; S.sel = [];
  const play = S.state === 'play';
  if (a.type === b.type) {
    a.state = b.state = 'done'; a.partner = b; b.partner = a; a.lead = true; b.lead = false;
    const ang = Math.atan2(a.hz - b.hz, a.hx - b.hx); a.da = ang; b.da = ang + Math.PI;
    setMode(a, 'dance'); setMode(b, 'dance'); setExpr(a.gh, 'o'); setExpr(b.gh, 'o');
    later(() => { setExpr(a.gh, 'happy'); setExpr(b.gh, 'happy'); }, 500);
    S.combo++; S.bestCombo = Math.max(S.bestCombo, S.combo); S.pairsFound++;
    const gold = a.type === 'gold'; const pts = 100 + 50 * (S.combo - 1) + (gold ? 500 : 0);
    if (play) { S.log.match++; if (S.combo > 1) S.log.combo++; if (gold) { S.log.gold++; S.gold = true; }
      if (S.mode === 'two') { const P = S.players[S.turn]; P.pairs++; P.score += pts; } else { S.score += pts; S.total += pts; }
      bumpScore(); }
    A.sfx.match(S.combo); if (gold) A.sfx.gold();
    const sp = screenOf(new THREE.Vector3((a.hx + b.hx) / 2, 1.8, (a.hz + b.hz) / 2));
    if (play) FX.popup(O, sp.x, sp.y, '+' + pts, gold ? '#ffd040' : '#ffe2a8', gold ? 46 : 36, 1.2);
    if (play) banner(gold ? T('gold') : S.combo > 1 ? `${T('combo')} x${S.combo}` : T('match'), S.mode === 'two' ? `${S.players[S.turn].name} — ${T('again')}` : T('g_' + a.type), S.combo > 2 || gold);
    for (const c of [a, b]) { FX.sparkle(F, new THREE.Vector3(c.hx, 1.2, c.hz), rgbOf(c.type), 50, 4, 0.3, 1.0, 0); }
    later(() => { a.stone.target = 0; b.stone.target = 0; }, 1500);
    later(() => { for (const c of [a, b]) { c.stone.done = true; c.stone.candle.visible = true; c.stone.wob = 0.7; dust(c, 0.4); } A.sfx.sink(); }, 2050);
    S.busy = 0;
    if (S.pairsFound >= S.pairs) { S.busy = 1; later(() => levelComplete(), 2700); }
  } else {
    setMode(a, 'shrug'); setMode(b, 'shrug'); setExpr(a.gh, 'sad'); setExpr(b.gh, 'sad'); A.sfx.mismatch();
    S.combo = 0; if (play) S.log.miss++;
    if (play && S.mode === 'two') { S.turn = 1 - S.turn; S.log.turn++; A.sfx.turn(); later(() => { if (S.state === 'play') banner(S.players[S.turn].name + T('turn'), '', S.turn === 1); }, 900); }
    else if (play) banner(T('nope'), '', false, true);
    S.busy = 1; S.unlockT = S.fogOn ? 1.15 : 1.45;
    if (play && levelDef().swap && S.mode !== 'two' || play && levelDef().swap && S.mode === 'two') S.swapCd--;
  }
}
function bumpScore() { const e = $('scoreN'); e.classList.remove('bump'); void e.offsetWidth; e.classList.add('bump'); }
function banner(main, sub = '', purple = false, small = false) {
  const el = $('banner'); el.className = ''; el.innerHTML = `<span class="c">${main}</span>${sub ? `<span class="p">${sub}</span>` : ''}`;
  el.style.fontSize = small ? 'clamp(26px,4.5vw,54px)' : ''; void el.offsetWidth; el.className = 'show' + (purple ? ' purple' : '');
}
// swap twist: a cheeky ghost lifts two unrevealed stones and swaps them
let swapper = null;
// menu showcase: two big ghosts hovering beside the start / end card so the menu is alive from frame 0
const show = [];
function updateShow(dt) {
  if (!show.length) for (const [t, sd] of [['pumpkin', -1], ['witch', 1], ['bat', -1], ['cat', 1]]) { const g = createGhost(t); scene.add(g.root); show.push({ g, sd, k: 0, ph: rand(0, 6) }); }
  const on = S.state === 'attract' || S.state === 'end', port = camera.aspect < 0.9;
  const fw = new THREE.Vector3(), rt = new THREE.Vector3(), up = new THREE.Vector3(0, 1, 0);
  camera.getWorldDirection(fw); rt.crossVectors(fw, up).normalize();
  show.forEach((o, i) => {
    o.k = damp(o.k, on ? 1 : 0, 3, dt); o.g.root.visible = o.k > 0.02;
    if (!o.g.root.visible) return;
    const row = i < 2 ? 0 : 1, d = 6.5 + row * 2.5, hw = d * Math.tan(THREE.MathUtils.degToRad(camera.fov) / 2) * camera.aspect;
    const x = o.sd * hw * (port ? 0.62 : (row ? 0.62 : 0.74)), y = port ? (row ? -0.2 : -1.6) * (d / 6.5) : (row ? 0.9 : -0.9) + Math.sin(S.clock * 1.4 + o.ph) * 0.2;
    o.g.root.position.copy(camera.position).addScaledVector(fw, d).addScaledVector(rt, x * (0.6 + 0.4 * o.k)).addScaledVector(up, y - (1 - o.k) * 3);
    o.g.root.scale.setScalar((port ? 0.7 : 1.0) * (row ? 0.75 : 1) * o.k);
    o.g.root.lookAt(camera.position); o.g.root.rotation.z += o.sd * 0.15;
    updateGhost(o.g, dt, { armL: 1.2 + Math.sin(S.clock * 4 + i) * 0.8, armR: 0.6, tilt: o.sd * -0.12 });
  });
}
function trySwap(force = false) {
  const pool = S.cards.filter(c => c.state === 'down');
  if (pool.length < 4 && !force) return false; if (pool.length < 2) return false;
  const a = pick(pool), b = pick(pool.filter(c => c !== a && Math.hypot(c.x - a.x, c.z - a.z) < 6)) || pick(pool.filter(c => c !== a));
  if (!swapper) { swapper = createGhost('sheet'); swapper.bodyMat.color.set(0xd8a8ff); swapper.bodyMat.emissive.set(0x9a50ff); setExpr(swapper, 'o'); board.add(swapper.root); }
  swapper.root.visible = true; S.swapAnim = { a, b, cards: [a, b], t: 0, pa: a.stone.root.position.clone(), pb: b.stone.root.position.clone(), done: false };
  S.log.swap++; A.sfx.swap(); banner('👻🔀', T('swap'), true);
  return true;
}
function updateSwap(dt) {
  const sw = S.swapAnim; if (!sw) return; sw.t += dt; const t = sw.t, g = swapper.root;
  const mid = sw.pa.clone().lerp(sw.pb, 0.5);
  // 0-0.6 fly in · 0.6-1.0 grab/lift · 1.0-1.9 swap arc · 1.9-2.2 drop · 2.2-2.8 fly away
  if (t < 0.6) { const k = ease(t / 0.6); g.position.set(lerp(mid.x + 6, mid.x, k), lerp(6, 2.6, k), lerp(mid.z - 4, mid.z, k)); }
  else if (t < 2.2) { g.position.set(mid.x + Math.sin(t * 3) * 0.3, 2.6 + Math.sin(t * 6) * 0.15, mid.z); }
  else { const k = ease((t - 2.2) / 0.6); g.position.set(lerp(mid.x, mid.x - 7, k), lerp(2.6, 7, k), lerp(mid.z, mid.z - 5, k)); }
  g.rotation.y = Math.atan2(camera.position.x - g.position.x, camera.position.z - g.position.z); g.scale.setScalar(1.15);
  updateGhost(swapper, dt, { armL: 2.4, armR: 2.4, tilt: Math.sin(t * 5) * 0.2 });
  const lift = t < 0.6 ? 0 : t < 1.0 ? ease((t - 0.6) / 0.4) * 0.9 : t < 1.9 ? 0.9 : t < 2.2 ? 0.9 * (1 - ease((t - 1.9) / 0.3)) : 0;
  const k = clamp((t - 1.0) / 0.9, 0, 1), e = k * k * (3 - 2 * k);
  const pa = sw.pa.clone().lerp(sw.pb, e), pb = sw.pb.clone().lerp(sw.pa, e), side = Math.sin(e * Math.PI) * 0.9;
  const dx = sw.pb.x - sw.pa.x, dz = sw.pb.z - sw.pa.z, L = Math.hypot(dx, dz) || 1, nx = -dz / L, nz = dx / L;
  sw.a.stone.root.position.set(pa.x + nx * side, lift, pa.z + nz * side); sw.b.stone.root.position.set(pb.x - nx * side, lift, pb.z - nz * side);
  if (t > 0.6 && t < 0.7 && !sw.g1) { sw.g1 = 1; A.sfx.flip(0); }
  if (t > 2.2 && !sw.done) {
    sw.done = true; A.sfx.sink(); FX.shake(F, 0.1);
    // swap card identities in the grid (positions follow the stones)
    const ia = S.cards.indexOf(sw.a), ib = S.cards.indexOf(sw.b); S.cards[ia] = sw.b; S.cards[ib] = sw.a; sw.a.i = ib; sw.b.i = ia;
    S.swapAnim = null; layout(true); dust(sw.a, 0.6); dust(sw.b, 0.6); sw.a.stone.wob = 1; sw.b.stone.wob = 1;
    later(() => { if (swapper) swapper.root.visible = false; }, 600); S.swapFly = 0.6;
  }
}
function setFog(on) { if (S.fogOn === on) return; S.fogOn = on; if (on) { S.log.fog++; A.sfx.fog(); banner('🌫️', T('fogIn'), true, true); } A.setWind(on ? 1.2 : 0.2); }
// ---------------- rounds ----------------
function startGame(mode = 'solo', lvl = S.startLvl) {
  A.unlockAudio();
  if (!store.get('gm-tut', false) && !window.__gmNoTut) { tutOpen(() => startGame(mode, lvl)); return; }
  S.mode = mode; S.startLvl = lvl; S.lvl = lvl; S.total = 0; S.totalMoves = 0; S.totalTime = 0; S.totalPairs = 0; S.starsSum = 0; S.starsMax = 0; S.lvStars = []; S.bestCombo = 0; S.gold = false;
  for (const k in S.log) S.log[k] = 0;
  S.players[0] = { name: ($('n1').value || 'Player 1').trim(), pairs: 0, score: 0 }; S.players[1] = { name: ($('n2').value || 'Player 2').trim(), pairs: 0, score: 0 }; S.turn = 0;
  store.set('gm-n1', S.players[0].name); store.set('gm-n2', S.players[1].name);
  document.body.classList.toggle('two', mode === 'two');
  $('start').classList.add('hidden'); $('end').classList.add('hidden'); $('lvDone').classList.add('hidden'); $('hud').classList.remove('hidden');
  startLevel();
}
function startLevel() {
  const def = levelDef();
  O.pops.length = 0; S.state = 'play'; S.paused = false; S.moves = 0; S.time = 0; S.combo = 0; S.score = 0; S.busy = 0; S.unlockT = 0; S.swapAnim = null;
  S.swapCd = rand(3, 5) | 0; S.fogT = 7; setFog(false); W.fogK = 0;
  buildBoard(def);
  S.peekT = S.kids ? 3.6 : 1.3; for (const c of S.cards) { c.stone.target = 0.42; setMode(c, 'peek'); }
  A.sfx.peek(); banner(T(def.name), S.kids ? T('memorize') : T('peek'), false);
  $('lvName').textContent = `${T('level')} ${S.lvl + 1} · ${T(def.name)}`;
  $('twists').textContent = [def.swap && T('twistSwap'), def.fog && T('twistFog'), def.gold && T('twistGold')].filter(Boolean).join(' · ');
  if (S.mode === 'two') { banner(T(def.name), S.players[0].name + T('turn')); }
  updateHud();
}
function endPeek() { for (const c of S.cards) { if (c.mode === 'peek') { setMode(c, 'sink'); c.t = 0.1; } c.stone.target = 0; } A.sfx.sink(); }
function stars() { if (S.kids) return S.moves <= S.pairs * 2 ? 3 : 2; const p = S.pairs; return S.moves <= Math.ceil(p * 1.55) ? 3 : S.moves <= Math.ceil(p * 2.2) ? 2 : 1; }
function levelComplete() {
  if (S.state !== 'play') return;
  S.busy = 1; setFog(false);
  if (S.mode === 'two') { return endGame(); }
  const st = stars(), tb = S.kids ? 0 : Math.max(0, Math.round((S.pairs * 9 - S.time) * 10)), sb = st * 200;
  S.score += tb + sb; S.total += tb + sb; S.starsSum += st; S.starsMax += 3; S.lvStars.push(st); S.totalTime += S.time; S.totalPairs += S.pairs;
  const k = 'gm-lv-' + (S.kids ? 'k' : '') + S.lvl; store.set(k, Math.max(store.get(k, 0), st));
  A.sfx.levelWin(); celebrate();
  const last = S.lvl >= (S.kids ? KLEVELS : LEVELS).length - 1;
  $('lvStars').querySelectorAll('span').forEach((s, i) => { s.classList.remove('on'); later(() => { if (i < st) { s.classList.add('on'); A.sfx.star(i); } }, 350 + i * 380); });
  $('lvStats').innerHTML = `<div><b>${S.moves}</b>${T('moves')}</div>` + (S.kids ? '' : `<div><b>${mmss(S.time)}</b>${T('time')}</div>`) + `<div><b>+${fmt(tb + sb)}</b>${T('score')}</div>`;
  $('btnNext').textContent = last ? T('finish') : T('next');
  S.state = 'lvdone'; updateHud();
  later(() => $('lvDone').classList.remove('hidden'), 500);
}
function nextLevel() {
  $('lvDone').classList.add('hidden'); A.sfx.ui();
  if (S.lvl >= (S.kids ? KLEVELS : LEVELS).length - 1) return endGame();
  S.lvl++; startLevel();
}
function celebrate() { for (let i = 0; i < 6; i++) later(() => { const p = new THREE.Vector3(rand(-5, 5), rand(4, 7), rand(-4, 1)); FX.sparkle(F, p, pick([[1.8, 1.2, 0.4], [1.4, 0.8, 1.9], [0.8, 1.8, 1.2]]), 70, 6, 0.35, 1.4, 1.5); FX.ring(F, p, 5, 0.6, 0xffd0a0); }, i * 260); }
function result() {
  if (S.mode === 'two') { const [a, b] = S.players; return { two: true, p: S.players, winner: a.pairs === b.pairs ? (a.score === b.score ? null : (a.score > b.score ? a.name : b.name)) : (a.pairs > b.pairs ? a.name : b.name), name: S.nameV }; }
  return { name: (S.nameV || 'Player').trim() || 'Player', score: S.total, pairs: S.totalPairs + (S.state === 'play' ? S.pairsFound : 0), moves: S.totalMoves, time: S.totalTime + (S.state === 'play' ? S.time : 0), stars: S.starsSum, maxStars: Math.max(3, S.starsMax), bestCombo: S.bestCombo, gold: S.gold, levels: S.lvStars.length };
}
function endGame(quit = false) {
  if (S.state === 'end') return;
  const r = result(); S.endR = r; S.state = 'end'; S.busy = 0; setFog(false);
  $('hud').classList.add('hidden'); $('lvDone').classList.add('hidden'); $('pauseScr').classList.add('hidden');
  if (r.two) {
    $('endTitle').textContent = T('end2p'); $('endScore').textContent = r.winner ? `🏆 ${r.winner}` : T('draw');
    $('endDuel').textContent = `${r.p[0].name} ${r.p[0].pairs} : ${r.p[1].pairs} ${r.p[1].name}`; $('newBest').classList.add('hidden');
    if (r.winner) banner(`${r.winner} ${T('wins')}`, '🏆👻', true); else banner(T('draw'), '👻👻');
    A.sfx.celebrate(); celebrate();
  } else {
    $('endTitle').textContent = quit ? T('endTitleQuit') : T('endTitle'); $('endScore').textContent = fmt(r.score);
    $('endStars').textContent = '⭐'.repeat(r.stars) + '☆'.repeat(Math.max(0, r.maxStars - r.stars));
    const isBest = r.score > S.best && r.score > 0; if (isBest) { S.best = r.score; store.set('gm-best', S.best); A.sfx.newBest(); } else A.sfx.celebrate();
    $('newBest').classList.toggle('hidden', !isBest); $('rank').textContent = '👻 ' + rankFor(r.score);
    $('stPairs').textContent = r.pairs; $('stMoves').textContent = r.moves; $('stTime').textContent = mmss(r.time); $('stCombo').textContent = 'x' + r.bestCombo; $('stBest').textContent = fmt(S.best);
    celebrate();
  }
  $('name').value = S.nameV; updateShare();
  later(() => { $('end').classList.remove('hidden'); }, 900);
  // the board keeps living behind the end card: back to attract demo
  later(() => { if (S.state === 'end') attract(); }, 1200);
}
function attract(keepState) {
  S.mode = 'solo'; if (!keepState) S.state = S.state === 'end' ? 'end' : 'attract'; S.busy = 0; S.unlockT = 0; S.peekT = 0; S.swapAnim = null; setFog(false); if (W) W.fogK = 0;
  buildBoard({ c: 4, r: 3 }); S.aiT = 0.3; S.aiMem = {};
}
function curRes() { const r = S.endR || result(); if (!r.two) r.name = (S.nameV || 'Player').trim() || 'Player'; return r; }
function updateShare() { $('shareText').textContent = shareText(curRes(), S.shareLang); document.querySelectorAll('#shareLang button').forEach(b => b.classList.toggle('on', b.dataset.sl === S.shareLang)); }
// ---------------- attract demo AI (also drives the background behind menus) ----------------
function ai(dt) {
  S.aiT -= dt; if (S.aiT > 0 || S.busy || S.sel.length >= 2 || S.swapAnim) return;
  const down = S.cards.filter(c => c.state === 'down'); if (!down.length) { attract(true); return; }
  let c;
  if (S.sel.length === 1) { const want = S.sel[0].type; const m = down.find(x => x.type === want); c = m && Math.random() < 0.55 ? m : pick(down); }
  else c = pick(down);
  flip(c); S.aiT = S.sel.length === 1 ? 0.55 : 1.1;
}
// ---------------- input ----------------
const ray = new THREE.Raycaster(), ndc = new THREE.Vector2();
let hoverC = null;
function cardAt(x, y) {
  ndc.set(x / window.innerWidth * 2 - 1, -(y / window.innerHeight) * 2 + 1); ray.setFromCamera(ndc, camera);
  const hits = ray.intersectObjects(S.cards.map(c => c.stone.hit), false); return hits.length ? S.cards.find(c => c.stone.hit === hits[0].object) : null;
}
canvas.addEventListener('pointermove', ev => { cam.px = ev.clientX / window.innerWidth * 2 - 1; cam.py = ev.clientY / window.innerHeight * 2 - 1; if (S.state !== 'play') return; hoverC = cardAt(ev.clientX, ev.clientY); canvas.style.cursor = hoverC && hoverC.state === 'down' ? 'pointer' : 'default'; });
canvas.addEventListener('pointerdown', ev => { if (S.state !== 'play') return; if (ev.pointerType !== 'mouse') document.body.classList.add('touch'); const c = cardAt(ev.clientX, ev.clientY); if (c) { hoverC = c; S.focus = S.cards.indexOf(c); flip(c); } });
const keyFocus = { on: false };
window.addEventListener('keydown', ev => {
  if (ev.key === '?') { tutOpen(); return; }
  if (S.state !== 'play' || S.paused || S.tut) return;
  const k = ev.key; let f = S.focus;
  if (k === 'ArrowLeft') f -= 1; else if (k === 'ArrowRight') f += 1; else if (k === 'ArrowUp') f -= S.cols; else if (k === 'ArrowDown') f += S.cols;
  else if (k === 'Enter' || k === ' ') { flip(S.cards[S.focus]); ev.preventDefault(); return; }
  else if (k === 'Escape' || k === 'p') { pause(true); return; } else return;
  ev.preventDefault(); keyFocus.on = true; S.focus = clamp(f, 0, S.cards.length - 1);
});
// ---------------- HUD ----------------
function updateHud() {
  if (S.mode === 'two') { $('scoreN').textContent = `${S.players[0].pairs} : ${S.players[1].pairs}`; }
  else $('scoreN').textContent = fmt(S.total);
  $('pairsN').textContent = `${S.pairsFound}/${S.pairs}`; $('movesN').textContent = S.moves; $('timeN').textContent = mmss(S.time);
  $('comboN').textContent = S.combo > 1 ? `${T('combo')} x${S.combo}` : ''; $('comboN').classList.toggle('on', S.combo > 1);
  $('tp0').textContent = `${S.players[0].name} · ${S.players[0].pairs}`; $('tp1').textContent = `${S.players[1].name} · ${S.players[1].pairs}`;
  $('tp0').classList.toggle('on', S.turn === 0); $('tp1').classList.toggle('on', S.turn === 1);
}
function screenOf(v) { const p = v.clone().project(camera); return { x: (p.x + 1) / 2 * window.innerWidth, y: (1 - p.y) / 2 * window.innerHeight }; }
function toast(msg, ms = 2200) { const t = $('toast'); t.textContent = msg; t.classList.add('show'); clearTimeout(toast._t); toast._t = setTimeout(() => t.classList.remove('show'), ms); }
async function copyShare() {
  const txt = shareText(curRes(), S.shareLang); let ok = false;
  try { if (navigator.clipboard && window.isSecureContext !== false) { await navigator.clipboard.writeText(txt); ok = true; } } catch (e) {}
  if (!ok) { try { const ta = document.createElement('textarea'); ta.value = txt; ta.style.position = 'fixed'; ta.style.opacity = '0'; document.body.appendChild(ta); ta.select(); ok = document.execCommand('copy'); ta.remove(); } catch (e) {} }
  window.__gmLastShare = txt; toast(ok ? T('copied') : T('copyFail')); A.sfx.ui(); return ok;
}
function renderNow() { if (composer) composer.render(); else renderer.render(scene, camera); }
function makeShot() {
  renderNow();
  const c = document.createElement('canvas'); c.width = 1080; c.height = 1350; const g = c.getContext('2d');
  const src = renderer.domElement, sw2 = src.width, sh = src.height, k = Math.max(1080 / sw2, 1350 / sh);
  g.drawImage(src, (1080 - sw2 * k) / 2, (1350 - sh * k) / 2, sw2 * k, sh * k);
  const vg = g.createLinearGradient(0, 0, 0, 1350); vg.addColorStop(0, 'rgba(14,4,24,0.3)'); vg.addColorStop(0.45, 'rgba(14,4,24,0.5)'); vg.addColorStop(1, 'rgba(14,4,24,0.88)');
  g.fillStyle = vg; g.fillRect(0, 0, 1080, 1350);
  const r = S.endR || result(), L = getLang();
  const SERIF = 'Didot, "Bodoni 72", Georgia, "Times New Roman", serif', SANS = '"Arial Black", Impact, sans-serif';
  const txt = (s, x, y, size, fill, glow, font = SANS, weight = '900', spacing = 0) => { g.font = `${weight} ${size}px ${font}`; g.textAlign = 'center'; g.textBaseline = 'middle'; if ('letterSpacing' in g) g.letterSpacing = spacing + 'px'; g.shadowColor = glow; g.shadowBlur = size * 0.45; g.fillStyle = fill; g.fillText(s, x, y); g.shadowBlur = 0; if ('letterSpacing' in g) g.letterSpacing = '0px'; };
  const grad = (y0, y1, a, b, c3) => { const gr = g.createLinearGradient(0, y0, 0, y1); gr.addColorStop(0, a); gr.addColorStop(0.5, b); gr.addColorStop(1, c3); return gr; };
  txt('GHOST', 540, 160, 132, grad(100, 220, '#fffbe6', '#ffd070', '#e0600a'), 'rgba(255,140,30,0.9)', SERIF, '900', 14);
  txt('MEMORY', 540, 285, 96, grad(240, 330, '#ffffff', '#e2b8ff', '#8a3cff'), 'rgba(176,77,255,0.95)', SERIF, '900', 16);
  const rr = (x, y, w, h, Rr) => { g.beginPath(); g.moveTo(x + Rr, y); g.arcTo(x + w, y, x + w, y + h, Rr); g.arcTo(x + w, y + h, x, y + h, Rr); g.arcTo(x, y + h, x, y, Rr); g.arcTo(x, y, x + w, y, Rr); g.closePath(); };
  g.save(); g.fillStyle = 'rgba(34,12,52,0.62)'; g.strokeStyle = 'rgba(255,190,120,0.5)'; g.lineWidth = 3; rr(100, 410, 880, 760, 48); g.shadowColor = 'rgba(176,77,255,0.5)'; g.shadowBlur = 50; g.fill(); g.shadowBlur = 0; g.stroke(); g.restore();
  if (r.two) {
    txt(T('end2p', L), 540, 490, 44, '#f2d0ff', 'rgba(176,77,255,0.9)');
    txt(r.winner ? '🏆 ' + r.winner.toUpperCase() : T('draw', L), 540, 620, 96, grad(560, 680, '#fff3c4', '#ffb547', '#ff6a0a'), 'rgba(255,120,20,0.95)');
    txt(`${r.p[0].name}  ${r.p[0].pairs} : ${r.p[1].pairs}  ${r.p[1].name}`, 540, 760, 56, '#ffffff', 'rgba(255,140,30,0.7)');
    txt('👻👻 ' + T('pairs', L).toUpperCase(), 540, 860, 32, 'rgba(255,240,230,0.8)', 'rgba(0,0,0,0)', SANS, '800');
  } else {
    txt('👻 ' + r.name.toUpperCase(), 540, 485, 44, '#f2d0ff', 'rgba(176,77,255,0.9)');
    txt(fmt(r.score, L), 540, 610, 140, grad(540, 690, '#fff3c4', '#ffb547', '#ff6a0a'), 'rgba(255,120,20,0.95)');
    txt('⭐'.repeat(r.stars) + '☆'.repeat(Math.max(0, r.maxStars - r.stars)), 540, 715, r.maxStars > 9 ? 40 : 54, '#ffd040', 'rgba(255,200,40,0.8)');
    txt(rankFor(r.score, L), 540, 790, 50, '#ffd9a8', 'rgba(255,140,30,0.9)');
    const st = [[r.pairs, T('pairs', L)], [r.moves, T('stMoves', L)], ['x' + r.bestCombo, T('stCombo', L)]];
    st.forEach(([v, l], i) => { const x = 250 + i * 290; g.fillStyle = 'rgba(255,255,255,0.08)'; rr(x - 125, 860, 250, 160, 26); g.fill(); txt(String(v), x, 920, 52, '#fff0d0', 'rgba(255,160,60,0.6)'); txt(l.toUpperCase(), x, 985, 22, 'rgba(255,240,230,0.8)', 'rgba(0,0,0,0)', SANS, '800'); });
  }
  txt(L === 'de' ? 'Findest du alle Geister?' : 'Can you find every ghost?', 540, 1100, 42, '#ffffff', 'rgba(255,120,240,0.8)', SANS, '800');
  txt('#GhostMemory', 540, 1265, 40, '#ffb547', 'rgba(255,120,20,0.8)');
  return c;
}
function saveShot() {
  const c = makeShot(); const url = c.toDataURL('image/png');
  const a = document.createElement('a'); a.href = url; a.download = `ghost-memory-${curRes().score || 'duel'}.png`; document.body.appendChild(a); a.click(); a.remove();
  window.__gmLastShot = url.length; toast(T('saved')); A.sfx.ui(); return url;
}
// ---------------- tutorial / UI wiring ----------------
function tutOpen(then = null) { S.tut = true; S.tutThen = then; $('tut').classList.remove('hidden'); }
function tutClose() { S.tut = false; $('tut').classList.add('hidden'); store.set('gm-tut', true); A.sfx.ui(); if (S.tutThen) { const f = S.tutThen; S.tutThen = null; f(); } }
function levelButtons() {
  const L = S.kids ? KLEVELS : LEVELS;
  if (S.startLvl >= L.length) S.startLvl = 0;
  $('levels').innerHTML = L.map((d, i) => { const st = store.get('gm-lv-' + (S.kids ? 'k' : '') + i, 0); return `<button data-l="${i}" class="${i === S.startLvl ? 'on' : ''}">${i + 1}. ${T(d.name)} <small>${d.c}×${d.r}${st ? ' ' + '⭐'.repeat(st) : ''}</small></button>`; }).join('');
  $('levels').querySelectorAll('button').forEach(b => b.onclick = () => { S.startLvl = +b.dataset.l; levelButtons(); A.sfx.ui(); });
}
function refreshTexts() {
  applyI18n(S.kids);
  document.querySelectorAll('#langSeg button, #langSeg2 button').forEach(b => b.classList.toggle('on', b.dataset.lang === getLang()));
  if (S.state === 'end') updateShare(); levelButtons(); qualHint(); $('bestStart').textContent = fmt(S.best);
  if (S.state === 'play') { const def = levelDef(); $('lvName').textContent = `${T('level')} ${S.lvl + 1} · ${T(def.name)}`; }
}
function setKids(on) {
  S.kids = !!on; store.set('gm-kids', S.kids); $('chkKids').checked = S.kids; $('chkKids2').checked = S.kids; A.setKids(S.kids);
  document.body.classList.toggle('kids', S.kids); S.startLvl = 0; refreshTexts();
}
$('btnPlay').onclick = () => startGame('solo', S.startLvl);
$('btnPlay2').onclick = () => startGame('two', Math.min(S.startLvl, 1) || (S.kids ? 1 : 1));
$('btnReplay').onclick = () => startGame(S.endR && S.endR.two ? 'two' : 'solo', S.startLvl);
$('btnMenu').onclick = () => { $('end').classList.add('hidden'); $('start').classList.remove('hidden'); S.state = 'attract'; refreshTexts(); A.sfx.ui(); };
$('btnNext').onclick = () => nextLevel();
$('chkKids').onchange = e => setKids(e.target.checked);
$('chkKids2').onchange = e => setKids(e.target.checked);
document.querySelectorAll('#langSeg button, #langSeg2 button').forEach(b => b.onclick = () => { setLang(b.dataset.lang); S.shareLang = getLang(); refreshTexts(); A.sfx.ui(); });
document.querySelectorAll('#shareLang button').forEach(b => b.onclick = () => { S.shareLang = b.dataset.sl; updateShare(); A.sfx.ui(); });
document.querySelectorAll('#qualSeg button').forEach(b => b.onclick = () => { applyQuality(b.dataset.q, true); qualHint(); A.sfx.ui(); });
$('btnSettings').onclick = () => $('settings').classList.remove('hidden');
$('btnCloseSettings').onclick = () => $('settings').classList.add('hidden');
$('settings').onclick = e => { if (e.target.id === 'settings') $('settings').classList.add('hidden'); };
$('volMusic').oninput = e => { A.setMusicVolume(e.target.value / 100); store.set('gm-vm', +e.target.value); };
$('volSfx').oninput = e => { A.setSfxVolume(e.target.value / 100); store.set('gm-vs', +e.target.value); };
function setMute(m) { A.setMuted(m); $('chkMute').checked = m; $('btnMute').textContent = m ? '🔇' : '🔊'; store.set('gm-mute', !!m); }
$('chkMute').onchange = e => setMute(e.target.checked);
$('btnMute').onclick = () => setMute(!A.isMuted());
function pause(on) { if (S.state !== 'play') return; S.paused = on; $('pauseScr').classList.toggle('hidden', !on); }
$('btnPause').onclick = () => pause(true);
$('btnResume').onclick = () => pause(false);
$('btnQuit').onclick = () => { pause(false); endGame(true); };
$('btnShare').onclick = () => copyShare();
$('btnShot').onclick = () => saveShot();
$('btnHelp').onclick = () => tutOpen(); $('btnHelp2').onclick = () => tutOpen();
$('btnTutGo').onclick = () => tutClose(); $('btnTutSkip').onclick = () => tutClose();
$('name').oninput = e => { S.nameV = e.target.value; store.set('gm-name', S.nameV); updateShare(); };
document.addEventListener('visibilitychange', () => { if (document.hidden) pause(true); });
window.addEventListener('resize', resize);
// ---------------- FPS → quality suggestion ----------------
const fps = { n: 0, t0: 0, ema: 60, slow: 0, decided: false, samples: 0 };
const qLabel = q => T('q_' + q);
function qualHint() { $('qualHint').textContent = `${T('suggested')}: ${qLabel(suggest())} (${Math.round(fps.ema)} fps)`; }
function suggest() { const e = fps.ema; return e >= 56 ? (Math.max(window.screen.width, window.screen.height) >= 1400 && (window.devicePixelRatio || 1) <= 2 ? 'ultra' : 'high') : e >= 42 ? 'high' : e >= 28 ? 'mid' : 'low'; }
function trackFps(now) {
  fps.n++; if (!fps.t0) fps.t0 = now;
  if (now - fps.t0 >= 1000) {
    const f = fps.n * 1000 / (now - fps.t0); fps.ema = fps.decided ? fps.ema * 0.6 + f * 0.4 : f; fps.n = 0; fps.t0 = now; fps.samples++; qualHint();
    if (!fps.decided && fps.samples >= 3) { fps.decided = true; if (!S.qualityUser && !window.__gmNoAutoQ) { const s = suggest(); if (s !== qName()) { applyQuality(s); toast(`${T('suggested')}: ${qLabel(s)} (${Math.round(fps.ema)} fps)`); } } }
    if (fps.decided && fps.ema < 24 && qName() !== 'low' && !window.__gmNoAutoQ) { fps.slow++; if (fps.slow >= 4) { fps.slow = 0; const order = ['low', 'mid', 'high', 'ultra']; const nq = order[Math.max(0, order.indexOf(qName()) - 1)]; applyQuality(nq); toast(`${T('fpsLow')} ${qLabel(nq)}`); } } else fps.slow = 0;
  }
}
// ---------------- main loop ----------------
function step(dt) {
  S.clock += dt;
  const live = S.state === 'play' && !S.paused && !S.tut;
  if (S.state === 'play' && (S.paused || S.tut)) dt = 0;
  runTimers(dt);
  if (S.peekT > 0 && !S.paused && !S.tut) { S.peekT -= dt; if (S.peekT <= 0) { S.peekT = 0; endPeek(); } }
  if (S.evalT > 0) { S.evalT -= dt; if (S.evalT <= 0) { S.evalT = 0; evaluate(); } }
  if (S.unlockT > 0) { S.unlockT -= dt; if (S.unlockT <= 0) { S.unlockT = 0; S.busy = 0; if (S.state === 'play' && levelDef().swap && S.swapCd <= 0) { S.swapCd = rand(3, 5) | 0; trySwap(); } } }
  if (live && S.peekT <= 0 && S.pairsFound < S.pairs) {
    S.time += dt;
    const def = levelDef();
    if (def.fog) { S.fogT -= dt; if (S.fogT <= 0) { setFog(!S.fogOn); S.fogT = S.fogOn ? 14 : 10; } }
  }
  if (W) W.fogK = damp(W.fogK, S.fogOn ? 1 : 0, 1.5, dt);
  if (S.state === 'attract' || S.state === 'end') ai(dt);
  updateSwap(dt); updateShow(dt);
  for (const c of S.cards) { c.stone.hoverOn = S.state === 'play' && (c === hoverC || (keyFocus.on && S.cards[S.focus] === c)) && c.state === 'down'; updateCard(c, dt); }
  if (S.state === 'play') updateHud();
}
function tick(dt) {
  step(dt);
  camTarget(_ct); camera.position.lerp(_ct, 1 - Math.exp(-2.5 * dt));
  if (F.shakeAmp > 0.001) camera.position.add(new THREE.Vector3(rand(-1, 1), rand(-1, 1), 0).multiplyScalar(F.shakeAmp * 0.3));
  camera.lookAt(cam.look);
  updateWorld(W, dt, camera); FX.updateFx(F, dt);
  for (const p of O.pops) p.t += dt; O.pops = O.pops.filter(p => p.t < p.life);
}
let lastT = performance.now();
function frame(now) {
  requestAnimationFrame(frame);
  const dt = Math.min(0.05, Math.max(0, (now - lastT) / 1000)); lastT = now;
  trackFps(now);
  if (window.__gmHold) return;
  tick(dt); renderNow(); FX.drawOverlay(O, 0, 0, O.w / 2, O.h / 2);
}
// ---------------- boot ----------------
function boot() {
  setLang(getLang());
  $('n1').value = store.get('gm-n1', 'Player 1'); $('n2').value = store.get('gm-n2', 'Player 2');
  const vm = store.get('gm-vm', 60), vs = store.get('gm-vs', 90); $('volMusic').value = vm; $('volSfx').value = vs; A.setMusicVolume(vm / 100); A.setSfxVolume(vs / 100);
  setMute(!!store.get('gm-mute', false)); $('chkKids').checked = S.kids; $('chkKids2').checked = S.kids; A.setKids(S.kids); document.body.classList.toggle('kids', S.kids);
  applyQuality(qName()); refreshTexts();
  attract();
  // pre-roll the demo so frame 0 already has ghosts in the air
  for (let i = 0; i < 150; i++) tick(1 / 30);
  snapCam(); renderNow();
  document.body.classList.add('ready');
  requestAnimationFrame(t => { lastT = t; frame(t); });
}
// ---------------- test / automation hooks ----------------
window.__gm = {
  S, camera, renderer, scene, get W() { return W; }, LEVELS, KLEVELS,
  start: (mode = 'solo', lvl = 0) => startGame(mode, lvl), flip: i => flip(S.cards[i]), applyQuality, setKids, setLang: l => { setLang(l); refreshTexts(); },
  cards: () => S.cards.map(c => ({ i: c.i, type: c.type, state: c.state, mode: c.mode })), pairOf: i => S.cards.findIndex((c, j) => j !== i && c.type === S.cards[i].type),
  mismatchOf: i => S.cards.findIndex((c, j) => j !== i && c.type !== S.cards[i].type && c.state === 'down'),
  ready: () => !S.busy && S.peekT <= 0 && !S.swapAnim && S.sel.length === 0 && S.evalT <= 0,
  skipPeek: () => { if (S.peekT > 0) { S.peekT = 0; endPeek(); } }, swap: () => trySwap(true), fog: on => setFog(!!on), nextLevel, endGame, levelComplete,
  screenOf: i => { const c = S.cards[i]; return screenOf(new THREE.Vector3(c.stone.root.position.x, 0.7, c.stone.root.position.z)); },
  snap: () => ({ state: S.state, mode: S.mode, lvl: S.lvl, cols: S.cols, rows: S.rows, n: S.cards.length, pairs: S.pairs, found: S.pairsFound, moves: S.moves, time: S.time, combo: S.combo, bestCombo: S.bestCombo, score: S.score, total: S.total, turn: S.turn, players: S.players.map(p => ({ ...p })), fog: S.fogOn, fogK: W ? W.fogK : 0, peek: S.peekT, busy: S.busy, kids: S.kids, gold: S.gold, log: { ...S.log }, swapping: !!S.swapAnim }),
  sim: (n = 1, dt = 1 / 60) => { for (let i = 0; i < n; i++) tick(dt); return true; },
  render: () => { renderNow(); FX.drawOverlay(O, 0, 0, O.w / 2, O.h / 2); return true; },
  hold: on => { window.__gmHold = !!on; }, shareText: l => shareText(S.endR || result(), l || S.shareLang), copyShare, makeShot: () => makeShot().toDataURL('image/png'),
  tutOpen, tutClose, sounds: () => A.soundsReady().then(n => ({ n, names: A.soundNames() })), sfx: A.sfx, audio: A, quality: () => qName(), fps: () => fps.ema, drawCalls: () => renderer.info.render.calls,
  lineup: () => { clearBoard(); const all = [...TYPES, 'gold']; all.forEach((t, i) => { const g = createGhost(t); g.root.position.set((i % 8 - 3.5) * 1.3, 1.0, ((i / 8) | 0) * 1.6 - 0.8); board.add(g.root); S.cards.push({ i, type: t, stone: createStone(0), gh: g, state: 'x', mode: 'x', t: 0 }); }); S.lineupMode = true; return all.length; }
};
boot();
