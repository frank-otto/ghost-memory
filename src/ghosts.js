// Ghost Memory actors: the gravestone "cards" (tilt-back flip on a back-edge pivot, open grave glow, dirt mound, candle when solved)
// and 15 cute, expressive ghost types built from primitives (shared wavy-hem sheet body + per-type accessories + idle animations).
import * as THREE from 'three';
import { canvasTex, glowTexture, rand, clamp, lerp } from './util.js';
import { tex } from './tex.js';

export const TYPES = ['pumpkin', 'witch', 'bat', 'skeleton', 'cat', 'vampire', 'mummy', 'candle', 'monster', 'owl', 'sheet', 'zombie', 'devil', 'spider'];
export const ICON = { pumpkin: '🎃', witch: '🧙', bat: '🦇', skeleton: '💀', cat: '🐈‍⬛', vampire: '🧛', mummy: '🤕', candle: '🕯️', monster: '🧟‍♂️', owl: '🦉', sheet: '👻', zombie: '🧟', devil: '😈', spider: '🕷️', gold: '🌟' };
// body tint, glow color
const LOOK = {
  pumpkin: [0xffc890, 0xff8a30], witch: [0xd8b8ff, 0xa060ff], bat: [0xb8a8d8, 0x8060c0], skeleton: [0xf4f0e8, 0xd0e0ff], cat: [0x9a92b0, 0x70ffb0],
  vampire: [0xf0e4f4, 0xff3060], mummy: [0xf0e2c0, 0xffd080], candle: [0xfff0d0, 0xffb040], monster: [0xb8f0b0, 0x60ff90], owl: [0xe0c8a8, 0xffc060],
  sheet: [0xf8f6ff, 0xb8c8ff], zombie: [0xb8d8a0, 0x90ff60], devil: [0xffb0b0, 0xff4020], spider: [0xb0b8f0, 0x6080ff], gold: [0xffe08a, 0xffc020]
};
let GE = null, MT = null;
function geos() {
  if (GE) return GE;
  // ghost body: lathe dome + flowing skirt with a wavy hem
  const prof = []; for (let i = 0; i <= 16; i++) { const a = i / 16 * Math.PI / 2; prof.push(new THREE.Vector2(Math.sin(a) * 0.42, 0.18 + Math.cos(a) * 0.42)); }
  for (let i = 1; i <= 8; i++) { const k = i / 8; prof.push(new THREE.Vector2(0.42 + 0.12 * k * k, 0.18 - k * 0.62)); }
  prof.push(new THREE.Vector2(0.4, -0.46));
  const body = new THREE.LatheGeometry(prof, 36);
  const p = body.attributes.position;
  for (let i = 0; i < p.count; i++) { const y = p.getY(i); if (y < -0.1) { const a = Math.atan2(p.getZ(i), p.getX(i)); const k = clamp((-0.1 - y) / 0.36, 0, 1); p.setY(i, y + Math.sin(a * 7) * 0.06 * k); } }
  body.computeVertexNormals();
  GE = {
    body, sph: new THREE.SphereGeometry(1, 20, 14), cone: new THREE.ConeGeometry(1, 1, 16), cyl: new THREE.CylinderGeometry(1, 1, 1, 14), torus: new THREE.TorusGeometry(1, 0.22, 8, 24), band: new THREE.TorusGeometry(1, 0.05, 6, 32), rib: new THREE.TorusGeometry(1, 0.02, 6, 32, Math.PI * 0.8).rotateZ(Math.PI * 0.1),
    smile: new THREE.TorusGeometry(0.075, 0.018, 6, 16, Math.PI), box: new THREE.BoxGeometry(1, 1, 1), plane: new THREE.PlaneGeometry(1, 1),
    wing: (() => { const s = new THREE.Shape(); s.moveTo(0, 0); s.quadraticCurveTo(0.25, 0.28, 0.55, 0.22); s.quadraticCurveTo(0.5, 0.08, 0.56, -0.02); s.quadraticCurveTo(0.42, 0.02, 0.38, -0.1); s.quadraticCurveTo(0.28, -0.02, 0.2, -0.12); s.quadraticCurveTo(0.12, -0.04, 0, -0.06); return new THREE.ShapeGeometry(s); })(),
    pump: (() => { const g = new THREE.SphereGeometry(1, 28, 16); const q = g.attributes.position; for (let i = 0; i < q.count; i++) { const x = q.getX(i), y = q.getY(i), z = q.getZ(i); const a = Math.atan2(z, x); const r = 1 + 0.07 * Math.cos(a * 8); q.setXYZ(i, x * r, y * 0.82, z * r); } g.computeVertexNormals(); return g; })(),
    stoneSlab: (() => { const s = new THREE.Shape(); const w = 0.55, h = 0.92; s.moveTo(-w, 0); s.lineTo(-w, h); s.absarc(0, h, w, Math.PI, 0, true); s.lineTo(w, 0); s.lineTo(-w, 0);
      const g = new THREE.ExtrudeGeometry(s, { depth: 0.2, bevelEnabled: true, bevelThickness: 0.04, bevelSize: 0.04, bevelSegments: 3, curveSegments: 16 }); g.translate(0, 0, -0.1); return g; })(),
    stoneCross: (() => { const s = new THREE.Shape(); s.moveTo(-0.17, 0); s.lineTo(-0.17, 0.85); s.lineTo(-0.5, 0.85); s.lineTo(-0.5, 1.15); s.lineTo(-0.17, 1.15); s.lineTo(-0.17, 1.45); s.lineTo(0.17, 1.45); s.lineTo(0.17, 1.15); s.lineTo(0.5, 1.15); s.lineTo(0.5, 0.85); s.lineTo(0.17, 0.85); s.lineTo(0.17, 0);
      const g = new THREE.ExtrudeGeometry(s, { depth: 0.2, bevelEnabled: true, bevelThickness: 0.035, bevelSize: 0.035, bevelSegments: 2 }); g.translate(0, 0, -0.1); return g; })(),
    stonePoint: (() => { const s = new THREE.Shape(); s.moveTo(-0.5, 0); s.lineTo(-0.5, 1.05); s.lineTo(0, 1.42); s.lineTo(0.5, 1.05); s.lineTo(0.5, 0);
      const g = new THREE.ExtrudeGeometry(s, { depth: 0.22, bevelEnabled: true, bevelThickness: 0.04, bevelSize: 0.04, bevelSegments: 2 }); g.translate(0, 0, -0.11); return g; })()
  };
  return GE;
}
function mats() {
  if (MT) return MT;
  const std = o => new THREE.MeshStandardMaterial({ roughness: 0.75, ...o });
  const st = tex('stone');
  MT = {
    stone: std({ map: st, color: 0xc0b8cc, roughness: 0.9, emissive: 0x140c20, emissiveIntensity: 1 }),
    plaque: new THREE.MeshStandardMaterial({ map: canvasTex(256, 256, (c, w, h) => {
      c.fillStyle = 'rgba(0,0,0,0)'; c.clearRect(0, 0, w, h); c.font = '900 52px Georgia, serif'; c.textAlign = 'center'; c.textBaseline = 'middle';
      c.fillStyle = 'rgba(20,10,30,0.75)'; c.fillText('R.I.P.', w / 2, h * 0.36); c.fillStyle = 'rgba(255,255,255,0.12)'; c.fillText('R.I.P.', w / 2 - 2, h * 0.36 - 2);
      c.strokeStyle = 'rgba(20,10,30,0.6)'; c.lineWidth = 4; c.beginPath(); c.moveTo(w * 0.25, h * 0.55); c.lineTo(w * 0.75, h * 0.55); c.stroke();
      c.beginPath(); c.arc(w / 2, h * 0.73, 22, 0.5, Math.PI * 2 - 0.5); c.stroke(); // tiny moon
      for (let i = 0; i < 26; i++) { c.fillStyle = `rgba(60,110,50,${rand(0.15, 0.4)})`; c.beginPath(); c.arc(rand(0, w), h - rand(0, 50), rand(4, 14), 0, 7); c.fill(); }
    }), transparent: true, roughness: 0.9, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2 }),
    dirt: std({ map: tex('dirt'), color: 0xb89a88, roughness: 1, emissive: 0x1a1020 }),
    hole: new THREE.MeshBasicMaterial({ color: 0x050208 }),
    black: new THREE.MeshBasicMaterial({ color: 0x0a0610 }), white: new THREE.MeshBasicMaterial({ color: 0xffffff }),
    blush: new THREE.MeshBasicMaterial({ color: 0xff7aa8, transparent: true, opacity: 0.55, depthWrite: false }),
    mouth: new THREE.MeshBasicMaterial({ color: 0x2a0a20 }), tongue: new THREE.MeshBasicMaterial({ color: 0xff6a8a }),
    hat: std({ color: 0x2a1640, roughness: 0.6 }), band: std({ color: 0xff9a2a, emissive: 0x6a2a00 }), wing: std({ color: 0x6a4a9a, side: THREE.DoubleSide, roughness: 0.6, emissive: 0x3a1a60, emissiveIntensity: 0.8 }),
    bone: std({ color: 0xf4eee0 }), fur: std({ color: 0x2a2434, roughness: 0.9 }), cape: std({ color: 0x14081a, side: THREE.DoubleSide }), capeIn: std({ color: 0xa01030, side: THREE.DoubleSide, emissive: 0x300010 }),
    bandage: std({ map: tex('bandage'), color: 0xfff4dc, emissive: 0x302818 }), wax: std({ color: 0xfff2d8, emissive: 0x402810, roughness: 0.5 }),
    flame: new THREE.MeshBasicMaterial({ color: new THREE.Color(3.2, 1.9, 0.6) }), bolt: std({ color: 0x8a8a98, metalness: 0.8, roughness: 0.3 }), hair: std({ color: 0x1a1a22 }),
    beak: std({ color: 0xffa020 }), brown: std({ color: 0x7a4a2a }), horn: std({ color: 0xc02010, emissive: 0x400800 }), leg: std({ color: 0x20203a }),
    pump: std({ map: tex('pumpkinSkin'), color: 0xffffff, roughness: 0.55, emissive: 0x5a1800, emissiveIntensity: 0.5 }), stem: std({ color: 0x3a5a20 }),
    gold: std({ color: 0xffd060, metalness: 0.6, roughness: 0.3, emissive: 0xc07a00, emissiveIntensity: 1.1 }),
    carve: new THREE.MeshBasicMaterial({ alphaMap: tex('pumpkinFace'), color: new THREE.Color(3.2, 1.7, 0.45), transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }),
    brain: std({ color: 0xff90b0 }), rib: std({ color: 0x8a8498 })
  };
  return MT;
}
const glowCache = {};
function glowMat(hex) { if (!glowCache[hex]) { const c = new THREE.Color(hex); const rgb = `${(c.r * 255) | 0},${(c.g * 255) | 0},${(c.b * 255) | 0}`; glowCache[hex] = glowTexture(`rgba(${rgb},0.9)`, `rgba(${rgb},0.25)`); }
  return new THREE.SpriteMaterial({ map: glowCache[hex], transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, opacity: 0.6 }); }
const mesh = (g, m, x, y, z, sx, sy, sz, p) => { const o = new THREE.Mesh(g, m); o.position.set(x, y, z); o.scale.set(sx, sy ?? sx, sz ?? sx); if (p) p.add(o); return o; };

// ---------------- ghost ----------------
export function createGhost(type) {
  const G = geos(), M = mats(), [tint, glow] = LOOK[type] || LOOK.sheet;
  const root = new THREE.Group(), body = new THREE.Group(); root.add(body);
  const gh = { type, root, body, t: rand(0, 10), blinkT: rand(1, 4), arms: [], extra: {}, expr: 'happy', mood: 0 };
  const bm = new THREE.MeshStandardMaterial({ color: tint, emissive: tint, emissiveIntensity: type === 'gold' ? 0.5 : 0.28, roughness: 0.55, transparent: true, opacity: 0.93, side: THREE.DoubleSide, metalness: type === 'gold' ? 0.4 : 0 });
  gh.bodyMat = bm;
  const sheet = mesh(G.body, bm, 0, 0, 0, 1, 1, 1, body); sheet.castShadow = true;
  gh.glow = new THREE.Sprite(glowMat(glow)); gh.glow.scale.set(2.0, 2.0, 1); gh.glow.position.set(0, 0.15, -0.1); body.add(gh.glow);
  gh.light = null;
  // face
  const face = new THREE.Group(); face.position.set(0, 0.3, 0.405); body.add(face); gh.face = face;
  gh.eyes = [-1, 1].map(s => { const e = new THREE.Group(); e.position.set(s * 0.14, 0.02, 0); face.add(e); mesh(G.sph, M.black, 0, 0, 0, 0.075, 0.1, 0.04, e); mesh(G.sph, M.white, -0.022, 0.03, 0.03, 0.024, 0.024, 0.01, e); mesh(G.sph, M.white, 0.02, -0.03, 0.03, 0.011, 0.011, 0.01, e); return e; });
  [-1, 1].forEach(s => { const b = mesh(G.sph, M.blush, s * 0.25, -0.1, -0.05, 0.06, 0.035, 0.02, face); b.rotation.y = s * 0.5; });
  gh.smile = mesh(G.smile, M.mouth, 0, -0.1, 0.0, 1, 1, 1, face); gh.smile.rotation.x = -0.35; gh.smile.rotation.z = Math.PI;
  gh.oMouth = mesh(G.sph, M.mouth, 0, -0.13, -0.01, 0.045, 0.06, 0.02, face); gh.oMouth.visible = false;
  gh.frown = mesh(G.smile, M.mouth, 0, -0.17, -0.02, 0.8, 0.8, 1, face); gh.frown.visible = false;
  // nub arms on pivots
  [-1, 1].forEach(s => { const a = new THREE.Group(); a.position.set(s * 0.42, 0.0, 0.05); body.add(a); const h = mesh(G.sph, bm, s * 0.1, -0.02, 0, 0.12, 0.09, 0.09, a); h.castShadow = true; gh.arms.push(a); });
  ACC[type] && ACC[type](gh, G, M);
  return gh;
}
const ACC = {
  pumpkin(gh, G, M) { // the head is a carved pumpkin
    gh.face.position.set(0, 0.32, 0.47); const p = mesh(G.pump, M.pump, 0, 0.36, 0, 0.47, 0.47, 0.47, gh.body); p.castShadow = true; mesh(G.cyl, M.stem, 0, 0.78, 0, 0.05, 0.14, 0.05, gh.body).rotation.z = 0.25;
    gh.eyes.forEach(e => e.scale.setScalar(1.1)); const c = mesh(G.plane, M.carve, 0, 0.3, 0.39, 0.46, 0.4, 1, gh.body); c.visible = false; },
  witch(gh, G, M) { const h = new THREE.Group(); h.position.set(0, 0.62, 0); h.rotation.z = 0.12; gh.body.add(h); mesh(G.cyl, M.hat, 0, 0, 0, 0.5, 0.03, 0.5, h); mesh(G.cyl, M.band, 0, 0.06, 0, 0.27, 0.08, 0.27, h);
    const c = mesh(G.cone, M.hat, 0, 0.35, 0, 0.27, 0.65, 0.27, h); c.rotation.z = -0.15; const tip = mesh(G.cone, M.hat, 0.1, 0.72, 0, 0.09, 0.22, 0.09, h); tip.rotation.z = -0.9; gh.extra.hat = h; },
  bat(gh, G, M) { gh.extra.wings = [-1, 1].map(s => { const w = new THREE.Group(); w.position.set(s * 0.36, 0.36, 0.0); gh.body.add(w); const m = mesh(G.wing, M.wing, 0, 0, 0, s * 1.3, 1.3, 1.3, w); return w; });
    [-1, 1].forEach(s => { const e = mesh(G.cone, M.wing, s * 0.2, 0.74, 0, 0.08, 0.22, 0.06, gh.body); e.rotation.z = -s * 0.3; }); },
  skeleton(gh, G, M) { gh.eyes.forEach(e => e.scale.set(1.5, 1.35, 1)); mesh(G.box, M.black, 0, 0.02, 0.4, 0.03, 0.05, 0.02, gh.body);
    for (let i = -2; i <= 2; i++) mesh(G.box, M.bone, i * 0.04, 0.14, 0.395, 0.028, 0.04, 0.02, gh.body);
    for (let k = 0; k < 3; k++) { const y = -0.04 - k * 0.11, rr = 0.42 + 0.12 * ((0.18 - y) / 0.62) ** 2 + 0.005; const r = mesh(G.rib, M.rib, 0, y, 0, rr, rr, 1, gh.body); r.rotation.x = Math.PI / 2; } gh.smile.visible = false; gh.noSmile = true; },
  cat(gh, G, M) { [-1, 1].forEach(s => { const e = mesh(G.cone, M.fur, s * 0.24, 0.68, 0, 0.13, 0.26, 0.1, gh.body); e.rotation.z = -s * 0.35; mesh(G.cone, M.blush, s * 0.24, 0.66, 0.04, 0.07, 0.15, 0.02, gh.body).rotation.z = -s * 0.35; });
    for (const s of [-1, 1]) for (const k of [-1, 1]) { const w = mesh(G.cyl, M.black, s * 0.3, 0.17 + k * 0.025, 0.36, 0.006, 0.22, 0.006, gh.body); w.rotation.z = Math.PI / 2 + k * s * 0.15; }
    const t = new THREE.Group(); t.position.set(0.32, -0.3, -0.2); gh.body.add(t); const tm = mesh(G.torus, M.fur, 0.15, 0.15, 0, 0.18, 0.18, 0.18, t); tm.rotation.y = Math.PI / 2; gh.extra.tail = t; gh.bodyMat.color.set(0x8a82a8); },
  vampire(gh, G, M) { mesh(G.sph, M.hair, 0, 0.5, -0.02, 0.4, 0.2, 0.38, gh.body); const pk = mesh(G.cone, M.hair, 0, 0.47, 0.28, 0.1, 0.14, 0.05, gh.body); pk.rotation.x = Math.PI + 0.3;
    for (const s of [-1, 1]) { const c = mesh(G.plane, M.cape, s * 0.3, 0.28, -0.08, 0.38, 0.5, 1, gh.body); c.rotation.y = s * 0.7; c.rotation.z = -s * 0.25; const ci = mesh(G.plane, M.capeIn, s * 0.29, 0.27, -0.06, 0.32, 0.42, 1, gh.body); ci.rotation.y = s * 0.7; ci.rotation.z = -s * 0.25; }
    for (const s of [-1, 1]) mesh(G.cone, M.white, s * 0.035, -0.135, 0.412, 0.014, 0.04, 0.014, gh.body).rotation.x = Math.PI; },
  mummy(gh, G, M) { gh.bodyMat.map = tex('bandage'); for (let k = 0; k < 5; k++) { const y = 0.5 - k * 0.19, rr = (y > 0.18 ? Math.sqrt(Math.max(0.01, 0.42 * 0.42 - (y - 0.18) ** 2)) : 0.42 + 0.12 * ((0.18 - y) / 0.62) ** 2) + 0.01; const r = mesh(G.band, M.bandage, 0, y, 0, rr - 0.015, rr - 0.015, 1, gh.body); r.rotation.x = Math.PI / 2 + (k % 2 ? 0.18 : -0.15); }
    gh.eyes[1].scale.setScalar(0.65); },
  candle(gh, G, M) { mesh(G.cyl, M.wax, 0, 0.62, 0, 0.16, 0.2, 0.16, gh.body); for (const [x, l] of [[-0.1, 0.12], [0.08, 0.18], [0.0, 0.09]]) mesh(G.sph, M.wax, x, 0.55 - l * 0.4, 0.13, 0.035, l, 0.035, gh.body);
    const f = mesh(G.sph, M.flame, 0, 0.84, 0, 0.06, 0.12, 0.06, gh.body); gh.extra.flame = f; const fg = new THREE.Sprite(glowMat(0xffa030)); fg.scale.set(0.9, 0.9, 1); fg.position.set(0, 0.86, 0); gh.body.add(fg); gh.extra.fg = fg; },
  monster(gh, G, M) { mesh(G.box, M.hair, 0, 0.62, 0, 0.62, 0.16, 0.5, gh.body); for (let i = -2; i <= 2; i++) mesh(G.box, M.hair, i * 0.12, 0.53, 0.25, 0.1, 0.1, 0.04, gh.body);
    for (const s of [-1, 1]) mesh(G.cyl, M.bolt, s * 0.43, 0.28, 0, 0.04, 0.16, 0.04, gh.body).rotation.z = Math.PI / 2; mesh(G.box, M.black, -0.2, 0.47, 0.36, 0.12, 0.012, 0.02, gh.body); },
  owl(gh, G, M) { gh.eyes.forEach(e => { e.scale.setScalar(1.25); mesh(G.torus, M.beak, 0, 0, -0.01, 0.11, 0.11, 0.05, e); });
    mesh(G.cone, M.beak, 0, -0.05, 0.42, 0.04, 0.09, 0.03, gh.body).rotation.x = Math.PI; for (const s of [-1, 1]) { const t = mesh(G.cone, M.brown, s * 0.26, 0.66, 0, 0.08, 0.24, 0.06, gh.body); t.rotation.z = -s * 0.5; } gh.smile.visible = false; gh.noSmile = true; },
  sheet(gh) { gh.eyes.forEach(e => e.scale.set(1.15, 1.3, 1)); },
  zombie(gh, G, M) { mesh(G.sph, M.brain, 0.12, 0.6, 0, 0.17, 0.11, 0.15, gh.body); mesh(G.box, M.black, -0.18, 0.44, 0.33, 0.14, 0.012, 0.02, gh.body); for (let i = 0; i < 3; i++) mesh(G.box, M.black, -0.23 + i * 0.05, 0.44, 0.335, 0.008, 0.05, 0.02, gh.body);
    gh.eyes[0].scale.set(1.2, 0.6, 1); gh.zombieArms = true; },
  devil(gh, G, M) { for (const s of [-1, 1]) { const h = mesh(G.cone, M.horn, s * 0.2, 0.7, 0, 0.07, 0.22, 0.07, gh.body); h.rotation.z = -s * 0.45; }
    const t = new THREE.Group(); t.position.set(0.25, -0.35, -0.3); gh.body.add(t); const tt = mesh(G.cyl, M.horn, 0.12, 0.06, 0, 0.02, 0.32, 0.02, t); tt.rotation.z = -1.0; const tip = mesh(G.cone, M.horn, 0.27, 0.16, 0, 0.06, 0.1, 0.02, t); tip.rotation.z = -1.0; gh.extra.tail = t; },
  spider(gh, G, M) { gh.extra.legs = []; for (const s of [-1, 1]) for (let i = 0; i < 4; i++) { const l = new THREE.Group(); l.position.set(s * 0.36, -0.05 - i * 0.07, 0.1 - i * 0.1); gh.body.add(l);
      const a = mesh(G.cyl, M.leg, s * 0.15, 0.06, 0, 0.022, 0.32, 0.022, l); a.rotation.z = -s * 1.0; const b = mesh(G.cyl, M.leg, s * 0.32, -0.04, 0, 0.018, 0.26, 0.018, l); b.rotation.z = s * 0.5; gh.extra.legs.push(l); }
    for (const [x, y] of [[-0.06, 0.24], [0.06, 0.24], [-0.1, 0.19], [0.1, 0.19]]) mesh(G.sph, M.black, x, y + 0.27, 0.36, 0.022, 0.022, 0.015, gh.body); },
  gold(gh, G, M) { ACC.pumpkin(gh, G, M); gh.body.children.forEach(o => { if (o.material === M.pump) o.material = M.gold; });
    const cr = new THREE.Group(); cr.position.set(0, 0.84, 0); gh.body.add(cr); mesh(G.cyl, M.gold, 0, 0, 0, 0.2, 0.08, 0.2, cr); for (let i = 0; i < 5; i++) { const a = i / 5 * Math.PI * 2; mesh(G.cone, M.gold, Math.cos(a) * 0.17, 0.1, Math.sin(a) * 0.17, 0.05, 0.14, 0.05, cr); } gh.extra.crown = cr; }
};
export function setExpr(gh, e) { gh.expr = e; if (!gh.noSmile) gh.smile.visible = e === 'happy'; gh.oMouth.visible = e === 'o'; gh.frown.visible = e === 'sad'; }
// pose: { armL, armR (rad), tilt, squash, bob(0..1) }
export function updateGhost(gh, dt, pose = {}) {
  gh.t += dt; const t = gh.t, bob = pose.bob ?? 1;
  gh.body.position.y = Math.sin(t * 2.2) * 0.07 * bob;
  gh.body.rotation.z = Math.sin(t * 1.3) * 0.06 * bob + (pose.tilt || 0);
  gh.body.rotation.y = Math.sin(t * 0.9) * 0.18 * bob + (pose.spin || 0);
  const sq = pose.squash || 0; gh.body.scale.set(1 + sq * 0.15, 1 - sq * 0.15, 1 + sq * 0.15);
  // blink
  gh.blinkT -= dt; let bl = 1; if (gh.blinkT < 0) { bl = Math.max(0.08, Math.abs(gh.blinkT + 0.07) / 0.07); if (gh.blinkT < -0.14) gh.blinkT = rand(1.8, 4.5); }
  const eyeK = pose.eyes ?? 1; gh.eyes.forEach(e => { e.scale.y = Math.abs(e.scale.x) * 1.0 * bl * eyeK + 0.0001; });
  const wave = Math.sin(t * 3.0) * 0.25 * bob;
  gh.arms[0].rotation.z = (pose.armL ?? 0) + wave; gh.arms[1].rotation.z = -(pose.armR ?? 0) - wave;
  if (gh.zombieArms) { gh.arms.forEach(a => { a.rotation.x = -1.2; }); }
  const X = gh.extra;
  if (X.wings) X.wings.forEach((w, i) => { w.rotation.y = (i ? -1 : 1) * (0.3 + Math.sin(t * 14) * 0.5); });
  if (X.tail) X.tail.rotation.z = Math.sin(t * 2.4) * 0.35;
  if (X.flame) { const f = 1 + Math.sin(t * 23) * 0.12 + Math.sin(t * 37) * 0.08; X.flame.scale.set(0.06 * f, 0.13 * f, 0.06 * f); X.fg.material.opacity = 0.5 + 0.2 * f; }
  if (X.legs) X.legs.forEach((l, i) => { l.rotation.x = Math.sin(t * 8 + i * 1.3) * 0.35; });
  if (X.hat) X.hat.rotation.z = 0.12 + Math.sin(t * 1.7) * 0.08;
  if (X.crown) X.crown.rotation.y = t * 1.5;
  gh.glow.material.opacity = (0.3 + 0.08 * Math.sin(t * 3)) * (pose.glow ?? 1);
}

// ---------------- gravestone card ----------------
export function createStone(variant = 0) {
  const G = geos(), M = mats();
  const root = new THREE.Group();
  const s = { root, variant, open: 0, target: 0, hover: 0, lift: 0, done: false };
  const mound = mesh(G.sph, M.dirt, 0, -0.02, 0.62, 0.62, 0.12, 0.62, root); mound.receiveShadow = true;
  s.hole = mesh(G.sph, M.hole, 0, 0.0, 0.62, 0.42, 0.04, 0.42, root);
  s.holeGlow = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTexture('rgba(200,170,255,0.95)', 'rgba(140,80,255,0.25)'), transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, opacity: 0 }));
  s.holeGlow.position.set(0, 0.25, 0.62); s.holeGlow.scale.set(1.8, 1.8, 1); root.add(s.holeGlow);
  s.pivot = new THREE.Group(); s.pivot.position.set(0, 0, -0.12); root.add(s.pivot);
  const geo = [G.stoneSlab, G.stoneCross, G.stonePoint][variant % 3];
  s.stoneMat = M.stone.clone(); s.stoneMat.emissive = new THREE.Color(0x140c20);
  s.slab = mesh(geo, s.stoneMat, 0, 0, 0.12, 1, 1, 1, s.pivot); s.slab.castShadow = true; s.slab.receiveShadow = true;
  if (variant % 3 !== 1) { const pl = mesh(G.plane, M.plaque, 0, 0.8, 0.27, 0.9, 0.9, 1, s.pivot); pl.renderOrder = 1; }
  else { const pl = mesh(G.plane, M.plaque, 0, 0.95, 0.27, 0.5, 0.5, 1, s.pivot); pl.renderOrder = 1; }
  s.slab.rotation.z = rand(-0.05, 0.05);
  // candle (solved)
  s.candle = new THREE.Group(); s.candle.position.set(0.32, 0.05, 0.95); root.add(s.candle); s.candle.visible = false;
  mesh(G.cyl, M.wax, 0, 0.1, 0, 0.05, 0.2, 0.05, s.candle); s.flame = mesh(G.sph, M.flame, 0, 0.25, 0, 0.025, 0.05, 0.025, s.candle);
  s.cglow = new THREE.Sprite(glowMat(0xffb040)); s.cglow.scale.set(0.8, 0.8, 1); s.cglow.position.set(0, 0.26, 0); s.candle.add(s.cglow);
  s.hit = new THREE.Mesh(new THREE.BoxGeometry(1.4, 1.6, 1.6), new THREE.MeshBasicMaterial({ visible: false })); s.hit.position.set(0, 0.75, 0.3); root.add(s.hit); s.hit.userData.stone = s;
  return s;
}
export function updateStone(s, dt, t) {
  // open: 0 upright → 1 tilted back. Spring with a little bounce on close (the thud)
  const k = s.target > s.open ? 7 : 9; s.open += (s.target - s.open) * (1 - Math.exp(-k * dt));
  if (Math.abs(s.target - s.open) < 0.002) s.open = s.target;
  s.pivot.rotation.x = -1.12 * s.open + (s.wob || 0) * Math.sin(t * 40) * 0.04;
  if (s.wob) s.wob = Math.max(0, s.wob - dt * 3);
  s.hover += ((s.hoverOn && !s.done ? 1 : 0) - s.hover) * (1 - Math.exp(-12 * dt));
  s.pivot.position.y = s.hover * 0.06 + (s.lift || 0);
  s.stoneMat.emissive.setRGB(0.08 + s.hover * 0.22 + (s.done ? 0.12 : 0), 0.05 + s.hover * 0.14 + (s.done ? 0.08 : 0), 0.12 + s.hover * 0.3);
  s.hole.scale.set(0.42 * s.open + 0.001, 0.04, 0.42 * s.open + 0.001);
  s.holeGlow.material.opacity = Math.max(s.open * 0.85, s.done ? 0.25 : 0);
  if (s.candle.visible) { const f = 1 + Math.sin(t * 21 + s.root.position.x) * 0.15; s.flame.scale.set(0.025 * f, 0.05 * f, 0.025 * f); s.cglow.material.opacity = 0.55 * f; }
}
export function tintHole(s, hex) { s.holeGlow.material.color.set(hex); }
export function glowOf(type) { return (LOOK[type] || LOOK.sheet)[1]; }
