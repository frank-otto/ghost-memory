// Ghost Memory world: purple starry sky, huge moon, fog cards, god rays, fireflies, falling leaves
// (atmosphere copied from Trick or Treat Run / Witch Broom Race) + a static moonlit graveyard around the memory board:
// iron fence, dead trees, decorative tombstones, a mausoleum, lanterns and carved pumpkins. Static geometry is merged per material.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { rand, canvasTex, glowTexture, clamp, srand, setSeed } from './util.js';
import { tex } from './tex.js';

export const QUALITY = {
  low:   { pr: 0.85, bloom: 0,    stars: 500,  ff: 30,  leaves: 20,  fog: 4,  rays: 2, decor: 0.5,  particles: 0.45, msaa: 0, lights: 2, shadow: 0 },
  mid:   { pr: 1.0,  bloom: 0.85, stars: 900,  ff: 60,  leaves: 40,  fog: 6,  rays: 3, decor: 0.8,  particles: 0.7,  msaa: 0, lights: 4, shadow: 0 },
  high:  { pr: 1.5,  bloom: 1.0,  stars: 1400, ff: 100, leaves: 60,  fog: 8,  rays: 4, decor: 1.0,  particles: 1.0,  msaa: 4, lights: 6, shadow: 1024 },
  ultra: { pr: 2.0,  bloom: 1.1,  stars: 2200, ff: 160, leaves: 90,  fog: 11, rays: 5, decor: 1.25, particles: 1.35, msaa: 4, lights: 6, shadow: 2048 }
};
export const MOON_DIR = new THREE.Vector3(0.2, 0.17, -1).normalize();
function makeSky() {
  const geo = new THREE.SphereGeometry(400, 32, 16);
  const mat = new THREE.ShaderMaterial({
    side: THREE.BackSide, depthWrite: false, fog: false,
    uniforms: { flash: { value: 0 }, time: { value: 0 }, hor: { value: new THREE.Vector3(0.3, 0.08, 0.3) }, mid: { value: new THREE.Vector3(0.08, 0.02, 0.18) }, md: { value: MOON_DIR.clone() } },
    vertexShader: `varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
    fragmentShader: `varying vec3 vP; uniform float flash; uniform float time; uniform vec3 hor; uniform vec3 mid; uniform vec3 md;
      void main(){
        float h = vP.y;
        vec3 top = vec3(0.016,0.006,0.05);
        vec3 c = mix(hor, mid, smoothstep(-0.03, 0.16, h));
        c = mix(c, top, smoothstep(0.16, 0.6, h));
        float m = max(dot(vP, md), 0.0);
        c += vec3(0.6,0.36,0.24) * pow(m, 40.0) * 0.55 + vec3(0.30,0.12,0.36) * pow(m, 5.0) * 0.35;
        // faint aurora-like bands
        float b = sin(vP.x * 6.0 + time * 0.05) * sin(vP.z * 4.0 - time * 0.04);
        c += vec3(0.10,0.03,0.16) * smoothstep(0.4, 1.0, b) * smoothstep(0.05, 0.35, h) * (1.0 - smoothstep(0.35, 0.7, h));
        c += vec3(0.75,0.72,1.0) * flash * (0.35 + 0.65 * smoothstep(0.0, 0.5, h));
        gl_FragColor = vec4(c, 1.0);
        #include <colorspace_fragment>
      }`
  });
  const m = new THREE.Mesh(geo, mat); m.renderOrder = -10; return m;
}

function makeStars(n) {
  const pos = new Float32Array(n * 3), sz = new Float32Array(n), ph = new Float32Array(n);
  for (let i = 0; i < n; i++) {
    const th = rand(0, Math.PI * 2), y = Math.pow(Math.random(), 0.7) * 0.9 + 0.08;
    const r = Math.sqrt(1 - y * y);
    pos[i * 3] = Math.cos(th) * r * 350; pos[i * 3 + 1] = y * 350; pos[i * 3 + 2] = Math.sin(th) * r * 350;
    sz[i] = Math.random() < 0.06 ? rand(2.6, 4.4) : rand(0.8, 2.0); ph[i] = rand(0, 6.28);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3)); g.setAttribute('size', new THREE.BufferAttribute(sz, 1)); g.setAttribute('phase', new THREE.BufferAttribute(ph, 1));
  const m = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, fog: false,
    uniforms: { time: { value: 0 }, pr: { value: 1 }, dim: { value: 1 } },
    vertexShader: `attribute float size; attribute float phase; uniform float time; uniform float pr; varying float vA;
      void main(){ vA = 0.55 + 0.45 * sin(time * (1.3 + phase * 0.4) + phase * 7.0); gl_PointSize = size * pr; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
    fragmentShader: `varying float vA; uniform float dim; void main(){ vec2 d = gl_PointCoord - 0.5; float a = smoothstep(0.5, 0.0, length(d)) * dim; gl_FragColor = vec4(vec3(1.0,0.93,0.98) * a * vA, a * vA); }`
  });
  const p = new THREE.Points(g, m); p.frustumCulled = false; p.renderOrder = -9; return p;
}

function makeMoon() {
  const g = new THREE.Group();
  const tex = canvasTex(512, 512, (c) => {
    const cx = 256, cy = 256, r = 150;
    const mg = c.createRadialGradient(cx - 40, cy - 40, 10, cx, cy, r);
    mg.addColorStop(0, '#fffaf0'); mg.addColorStop(0.6, '#ffe9c0'); mg.addColorStop(1, '#f0c890');
    c.fillStyle = mg; c.beginPath(); c.arc(cx, cy, r, 0, 7); c.fill();
    c.save(); c.beginPath(); c.arc(cx, cy, r, 0, 7); c.clip();
    for (const [x, y, rr, a] of [[200, 200, 34, 0.16], [300, 270, 26, 0.14], [230, 320, 20, 0.12], [320, 180, 14, 0.12], [170, 280, 12, 0.1], [280, 350, 30, 0.1], [350, 300, 10, 0.12]]) {
      const cg = c.createRadialGradient(x + 4, y + 4, 1, x, y, rr); cg.addColorStop(0, `rgba(150,110,80,${a})`); cg.addColorStop(1, 'rgba(150,110,80,0)');
      c.fillStyle = cg; c.beginPath(); c.arc(x, y, rr, 0, 7); c.fill();
    }
    const sh = c.createRadialGradient(cx + 70, cy + 70, r * 0.6, cx, cy, r * 1.15); sh.addColorStop(0, 'rgba(0,0,0,0)'); sh.addColorStop(1, 'rgba(120,60,40,0.35)');
    c.fillStyle = sh; c.fillRect(0, 0, 512, 512); c.restore();
  });
  const moon = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, fog: false, depthWrite: false, color: new THREE.Color(1.55, 1.42, 1.25) }));
  moon.scale.set(64, 64, 1); g.add(moon);
  const halo = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTexture('rgba(255,220,170,0.9)', 'rgba(255,140,90,0.22)'), fog: false, depthWrite: false, blending: THREE.AdditiveBlending, transparent: true, opacity: 0.5 }));
  halo.scale.set(190, 190, 1); g.add(halo);
  const cloudTex = canvasTex(256, 64, (c) => {
    c.filter = 'blur(6px)';
    for (let i = 0; i < 40; i++) { const x = 40 + i * 4.4 + rand(-6, 6), y = 32 + rand(-5, 5), r = rand(14, 24); const cg = c.createRadialGradient(x, y, 0, x, y, r); cg.addColorStop(0, 'rgba(30,12,48,0.24)'); cg.addColorStop(1, 'rgba(30,12,48,0)'); c.fillStyle = cg; c.fillRect(0, 0, 256, 64); }
  });
  const clouds = [];
  for (let i = 0; i < 4; i++) {
    const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: cloudTex, fog: false, depthWrite: false, transparent: true, opacity: 0.9 }));
    s.scale.set(rand(120, 180), rand(18, 28), 1); s.position.set(rand(-60, 60), rand(-24, 16), 3 + i); s.userData.v = rand(1.5, 3) * (i % 2 ? 1 : -1);
    g.add(s); clouds.push(s);
  }
  g.userData.clouds = clouds; g.userData.halo = halo; g.userData.disc = moon;
  return g;
}

export function makeFogTex() {
  return canvasTex(512, 256, (c) => {
    for (let i = 0; i < 80; i++) {
      const x = rand(0, 512), y = rand(80, 225), r = rand(30, 95);
      const g = c.createRadialGradient(x, y, 0, x, y, r);
      g.addColorStop(0, 'rgba(215,190,240,0.20)'); g.addColorStop(1, 'rgba(215,190,240,0)');
      c.fillStyle = g; c.fillRect(0, 0, 512, 256);
    }
    c.globalCompositeOperation = 'destination-in';
    const v = c.createLinearGradient(0, 0, 0, 256); v.addColorStop(0, 'rgba(0,0,0,0)'); v.addColorStop(0.45, 'rgba(0,0,0,0.6)'); v.addColorStop(0.85, 'rgba(0,0,0,1)'); v.addColorStop(1, 'rgba(0,0,0,0)');
    c.fillStyle = v; c.fillRect(0, 0, 512, 256);
    const h = c.createLinearGradient(0, 0, 512, 0); h.addColorStop(0, 'rgba(0,0,0,0)'); h.addColorStop(0.15, 'rgba(0,0,0,1)'); h.addColorStop(0.85, 'rgba(0,0,0,1)'); h.addColorStop(1, 'rgba(0,0,0,0)');
    c.fillStyle = h; c.fillRect(0, 0, 512, 256);
  });
}
function rayTex() {
  return canvasTex(128, 512, (c) => {
    const id = c.createImageData(128, 512);
    for (let y = 0; y < 512; y++) for (let x = 0; x < 128; x++) {
      const u = (x - 64) / 64, v = y / 512;
      const a = Math.exp(-u * u * 5) * Math.pow(1 - v, 0.6) * Math.min(1, v * 8) * (0.75 + 0.25 * Math.sin(x * 0.4 + y * 0.01));
      const k = (y * 128 + x) * 4; id.data[k] = 255; id.data[k + 1] = 255; id.data[k + 2] = 255; id.data[k + 3] = Math.round(255 * a);
    }
    c.putImageData(id, 0, 0);
  });
}
function groundTex() {
  const t = canvasTex(512, 512, (c) => {
    c.fillStyle = '#9a90a8'; c.fillRect(0, 0, 512, 512);
    for (let i = 0; i < 2600; i++) {
      const x = rand(0, 512), y = rand(0, 512), r = rand(2, 22), l = rand(0.25, 0.9);
      c.fillStyle = `rgba(${Math.round(90 * l)},${Math.round(84 * l)},${Math.round(100 * l)},0.35)`;
      c.beginPath(); c.ellipse(x, y, r, r * rand(0.4, 1), rand(0, 3), 0, 7); c.fill();
    }
    c.strokeStyle = 'rgba(40,30,40,0.35)'; c.lineWidth = 1.2;
    for (let i = 0; i < 900; i++) { const x = rand(0, 512), y = rand(0, 512); c.beginPath(); c.moveTo(x, y); c.lineTo(x + rand(-3, 3), y - rand(4, 10)); c.stroke(); }
  });
  t.wrapS = t.wrapT = THREE.RepeatWrapping; t.anisotropy = 8;
  return t;
}

// ---------------- shared materials / geometries ----------------
let M = null;
const G = {};
function mats() {
  if (M) return M;
  const std = (o) => new THREE.MeshStandardMaterial({ roughness: 0.85, metalness: 0, ...o });
  M = {
    road: std({ map: tex('asphalt'), color: 0xb8b0c8, roughness: 0.78 }), roadGrave: std({ map: tex('asphalt'), color: 0x8a90a0, roughness: 0.8 }),
    cobble: std({ map: tex('cobble'), color: 0xd0c0d0, roughness: 0.7 }), dirt: std({ map: tex('dirt'), color: 0xc0a088 }),
    walk: std({ map: tex('sidewalk'), color: 0xb0a8c0 }), curb: std({ color: 0x6a6478 }),
    siding: [0x9a8ab8, 0x7a9a88, 0xb89a60, 0x6a88b0, 0xb07a7a, 0x8a7aa0].map(c => std({ map: tex('siding'), color: c })),
    trim: std({ color: 0xe8e0e8, roughness: 0.6 }), shutter: std({ color: 0x2a1c30 }), roof: std({ map: tex('shingle'), color: 0xb0a0c0 }),
    found: std({ color: 0x3a3440 }), wood: std({ map: tex('wood'), color: 0xa08070 }), porch: std({ map: tex('wood'), color: 0x8a6a5a }),
    door: std({ map: tex('door'), roughness: 0.6 }),
    win: new THREE.MeshBasicMaterial({ map: tex('window'), color: new THREE.Color(1.5, 1.25, 1.0) }),
    winB: new THREE.MeshBasicMaterial({ map: tex('windowB'), color: new THREE.Color(1.4, 1.15, 1.05) }),
    winDark: std({ color: 0x141020, roughness: 0.2, metalness: 0.3 }),
    picket: std({ color: 0xd8d0dc }), iron: std({ color: 0x15121a, roughness: 0.5, metalness: 0.5 }),
    pumpkin: std({ map: tex('pumpkinSkin'), color: 0xffffff, roughness: 0.6, emissive: 0x5a1800, emissiveIntensity: 0.35 }),
    stem: std({ color: 0x3a5a20 }),
    face: new THREE.MeshBasicMaterial({ alphaMap: tex('pumpkinFace'), color: new THREE.Color(3.2, 1.7, 0.45), transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }),
    bark: std({ color: 0x2a1e1c }), deadBark: std({ color: 0x1e1a22 }),
    leafs: [0xc8501a, 0xe08a20, 0x9a2a14, 0xd0a030].map(c => std({ color: c, flatShading: true, emissive: c, emissiveIntensity: 0.08 })),
    pole: std({ color: 0x18141e, metalness: 0.6, roughness: 0.4 }),
    lamp: new THREE.MeshBasicMaterial({ color: new THREE.Color(3.0, 2.0, 0.9) }),
    stone: std({ map: tex('stone'), color: 0xa8a0b0 }), stoneD: std({ map: tex('stone'), color: 0x707080 }),
    hay: std({ map: tex('hay'), color: 0xd0b070 }), corn: std({ color: 0x8a7a3a, flatShading: true }), barn: std({ map: tex('wood'), color: 0x8a2a20 }),
    brick: std({ map: tex('brick'), color: 0xd0b0a8 }), awn: [0x8a2a8a, 0xd06a10, 0x2a6a5a].map(c => std({ color: c, side: THREE.DoubleSide })),
    bulb: [new THREE.Color(3, 1.6, 0.4), new THREE.Color(2.6, 0.8, 2.6), new THREE.Color(1.0, 2.6, 1.4), new THREE.Color(3, 2.6, 1.6)].map(c => new THREE.MeshBasicMaterial({ color: c })),
    wire: new THREE.MeshBasicMaterial({ color: 0x0c0a10 }),
    web: new THREE.MeshBasicMaterial({ map: tex('web'), transparent: true, depthWrite: false, side: THREE.DoubleSide, opacity: 0.7, color: 0xd8d8f0 }),
    sheet: std({ color: 0xf2eefa, roughness: 0.9, emissive: 0x403a50, emissiveIntensity: 0.4 }), black: new THREE.MeshBasicMaterial({ color: 0x050308 }),
    sign: new THREE.MeshBasicMaterial({ map: tex('sign'), color: new THREE.Color(1.3, 1.2, 1.1) }),
    stripe: std({ color: 0xf0e8f0 }), cloth: std({ color: 0x5a2a1a }),
    blob: new THREE.MeshBasicMaterial({ map: glowTexture('rgba(0,0,0,0.6)', 'rgba(0,0,0,0.25)'), transparent: true, depthWrite: false, opacity: 0.8 })
  };
  M.glowWarm = new THREE.SpriteMaterial({ map: glowTexture('rgba(255,210,140,1)', 'rgba(255,120,30,0.3)'), transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, opacity: 0.85 });
  M.glowPump = new THREE.SpriteMaterial({ map: glowTexture('rgba(255,170,60,1)', 'rgba(255,90,10,0.3)'), transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, opacity: 0.7 });
  M.glowWin = new THREE.SpriteMaterial({ map: glowTexture('rgba(255,190,110,0.7)', 'rgba(255,110,40,0.18)'), transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, opacity: 0.5 });
  M.glowGreen = new THREE.SpriteMaterial({ map: glowTexture('rgba(170,255,200,1)', 'rgba(60,200,140,0.3)'), transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, opacity: 0.6 });
  G.box = new THREE.BoxGeometry(1, 1, 1); G.cyl = new THREE.CylinderGeometry(1, 1, 1, 12); G.cyl6 = new THREE.CylinderGeometry(1, 1, 1, 6);
  G.prism = new THREE.CylinderGeometry(1, 1, 1, 3, 1).rotateX(-Math.PI / 2);
  G.sph = new THREE.SphereGeometry(1, 16, 12); G.ico = new THREE.IcosahedronGeometry(1, 1); G.cone = new THREE.ConeGeometry(1, 1, 10); G.plane = new THREE.PlaneGeometry(1, 1);
  G.pump = (() => { const g = new THREE.SphereGeometry(1, 24, 14); const p = g.attributes.position; for (let i = 0; i < p.count; i++) { const x = p.getX(i), y = p.getY(i), z = p.getZ(i); const a = Math.atan2(z, x); const k = 1 - 0.07 * Math.pow(Math.abs(Math.cos(a * 4)), 0.5); p.setXYZ(i, x * k, y * (0.82 + 0.05 * k), z * k); } g.computeVertexNormals(); return g; })();
  G.halfCyl = new THREE.CylinderGeometry(1, 1, 1, 14, 1, false, 0, Math.PI).rotateZ(Math.PI / 2).rotateY(Math.PI / 2);
  return M;
}
export function sharedMats() { return mats(); }
export function sharedGeo() { mats(); return G; }

// chunk builder: collects transformed geometry per material, then merges
class Builder {
  constructor(z0) { this.parts = new Map(); this.extra = []; this.anchors = []; this.houses = []; this.z0 = z0; this.m4 = new THREE.Matrix4(); this.q = new THREE.Quaternion(); this.e = new THREE.Euler(); this.p = new THREE.Vector3(); this.s = new THREE.Vector3(); }
  add(geo, mat, x, y, z, sx = 1, sy = 1, sz = 1, rx = 0, ry = 0, rz = 0) {
    this.e.set(rx, ry, rz); this.q.setFromEuler(this.e); this.p.set(x, y, z); this.s.set(sx, sy, sz); this.m4.compose(this.p, this.q, this.s);
    const g = (geo.index ? geo.toNonIndexed() : geo.clone()).applyMatrix4(this.m4);
    for (const k of Object.keys(g.attributes)) if (k !== 'position' && k !== 'normal' && k !== 'uv') g.deleteAttribute(k);
    let l = this.parts.get(mat); if (!l) this.parts.set(mat, l = []); l.push(g);
  }
  glow(mat, x, y, z, s) { const sp = new THREE.Sprite(mat); sp.position.set(x, y, z); sp.scale.set(s, s, 1); this.extra.push(sp); return sp; }
  anchor(x, y, z, color = 0xffa050, power = 1) { this.anchors.push({ pos: new THREE.Vector3(x, y, z + this.z0), color: new THREE.Color(color), power }); }
  build() {
    const g = new THREE.Group(); g.position.z = this.z0;
    for (const [mat, list] of this.parts) { const geo = mergeGeometries(list, false); list.forEach(x => x.dispose()); const m = new THREE.Mesh(geo, mat); m.receiveShadow = true; m.matrixAutoUpdate = false; m.updateMatrix(); g.add(m); }
    for (const e of this.extra) g.add(e);
    return g;
  }
}

// --------- prop helpers (local chunk coords; s = side ±1) ---------
function pumpkin(B, x, y, z, r = 0.35, lit = true, ry = 0) {
  B.add(G.pump, M.pumpkin, x, y + r * 0.8, z, r, r, r, 0, ry);
  B.add(G.cyl6, M.stem, x, y + r * 1.65, z, r * 0.12, r * 0.4, r * 0.12, 0.2, 0, 0.15);
  if (lit) { const fx = x - Math.sin(ry + Math.PI / 2) * 0, fz = z; B.add(G.plane, M.face, x + Math.sin(ry) * r * 1.0, y + r * 0.85, z + Math.cos(ry) * r * 1.0, r * 1.5, r * 1.3, 1, 0, ry); if (r > 0.3) B.glow(M.glowPump, x + Math.sin(ry) * r * 1.2, y + r * 0.9, z + Math.cos(ry) * r * 1.2, r * 4.5); }
}
function tree(B, x, z, h = 6, dead = false) {
  B.add(G.cyl, dead ? M.deadBark : M.bark, x, h * 0.35, z, 0.22, h * 0.7, 0.22);
  if (dead) { for (let i = 0; i < 5; i++) { const a = srand(0, 6.28), l = srand(1.2, 2.6), y = h * srand(0.4, 0.75); B.add(G.cyl6, M.deadBark, x + Math.cos(a) * l * 0.4, y + l * 0.3, z + Math.sin(a) * l * 0.4, 0.07, l, 0.07, Math.sin(a) * 0.9, 0, -Math.cos(a) * 0.9); } return; }
  const n = 4 + (srand() * 3 | 0);
  for (let i = 0; i < n; i++) { const r = srand(1.2, 2.0); B.add(G.ico, M.leafs[(srand() * 4) | 0], x + srand(-1.3, 1.3), h * 0.72 + srand(-0.6, 1.2), z + srand(-1.3, 1.3), r, r * 0.85, r); }
}
function lampPost(B, x, z, s) {
  B.add(G.cyl6, M.pole, x, 2.1, z, 0.08, 4.2, 0.08); B.add(G.box, M.pole, x - s * 0.45, 4.15, z, 0.9, 0.08, 0.08);
  B.add(G.cyl6, M.pole, x - s * 0.85, 3.95, z, 0.2, 0.08, 0.2); B.add(G.box, M.lamp, x - s * 0.85, 3.72, z, 0.26, 0.38, 0.26); B.add(G.cone, M.pole, x - s * 0.85, 4.05, z, 0.26, 0.25, 0.26);
  B.glow(M.glowWarm, x - s * 0.85, 3.72, z, 3.2); B.anchor(x - s * 0.85, 3.5, z, 0xffb060, 1.2);
}
function web(B, x, y, z, s, sz = 1.2, ry = 0) { B.add(G.plane, M.web, x, y, z, sz, sz, 1, 0, ry, s > 0 ? 0 : Math.PI / 2); }
function sheetGhost(B, x, z, h = 1.6) { B.add(G.cone, M.sheet, x, h * 0.5, z, h * 0.38, h, h * 0.38); B.add(G.sph, M.sheet, x, h * 0.98, z, h * 0.3, h * 0.3, h * 0.3); }
function fencePicket(B, s, z0, z1, x) {
  for (let z = z0; z < z1; z += 0.32) B.add(G.box, M.picket, x, 0.5, z, 0.06, 1.0, 0.16);
  B.add(G.box, M.picket, x, 0.32, (z0 + z1) / 2, 0.05, 0.08, z1 - z0); B.add(G.box, M.picket, x, 0.75, (z0 + z1) / 2, 0.05, 0.08, z1 - z0);
}

// ---------------- graveyard set dressing ----------------
function tomb(B, x, z, ry = 0, sc = 1) {
  const t = srand(), m = srand() < 0.5 ? M.stone : M.stoneD, tilt = srand(-0.14, 0.14);
  if (t < 0.45) { B.add(G.box, m, x, 0.55 * sc, z, 0.75 * sc, 1.1 * sc, 0.22 * sc, tilt, ry); B.add(G.halfCyl, m, x, 1.1 * sc, z, 0.375 * sc, 0.22 * sc, 0.375 * sc, tilt, ry + Math.PI / 2); }
  else if (t < 0.75) { B.add(G.box, m, x, 0.8 * sc, z, 0.18 * sc, 1.6 * sc, 0.18 * sc, tilt, ry); B.add(G.box, m, x, 1.15 * sc, z, 0.8 * sc, 0.18 * sc, 0.18 * sc, tilt, ry); }
  else { B.add(G.box, m, x, 0.35 * sc, z, 0.9 * sc, 0.7 * sc, 0.9 * sc, 0, ry); B.add(G.cone, m, x, 1.4 * sc, z, 0.3 * sc, 1.4 * sc, 0.3 * sc); }
  B.add(G.sph, M.dirt, x, 0, z + 0.7 * sc * Math.cos(ry), 0.5 * sc, 0.12, 0.9 * sc, 0, ry);
}
function lantern(B, x, z, h = 2.4, green = false) {
  B.add(G.cyl6, M.pole, x, h / 2, z, 0.06, h, 0.06); B.add(G.box, M.pole, x, h + 0.05, z, 0.42, 0.06, 0.42);
  B.add(G.box, M.lamp, x, h + 0.3, z, 0.26, 0.4, 0.26); B.add(G.cone, M.pole, x, h + 0.62, z, 0.3, 0.26, 0.3);
  B.glow(green ? M.glowGreen : M.glowWarm, x, h + 0.3, z, 3.4); B.anchor(x, h + 0.2, z, green ? 0x90ffc0 : 0xffb060, 1.2);
}
function deadTree(B, x, z, h = 7) {
  B.add(G.cyl, M.deadBark, x, h * 0.35, z, 0.28, h * 0.7, 0.28);
  B.add(G.cone, M.deadBark, x, h * 0.85, z, 0.22, h * 0.4, 0.22);
  for (let i = 0; i < 7; i++) {
    const a = srand(0, 6.28), l = srand(1.4, 3.2), y = h * srand(0.42, 0.85);
    B.add(G.cyl6, M.deadBark, x + Math.cos(a) * l * 0.42, y + l * 0.28, z + Math.sin(a) * l * 0.42, 0.07, l, 0.07, Math.sin(a) * 0.95, 0, -Math.cos(a) * 0.95);
    const x2 = x + Math.cos(a) * l * 0.8, z2 = z + Math.sin(a) * l * 0.8, y2 = y + l * 0.55;
    B.add(G.cyl6, M.deadBark, x2, y2 + 0.3, z2, 0.035, l * 0.5, 0.035, Math.sin(a + 0.8) * 0.6, 0, -Math.cos(a + 0.8) * 0.6);
  }
}
function fence(B, x0, z0, x1, z1) {
  const L = Math.hypot(x1 - x0, z1 - z0), n = Math.round(L / 0.42), ry = Math.atan2(x1 - x0, z1 - z0);
  for (let i = 0; i <= n; i++) { const k = i / n, x = x0 + (x1 - x0) * k, z = z0 + (z1 - z0) * k; B.add(G.box, M.iron, x, 0.85, z, 0.04, 1.7, 0.04); if (i % 3 === 0) B.add(G.cone, M.iron, x, 1.8, z, 0.06, 0.2, 0.06); }
  for (const y of [0.25, 1.55]) B.add(G.box, M.iron, (x0 + x1) / 2, y, (z0 + z1) / 2, 0.05, 0.05, L, 0, ry);
}
function mausoleum(B, x, z, s = 1) {
  B.add(G.box, M.stoneD, x, 2.2 * s, z, 6 * s, 4.4 * s, 4.5 * s); B.add(G.box, M.stone, x, 0.15, z + 0.4 * s, 6.8 * s, 0.3, 5.4 * s);
  B.add(G.prism, M.stone, x, (4.4 + 0.75) * s, z, 7 * s / Math.sqrt(3), 1.6 * s / 1.5, 5 * s, 0, Math.PI / 2);
  for (const c of [-2.2, -0.8, 0.8, 2.2]) B.add(G.cyl, M.stone, x + c * s, 2.1 * s, z + 2.45 * s, 0.26 * s, 4.2 * s, 0.26 * s);
  B.add(G.box, M.black, x, 1.4 * s, z + 2.26 * s, 1.5 * s, 2.8 * s, 0.05); B.glow(M.glowGreen, x, 1.4 * s, z + 2.4 * s, 4 * s);
  B.anchor(x, 1.6 * s, z + 3.2 * s, 0x80ffb0, 0.8);
}
export function createWorld(scene, qualityName) {
  const q = QUALITY[qualityName] || QUALITY.high;
  mats(); setSeed(777);
  const W = { root: new THREE.Group(), t: 0, q, fogK: 0 };
  scene.add(W.root);
  W.fog = new THREE.FogExp2(0x1c1030, 0.022); scene.fog = W.fog;
  W.sky = makeSky(); W.root.add(W.sky);
  W.sky.material.uniforms.hor.value.set(0.34, 0.1, 0.36); W.sky.material.uniforms.mid.value.set(0.1, 0.03, 0.2);
  W.stars = makeStars(q.stars); W.root.add(W.stars);
  W.moon = makeMoon(); W.root.add(W.moon); W.moon.scale.setScalar(1.25);
  W.moon.position.set(MOON_DIR.x * 330, MOON_DIR.y * 330 + 10, MOON_DIR.z * 330);
  W.hemi = new THREE.HemisphereLight(0xa894f0, 0x3a2848, 1.6); W.root.add(W.hemi);
  W.moonLight = new THREE.DirectionalLight(0xc8d0ff, 1.7); W.moonLight.position.set(8, 22, -18); W.root.add(W.moonLight); W.root.add(W.moonLight.target);
  if (q.shadow) { const L = W.moonLight; L.castShadow = true; L.shadow.mapSize.set(q.shadow, q.shadow); const c = L.shadow.camera; c.left = -12; c.right = 12; c.top = 12; c.bottom = -12; c.near = 1; c.far = 70; L.shadow.bias = -0.0008; L.shadow.normalBias = 0.03; }
  W.rim = new THREE.DirectionalLight(0xff9a60, 0.45); W.rim.position.set(-14, 6, 16); W.root.add(W.rim);
  W.fill = new THREE.DirectionalLight(0xb898ff, 0.55); W.fill.position.set(0, 10, 18); W.root.add(W.fill);
  // ground: grass with a dirt plot under the board
  const gt = tex('grass'); gt.repeat.set(50, 50);
  W.ground = new THREE.Mesh(new THREE.PlaneGeometry(200, 200), new THREE.MeshStandardMaterial({ color: 0x8a9a80, map: gt, roughness: 1, emissive: 0x0c0614, emissiveIntensity: 1 }));
  W.ground.rotation.x = -Math.PI / 2; W.ground.position.y = -0.02; W.ground.receiveShadow = true; W.root.add(W.ground);
  // static set dressing (merged)
  const B = new Builder(0);
  for (let i = 0; i < Math.round(26 * q.decor); i++) { const x = srand(-26, 26), z = srand(-34, -12); if (Math.abs(x) < 4 && z > -22) continue; tomb(B, x, z, srand(-0.25, 0.25), srand(0.9, 1.2)); }
  for (const s of [-1, 1]) for (let i = 0; i < Math.round(8 * q.decor); i++) tomb(B, s * srand(10, 22), srand(-12, 8), s * Math.PI / 2 * srand(0.6, 1), srand(0.9, 1.2));
  mausoleum(B, -2, -28, 1.2);
  for (const [x, z, h] of [[-12, -8, 8], [13, -12, 9], [-17, 2, 7], [16, 3, 7.5], [-8, -20, 6.5], [9, -24, 7]]) deadTree(B, x, z, h);
  fence(B, -9, -11, 9, -11); fence(B, -9, -11, -9, 10); fence(B, 9, -11, 9, 10);
  for (const [x, z] of [[-8.2, -10.2], [8.2, -10.2], [-8.2, 6], [8.2, 6]]) lantern(B, x, z, 2.4, z < 0 && x > 0);
  for (const [x, z, r] of [[-7.4, 7.5, 0.45], [7.2, 7.8, 0.4], [-6.6, -9.6, 0.38], [6.8, -9.2, 0.42], [-7.9, 0.5, 0.33], [7.9, -2.5, 0.35]]) { pumpkin(B, x, 0, z, r, true, Math.atan2(-x, 12 - z)); B.anchor(x, 0.8, z, 0xff8a30, 0.45); }
  W.static = B.build(); W.static.traverse(o => { if (o.isMesh) { o.castShadow = !!q.shadow; } }); W.root.add(W.static);
  W.anchors = B.anchors;
  W.pl = []; for (let i = 0; i < q.lights; i++) { const a = W.anchors[i]; if (!a) break; const l = new THREE.PointLight(a.color, 7 * a.power, 14, 1.6); l.position.copy(a.pos); W.root.add(l); W.pl.push({ l, a }); }
  // fog cards drifting around the board
  const fogT = makeFogTex(); W.fogCards = [];
  for (let i = 0; i < q.fog; i++) {
    const m = new THREE.Mesh(new THREE.PlaneGeometry(26, 3), new THREE.MeshBasicMaterial({ map: fogT, transparent: true, depthWrite: false, opacity: 0.3, color: 0xc8b8e8, fog: false }));
    m.position.set(rand(-10, 10), rand(0.3, 1.4), rand(-22, 3)); m.userData = { base: rand(0.1, 0.2), v: rand(0.25, 0.6) * (i % 2 ? 1 : -1) }; m.renderOrder = 2; W.root.add(m); W.fogCards.push(m);
  }
  const rt = rayTex(); W.rays = [];
  for (let i = 0; i < q.rays; i++) {
    const m = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ map: rt, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, opacity: 0, fog: false, color: 0xffe0b0 }));
    m.userData = { ph: rand(0, 6), base: rand(0.08, 0.14) }; m.scale.set(rand(3, 6), rand(24, 34), 1);
    m.position.set(rand(-18, 18), 14, rand(-45, -32)); m.rotation.z = -0.3 + rand(-0.1, 0.1); m.renderOrder = 3; W.root.add(m); W.rays.push(m);
  }
  {
    const n = q.ff, pos = new Float32Array(n * 3), ph = new Float32Array(n), sz = new Float32Array(n);
    for (let i = 0; i < n; i++) { pos[i * 3] = rand(-14, 14); pos[i * 3 + 1] = rand(0.3, 5); pos[i * 3 + 2] = rand(-22, 8); ph[i] = rand(0, 6.28); sz[i] = rand(0.06, 0.14); }
    const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(pos, 3)); g.setAttribute('phase', new THREE.BufferAttribute(ph, 1)); g.setAttribute('size', new THREE.BufferAttribute(sz, 1));
    const m = new THREE.ShaderMaterial({
      transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
      uniforms: { time: { value: 0 }, scale: { value: 500 }, col: { value: new THREE.Vector3(1, 0.85, 0.4) } },
      vertexShader: `attribute float phase; attribute float size; uniform float time; uniform float scale; varying float vA;
        void main(){ vec3 p = position + vec3(sin(time*0.5+phase*3.0)*0.9, sin(time*0.8+phase)*0.5, cos(time*0.45+phase*2.0)*0.9);
          vec4 mv = modelViewMatrix * vec4(p,1.0); vA = 0.3 + 0.7 * pow(0.5 + 0.5 * sin(time * 2.1 + phase * 5.0), 2.0);
          vA *= smoothstep(2.0, 6.0, -mv.z); gl_PointSize = size * scale / -mv.z; gl_Position = projectionMatrix * mv; }`,
      fragmentShader: `varying float vA; uniform vec3 col; void main(){ float d = length(gl_PointCoord - 0.5); float a = smoothstep(0.5, 0.0, d); a *= a; gl_FragColor = vec4(col * a * vA * 1.7, a * vA); }`
    });
    W.ff = new THREE.Points(g, m); W.ff.frustumCulled = false; W.root.add(W.ff);
  }
  {
    const n = q.leaves, lg = new THREE.PlaneGeometry(0.2, 0.14);
    const lm = new THREE.MeshStandardMaterial({ color: 0xffffff, side: THREE.DoubleSide, roughness: 0.8, emissive: 0x401808, emissiveIntensity: 0.6 });
    W.leaves = new THREE.InstancedMesh(lg, lm, n); W.leaves.frustumCulled = false;
    const cols = [0xd2601a, 0xb83a12, 0xe08a20, 0x8a3a10, 0xc8a030]; W.leafData = [];
    for (let i = 0; i < n; i++) { W.leaves.setColorAt(i, new THREE.Color(cols[i % cols.length])); W.leafData.push({ x: rand(-12, 12), y: rand(0, 8), z: rand(-16, 8), r: rand(0, 6), w: rand(1, 4), ph: rand(0, 6), fall: rand(0.4, 0.9) }); }
    W.root.add(W.leaves);
  }
  return W;
}
const _M4 = new THREE.Matrix4(), _Q = new THREE.Quaternion(), _E = new THREE.Euler(), _S = new THREE.Vector3(), _P = new THREE.Vector3();
// fogK 0..1: fog round (thick ground fog, less visibility)
export function updateWorld(W, dt, camera) {
  W.t += dt;
  W.fog.density = 0.022 + 0.05 * W.fogK;
  const su = W.sky.material.uniforms; su.time.value = W.t;
  W.sky.position.copy(camera.position); W.stars.position.copy(camera.position); W.stars.material.uniforms.time.value = W.t;
  for (const c of W.moon.userData.clouds) { c.position.x += c.userData.v * dt; if (c.position.x > 110) c.position.x = -110; if (c.position.x < -110) c.position.x = 110; }
  W.moon.userData.halo.material.opacity = 0.42 + 0.06 * Math.sin(W.t * 0.7);
  for (const m of W.fogCards) {
    m.position.x += m.userData.v * dt; if (m.position.x > 14) m.position.x = -14; if (m.position.x < -14) m.position.x = 14;
    m.lookAt(camera.position.x, m.position.y, camera.position.z);
    m.material.opacity = m.userData.base * (1 + W.fogK * 2.2) * clamp((m.position.distanceTo(camera.position) - 5) / 6, 0, 1); m.position.y = 0.3 + 0.4 * W.fogK + Math.sin(W.t * 0.3 + m.userData.v * 9) * 0.15;
  }
  for (const m of W.rays) m.material.opacity = m.userData.base * (0.75 + 0.25 * Math.sin(W.t * 0.7 + m.userData.ph)) * (1 - W.fogK * 0.6);
  W.ff.material.uniforms.time.value = W.t;
  for (const { l, a } of W.pl) l.intensity = 7 * a.power * (0.9 + 0.1 * Math.sin(W.t * 9 + a.pos.x)) * (1 - W.fogK * 0.4);
  const n = W.leafData.length;
  for (let i = 0; i < n; i++) { const L = W.leafData[i];
    L.y -= L.fall * dt; L.x += Math.sin(W.t * 1.3 + L.ph) * dt * 0.7; L.r += L.w * dt;
    if (L.y < 0) { L.y = rand(5, 9); L.z = rand(-16, 8); L.x = rand(-12, 12); }
    _E.set(L.r, L.r * 0.7 + L.ph, Math.sin(L.r) * 0.8); _Q.setFromEuler(_E); _P.set(L.x, L.y, L.z); _S.setScalar(1); _M4.compose(_P, _Q, _S); W.leaves.setMatrixAt(i, _M4); }
  W.leaves.instanceMatrix.needsUpdate = true;
}
export function sharedStuff() { return { M: mats(), G }; }
