// Ghost Memory audio (adapted copy of the Trick or Treat Run / Witch Broom Race engine) — recorded CC0 samples (LICENSES/SOUNDS.md),
// embedded as base64 (js/sounds-src.js) so file:// works. Layered SFX with random pitch/volume; deep & warm, no synth beeps.
let ctx = null, limiter = null, master = null, comp = null, sfxBus = null, musicBus = null, musicTone = null;
let sfxOn = true, musicOn = true, muted = false;
let sfxVol = 0.9, musicVol = 0.6;
let kids = false;
let unlocked = false;
const MUSIC_GAIN = 0.55;
const buffers = {};
let decodePromise = null;

function now() { return ctx ? ctx.currentTime : 0; }
function ac() {
  if (!ctx && !unlocked) return null;
  if (!ctx) {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    try { ctx = new AC({ latencyHint: 'interactive' }); } catch (e) { ctx = new AC(); }
    buildGraph(ctx);
  }
  if (ctx.state === 'suspended') ctx.resume().catch(() => {});
  return ctx;
}
function buildGraph(c) {
  const lim = c.createDynamicsCompressor(); lim.threshold.value = -3; lim.knee.value = 0; lim.ratio.value = 20; lim.attack.value = 0.002; lim.release.value = 0.12;
  lim.connect(c.destination); limiter = lim;
  master = c.createGain(); master.gain.value = muted ? 0 : 0.85; master.connect(lim);
  comp = c.createDynamicsCompressor(); comp.threshold.value = -18; comp.ratio.value = 3; comp.attack.value = 0.005; comp.release.value = 0.25;
  comp.connect(master);
  sfxBus = c.createGain(); sfxBus.gain.value = sfxVol; sfxBus.connect(comp);
  musicTone = c.createBiquadFilter(); musicTone.type = 'lowpass'; musicTone.frequency.value = 9000; musicTone.Q.value = 0.5;
  musicBus = c.createGain(); musicBus.gain.value = 0; musicTone.connect(musicBus); musicBus.connect(comp);
  decodeAll(c);
}
function b64ToArrayBuffer(b64) {
  const bin = atob(b64), n = bin.length, u = new Uint8Array(n);
  for (let i = 0; i < n; i++) u[i] = bin.charCodeAt(i);
  return u.buffer;
}
function decodeOne(c, name, b64) {
  return new Promise(res => {
    let done = false;
    const ok = b => { if (done) return; done = true; buffers[name] = b; res(true); if (name.startsWith('music_')) refreshMusic(); };
    const bad = () => { if (done) return; done = true; res(false); };
    try { const p = c.decodeAudioData(b64ToArrayBuffer(b64), ok, bad); if (p && p.then) p.then(ok, bad); } catch (e) { bad(); }
  });
}
function decodeAll(c) {
  if (decodePromise) return decodePromise;
  const S = window.GM_SOUNDS || {};
  const names = Object.keys(S).sort((a, b) => (a.startsWith('music_') ? 1 : 0) - (b.startsWith('music_') ? 1 : 0));
  decodePromise = names.reduce((p, n) => p.then(() => decodeOne(c, n, S[n])), Promise.resolve()).then(() => Object.keys(buffers).length);
  return decodePromise;
}

const rnd = a => 1 + (Math.random() * 2 - 1) * a;
function play(name, { vol = 1, rate = 1, delay = 0, pan = 0, vary = 1 } = {}) {
  if (!sfxOn) return null;
  const c = ac(); if (!c) return null;
  const buf = buffers[name]; if (!buf) return null;
  const src = c.createBufferSource(); src.buffer = buf;
  src.playbackRate.value = rate * rnd(0.035 * vary);
  const g = c.createGain(); g.gain.value = Math.max(0, vol * rnd(0.1 * vary));
  let node = src.connect(g);
  if (pan && c.createStereoPanner) { const p = c.createStereoPanner(); p.pan.value = Math.max(-1, Math.min(1, pan)); node = node.connect(p); }
  node.connect(sfxBus);
  src.start(now() + delay);
  return src;
}
const pick = (...n) => n[(Math.random() * n.length) | 0];
let lastChime = -1, lastSwish = -1, lastBat = -1, chimeIdx = 0;

// ---------- wind loop (rises with speed) ----------
let wind = null;
const WLOOP = { start: 0.5, end: 8.5 };
function ensureWind() {
  const c = ac(); if (!c || wind || !buffers.wind) return;
  const src = c.createBufferSource(); src.buffer = buffers.wind; src.loop = true; src.loopStart = WLOOP.start; src.loopEnd = WLOOP.end;
  const lp = c.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 900; lp.Q.value = 0.4;
  const g = c.createGain(); g.gain.value = 0;
  src.connect(lp).connect(g).connect(sfxBus); src.start(now(), WLOOP.start);
  wind = { src, lp, g };
}
export function setWind(level, on = true) {
  if (!ctx) return; ensureWind(); if (!wind) return;
  const t = now(), l = Math.max(0, Math.min(1.6, level));
  wind.g.gain.setTargetAtTime(on && sfxOn ? (0.05 + 0.3 * l) * (kids ? 0.8 : 1) : 0, t, 0.6);
  wind.lp.frequency.setTargetAtTime(500 + 1400 * l, t, 0.5);
}
// per ghost type: a soft giggle-ish voice (sample, rate, vol)
const VOICE = {
  pumpkin: ['giggle', 1.05, 0.32], witch: ['laugh', 1.12, 0.26], bat: ['bats', 1.15, 0.30], skeleton: ['bone', 1.0, 0.45],
  cat: ['meow', 1.0, 0.36], vampire: ['boo', 0.95, 0.3], mummy: ['goo', 0.9, 0.4], candle: ['whisper_b', 1.25, 0.3],
  monster: ['laugh_kids', 0.8, 0.34], owl: ['squeak_kids', 0.85, 0.34], gold: ['giggle_kids', 1.0, 0.36], sheet: ['giggle_kids', 1.1, 0.3],
  zombie: ['goo', 0.75, 0.36], devil: ['laugh', 0.9, 0.24], spider: ['squeak_kids', 1.2, 0.3]
};
let lastFlip = -1;
export const sfx = {
  flip(pan = 0) { const t = now(); if (t - lastFlip < 0.04) return; lastFlip = t;
    play(pick('grind', 'grind_b'), { vol: 0.32, rate: 1.25, pan }); play('stone', { vol: 0.42, rate: 0.85, pan, delay: 0.05 }); play(pick('thud_a', 'thud_b'), { vol: 0.42, rate: 0.8, pan, delay: 0.16 }); },
  rise(pan = 0) { play('ghost', { vol: 0.34, rate: 1.15, pan }); play('lift', { vol: 0.28, rate: 1.1, pan, delay: 0.05 }); },
  voice(kind = 'sheet', pan = 0) { const v = VOICE[kind] || VOICE.sheet; play(v[0], { vol: v[2] * (kids ? 0.85 : 1), rate: v[1] * (kids ? 1.08 : 1), pan, delay: 0.18 }); },
  match(combo = 1) { const n = Math.min(combo, 6); play(['chime_a', 'chime_b', 'chime_c'][chimeIdx++ % 3], { vol: 0.42, rate: 0.85 + 0.05 * n }); play('harp', { vol: 0.32 + 0.03 * n, rate: 0.9 + 0.04 * n, delay: 0.08 }); play('magic', { vol: 0.24, delay: 0.25 });
    if (combo >= 3) play('sparkle', { vol: 0.32, rate: 0.9, delay: 0.3 }); },
  swirl() { play('whoosh', { vol: 0.3, rate: 1.1 }); play('sparkle', { vol: 0.3, rate: 0.8, delay: 0.25 }); },
  mismatch() { play('breath', { vol: 0.3, rate: 1.1 }); play('soft', { vol: 0.32, rate: 0.75, delay: 0.12 }); },
  sink() { play('grind', { vol: 0.24, rate: 1.4 }); play(pick('thud_a', 'thud_b'), { vol: 0.3, rate: 0.75, delay: 0.32 }); },
  swap() { play('laugh_kids', { vol: 0.36, rate: 0.9 }); play('whoosh', { vol: 0.32, rate: 0.85, delay: 0.1 }); play('grind_b', { vol: 0.3, rate: 1.1, delay: 0.35 }); },
  fog() { play('whisper', { vol: 0.25, rate: 0.9 }); },
  gold() { play('bell', { vol: 0.32, rate: 1.1 }); play('choir', { vol: 0.32, delay: 0.1 }); play('harp', { vol: 0.4, delay: 0.25 }); },
  peek() { play('fwoosh', { vol: 0.24, rate: 0.8 }); play('magic', { vol: 0.24, rate: 0.85 }); },
  turn() { play('bell', { vol: 0.22, rate: 1.35 }); },
  levelWin() { play('success', { vol: 0.45 }); play('choir', { vol: 0.4, delay: 0.1 }); play('harp', { vol: 0.42, delay: 0.3 }); },
  celebrate() { play('epic', { vol: 0.38 }); play('choir', { vol: 0.45, delay: 0.15 }); play('giggle_kids', { vol: 0.32, delay: 0.6 }); play('harp', { vol: 0.42, delay: 0.5 }); },
  star(i = 0) { play(['chime_a', 'chime_b', 'chime_c'][i % 3], { vol: 0.36, rate: 0.9 + i * 0.08 }); },
  tick() { play('thud_a', { vol: 0.16, rate: 1.4, vary: 0.2 }); },
  ui() { play('soft', { vol: 0.35, rate: 1.2, vary: 0.2 }); },
  newBest() { play('choir', { vol: 0.5 }); play('harp', { vol: 0.5, delay: 0.2 }); play('magic', { vol: 0.35, delay: 0.1 }); }
};

// ---------- music (gentle graveyard loop, ~33 s) ----------
const LOOP = { start: 0.05, end: 32.9 };
let cur = null, mood = 'main';
function refreshMusic() {
  if (!ctx) return;
  const want = musicOn && !muted;
  musicBus.gain.cancelScheduledValues(now());
  musicBus.gain.setTargetAtTime(want ? musicVol * MUSIC_GAIN * (kids ? 0.7 : 1) : 0, now(), 0.3);
  musicTone.frequency.setTargetAtTime(kids ? 3500 : 9000, now(), 0.3);
  if (want) startLoop();
}
function startLoop() {
  const c = ac(); if (!c) return;
  const buf = buffers.music_graveyard; if (!buf || cur) return;
  const t = now();
  const src = c.createBufferSource(); src.buffer = buf; src.loop = true;
  src.loopStart = LOOP.start; src.loopEnd = Math.min(LOOP.end, buf.duration);
  const g = c.createGain(); g.gain.setValueAtTime(0.0001, t); g.gain.linearRampToValueAtTime(1, t + 0.4);
  src.connect(g).connect(musicTone); src.start(t, LOOP.start);
  cur = { src, gain: g, t0: t };
}
export function setMood(m) { mood = m; if (ctx && musicTone) musicTone.frequency.setTargetAtTime(m === 'chase' ? 12000 : (kids ? 3500 : 9000), now(), 0.4); }
export function setRate(r) { if (cur) cur.src.playbackRate.setTargetAtTime(r, now(), 0.5); }
export function setMusicOn(on) { musicOn = !!on; refreshMusic(); }
export function setSfxOn(on) { sfxOn = !!on; }
export function setMuted(m) { muted = !!m; if (master) master.gain.setTargetAtTime(muted ? 0 : 0.85, now(), 0.05); refreshMusic(); }
export function isMuted() { return muted; }
export function setSfxVolume(v) { sfxVol = Math.max(0, Math.min(1, v)); if (sfxBus) sfxBus.gain.setTargetAtTime(sfxVol, now(), 0.05); }
export function setMusicVolume(v) { musicVol = Math.max(0, Math.min(1, v)); refreshMusic(); }
export function setKids(on) { kids = !!on; refreshMusic(); }
export function duck(amount = 0.35, dur = 1.5) {
  if (!ctx || !musicOn || muted) return;
  const t = now(), full = musicVol * MUSIC_GAIN * (kids ? 0.7 : 1);
  musicBus.gain.cancelScheduledValues(t); musicBus.gain.setValueAtTime(musicBus.gain.value, t);
  musicBus.gain.linearRampToValueAtTime(full * amount, t + 0.08); musicBus.gain.setValueAtTime(full * amount, t + dur);
  musicBus.gain.linearRampToValueAtTime(full, t + dur + 1.2);
}
// iOS Safari: resume inside the gesture, play a 1-sample silent buffer (unlocks output) and ask for 'playback' (ignores the mute switch)
function kick(c) { try { const b = c.createBuffer(1, 1, 22050), src = c.createBufferSource(); src.buffer = b; src.connect(c.destination); src.start(0); } catch (e) {} }
let kicked = false;
export function unlockAudio() { unlocked = true; try { if (navigator.audioSession && navigator.audioSession.type !== 'playback') navigator.audioSession.type = 'playback'; } catch (e) {} const c = ac(); if (c) { if (!kicked) { kicked = true; kick(c); } if (c.state !== 'running') c.resume().catch(() => {}); refreshMusic(); } }
export function audioState() { return ctx ? ctx.state : 'none'; }
export function soundsReady() { const c = ac(); return c ? decodeAll(c) : Promise.resolve(0); }
export function soundNames() { return Object.keys(buffers); }
export function suspendAudio(h) { if (!ctx) return; if (h) ctx.suspend().catch(() => {}); else ctx.resume().catch(() => {}); }
let tap = null;
export function getAnalyser() {
  const c = ac(); if (!c) return null;
  if (!tap) { tap = c.createAnalyser(); tap.fftSize = 2048; limiter.connect(tap); }
  return tap;
}
if (typeof window !== 'undefined') {
  const u = () => { unlockAudio(); window.removeEventListener('pointerdown', u, true); window.removeEventListener('keydown', u, true); window.removeEventListener('touchend', u, true); };
  window.addEventListener('pointerdown', u, true); window.addEventListener('keydown', u, true); window.addEventListener('touchend', u, true);
  document.addEventListener('visibilitychange', () => suspendAudio(document.hidden));
}
