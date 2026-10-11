// Procedural canvas textures (street, houses, windows, props, candy) — generated once at boot.
import * as THREE from 'three';
import { canvasTex, rand } from './util.js';

const cache = {};
function rep(t, x = 1, y = 1) { t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(x, y); t.anisotropy = 8; return t; }
function noise(c, w, h, n, col, a0, a1, r0 = 1, r1 = 3) { for (let i = 0; i < n; i++) { c.fillStyle = `rgba(${col},${rand(a0, a1)})`; const r = rand(r0, r1); c.fillRect(rand(0, w), rand(0, h), r, r); } }
export function tex(name) {
  if (cache[name]) return cache[name];
  const f = MAKERS[name]; return (cache[name] = f());
}
const MAKERS = {
  asphalt: () => rep(canvasTex(512, 512, (c, w, h) => {
    c.fillStyle = '#3a3646'; c.fillRect(0, 0, w, h);
    noise(c, w, h, 9000, '20,18,28', 0.2, 0.5, 1, 3); noise(c, w, h, 4000, '120,112,140', 0.08, 0.25, 1, 2);
    c.strokeStyle = 'rgba(15,12,20,0.5)'; c.lineWidth = 2;
    for (let i = 0; i < 6; i++) { c.beginPath(); let x = rand(0, w), y = rand(0, h); c.moveTo(x, y); for (let k = 0; k < 6; k++) { x += rand(-30, 30); y += rand(10, 40); c.lineTo(x, y); } c.stroke(); }
    // lane dashes (lanes at -1/3 and +1/3 of road width 9.6 → texture spans the road)
    c.fillStyle = 'rgba(235,220,190,0.75)';
    for (const lx of [w * (0.5 - 1.1 / 9.6), w * (0.5 + 1.1 / 9.6)]) for (let y = 0; y < h; y += 128) c.fillRect(lx - 4, y + 20, 8, 70);
    c.fillStyle = 'rgba(240,190,80,0.6)'; c.fillRect(10, 0, 6, h); c.fillRect(w - 16, 0, 6, h);
  }), 1, 4),
  sidewalk: () => rep(canvasTex(256, 256, (c, w, h) => {
    c.fillStyle = '#7a7486'; c.fillRect(0, 0, w, h); noise(c, w, h, 3000, '40,36,50', 0.15, 0.35); noise(c, w, h, 1500, '200,190,210', 0.05, 0.15);
    c.strokeStyle = 'rgba(30,26,40,0.7)'; c.lineWidth = 3; for (let y = 0; y <= h; y += 64) { c.beginPath(); c.moveTo(0, y); c.lineTo(w, y); c.stroke(); }
    c.beginPath(); c.moveTo(w / 2, 0); c.lineTo(w / 2, h); c.stroke();
  }), 1, 10),
  grass: () => rep(canvasTex(256, 256, (c, w, h) => {
    c.fillStyle = '#2c3a24'; c.fillRect(0, 0, w, h);
    for (let i = 0; i < 5000; i++) { const x = rand(0, w), y = rand(0, h), l = rand(0.5, 1.3); c.strokeStyle = `rgba(${60 * l | 0},${90 * l | 0},${46 * l | 0},0.6)`; c.lineWidth = 1; c.beginPath(); c.moveTo(x, y); c.lineTo(x + rand(-2, 2), y - rand(3, 8)); c.stroke(); }
    for (let i = 0; i < 70; i++) { c.fillStyle = ['#b8501a', '#d07a20', '#8a3410', '#c09030'][i % 4]; c.save(); c.translate(rand(0, w), rand(0, h)); c.rotate(rand(0, 6)); c.fillRect(-4, -2, 8, 4); c.restore(); }
  }), 4, 4),
  dirt: () => rep(canvasTex(256, 256, (c, w, h) => {
    c.fillStyle = '#4a3424'; c.fillRect(0, 0, w, h); noise(c, w, h, 6000, '30,20,12', 0.2, 0.5, 1, 4); noise(c, w, h, 2000, '140,110,80', 0.08, 0.2);
    c.strokeStyle = 'rgba(25,15,8,0.4)'; c.lineWidth = 6; for (let x = 16; x < w; x += 42) { c.beginPath(); c.moveTo(x, 0); c.lineTo(x + rand(-6, 6), h); c.stroke(); }
  }), 3, 3),
  cobble: () => rep(canvasTex(512, 512, (c, w, h) => {
    c.fillStyle = '#2a2430'; c.fillRect(0, 0, w, h);
    for (let y = 0; y < h; y += 32) for (let x = (y / 32 % 2) * 20; x < w; x += 40) { const l = rand(0.75, 1.2); c.fillStyle = `rgb(${92 * l | 0},${84 * l | 0},${98 * l | 0})`; c.beginPath(); c.roundRect(x + 2, y + 2, 36, 28, 9); c.fill(); c.fillStyle = 'rgba(255,240,220,0.08)'; c.fillRect(x + 6, y + 5, 22, 5); }
    noise(c, w, h, 3000, '20,16,24', 0.2, 0.4);
  }), 2, 6),
  siding: () => rep(canvasTex(256, 256, (c, w, h) => {
    c.fillStyle = '#ffffff'; c.fillRect(0, 0, w, h);
    for (let y = 0; y < h; y += 16) { const g = c.createLinearGradient(0, y, 0, y + 16); g.addColorStop(0, 'rgba(0,0,0,0.0)'); g.addColorStop(0.85, 'rgba(0,0,0,0.12)'); g.addColorStop(1, 'rgba(0,0,0,0.42)'); c.fillStyle = g; c.fillRect(0, y, w, 16); }
    noise(c, w, h, 1500, '0,0,0', 0.03, 0.08);
  }), 2, 2),
  brick: () => rep(canvasTex(256, 256, (c, w, h) => {
    c.fillStyle = '#3a2a28'; c.fillRect(0, 0, w, h);
    for (let y = 0; y < h; y += 16) for (let x = (y / 16 % 2) * 16; x < w + 32; x += 32) { const l = rand(0.7, 1.15); c.fillStyle = `rgb(${150 * l | 0},${78 * l | 0},${60 * l | 0})`; c.fillRect(x - 16 + 1, y + 1, 30, 14); }
    noise(c, w, h, 2500, '0,0,0', 0.05, 0.2);
  }), 2, 2),
  shingle: () => rep(canvasTex(256, 256, (c, w, h) => {
    c.fillStyle = '#1e1826'; c.fillRect(0, 0, w, h);
    for (let y = 0; y < h; y += 20) for (let x = (y / 20 % 2) * 14; x < w + 28; x += 28) { const l = rand(0.7, 1.2); c.fillStyle = `rgb(${52 * l | 0},${42 * l | 0},${62 * l | 0})`; c.fillRect(x - 14 + 1, y, 26, 18); c.fillStyle = 'rgba(0,0,0,0.35)'; c.fillRect(x - 14 + 1, y + 15, 26, 3); }
  }), 3, 2),
  window: () => canvasTex(128, 160, (c, w, h) => {
    const g = c.createRadialGradient(64, 90, 6, 64, 80, 110); g.addColorStop(0, '#fff0b8'); g.addColorStop(0.45, '#ffb04a'); g.addColorStop(1, '#a8400c'); c.fillStyle = g; c.fillRect(0, 0, w, h);
    c.fillStyle = 'rgba(120,30,10,0.55)'; c.beginPath(); c.moveTo(0, 0); c.quadraticCurveTo(30, 60, 14, h); c.lineTo(0, h); c.fill(); c.beginPath(); c.moveTo(w, 0); c.quadraticCurveTo(w - 30, 60, w - 14, h); c.lineTo(w, h); c.fill();
    c.fillStyle = '#20140e'; c.fillRect(0, 0, w, 8); c.fillRect(0, h - 8, w, 8); c.fillRect(0, 0, 8, h); c.fillRect(w - 8, 0, 8, h); c.fillRect(w / 2 - 4, 0, 8, h); c.fillRect(0, h / 2 - 4, w, 8);
  }),
  windowB: () => canvasTex(128, 160, (c, w, h) => { // purple TV glow + a cat / witch silhouette
    const g = c.createRadialGradient(64, 90, 6, 64, 80, 110); g.addColorStop(0, '#ffd8a0'); g.addColorStop(0.5, '#e07a3a'); g.addColorStop(1, '#5a1a40'); c.fillStyle = g; c.fillRect(0, 0, w, h);
    c.fillStyle = '#1a0c10'; c.beginPath(); c.ellipse(64, 138, 22, 20, 0, 0, 7); c.fill(); c.beginPath(); c.arc(64, 108, 14, 0, 7); c.fill(); c.beginPath(); c.moveTo(52, 100); c.lineTo(54, 84); c.lineTo(60, 96); c.fill(); c.beginPath(); c.moveTo(76, 100); c.lineTo(74, 84); c.lineTo(68, 96); c.fill();
    c.fillStyle = '#20140e'; c.fillRect(0, 0, w, 8); c.fillRect(0, h - 8, w, 8); c.fillRect(0, 0, 8, h); c.fillRect(w - 8, 0, 8, h); c.fillRect(w / 2 - 4, 0, 8, h / 2); c.fillRect(0, h / 2 - 4, w, 8);
  }),
  door: () => canvasTex(128, 256, (c, w, h) => {
    c.fillStyle = '#4a1e16'; c.fillRect(0, 0, w, h);
    for (const [x, y, ww, hh] of [[14, 16, 44, 90], [70, 16, 44, 90], [14, 124, 44, 116], [70, 124, 44, 116]]) { c.fillStyle = '#5e2a1e'; c.fillRect(x, y, ww, hh); c.strokeStyle = 'rgba(0,0,0,0.5)'; c.lineWidth = 4; c.strokeRect(x, y, ww, hh); c.strokeStyle = 'rgba(255,200,150,0.15)'; c.lineWidth = 2; c.strokeRect(x + 3, y + 3, ww - 6, hh - 6); }
    noise(c, w, h, 900, '0,0,0', 0.05, 0.2); c.fillStyle = '#e8b860'; c.beginPath(); c.arc(100, 136, 6, 0, 7); c.fill();
  }),
  pumpkinFace: () => canvasTex(256, 256, (c, w, h) => {
    c.fillStyle = '#000'; c.fillRect(0, 0, w, h); c.fillStyle = '#fff';
    c.beginPath(); c.moveTo(60, 110); c.lineTo(100, 60); c.lineTo(112, 116); c.fill(); c.beginPath(); c.moveTo(196, 110); c.lineTo(156, 60); c.lineTo(144, 116); c.fill();
    c.beginPath(); c.moveTo(118, 140); c.lineTo(128, 118); c.lineTo(138, 140); c.fill();
    c.beginPath(); c.moveTo(48, 160); c.quadraticCurveTo(128, 240, 208, 160); c.quadraticCurveTo(128, 200, 48, 160); c.fill();
    c.fillStyle = '#000'; c.fillRect(92, 168, 16, 14); c.fillRect(148, 168, 16, 14);
  }, false),
  cuteFace: () => canvasTex(256, 256, (c, w, h) => {
    c.fillStyle = '#000'; c.fillRect(0, 0, w, h); c.fillStyle = '#fff';
    c.beginPath(); c.arc(90, 100, 22, 0, 7); c.fill(); c.beginPath(); c.arc(166, 100, 22, 0, 7); c.fill();
    c.beginPath(); c.moveTo(70, 160); c.quadraticCurveTo(128, 215, 186, 160); c.quadraticCurveTo(128, 185, 70, 160); c.fill();
  }, false),
  pumpkinSkin: () => rep(canvasTex(256, 128, (c, w, h) => {
    const g = c.createLinearGradient(0, 0, w, 0); for (let i = 0; i <= 8; i++) { g.addColorStop(i / 8, i % 2 ? '#f08a1c' : '#c85a0e'); } c.fillStyle = g; c.fillRect(0, 0, w, h); noise(c, w, h, 1200, '90,30,0', 0.05, 0.15);
  }), 1, 1),
  stone: () => rep(canvasTex(256, 256, (c, w, h) => { c.fillStyle = '#6a6474'; c.fillRect(0, 0, w, h); noise(c, w, h, 6000, '30,28,38', 0.1, 0.35, 1, 4); noise(c, w, h, 900, '70,110,60', 0.1, 0.3, 2, 6); }), 1, 1),
  hay: () => rep(canvasTex(256, 256, (c, w, h) => { c.fillStyle = '#a07a30'; c.fillRect(0, 0, w, h); for (let i = 0; i < 1800; i++) { const l = rand(0.6, 1.3); c.strokeStyle = `rgba(${210 * l | 0},${170 * l | 0},${80 * l | 0},0.5)`; c.beginPath(); const x = rand(0, w), y = rand(0, h); c.moveTo(x, y); c.lineTo(x + rand(-20, 20), y + rand(-4, 4)); c.stroke(); } }), 1, 1),
  wood: () => rep(canvasTex(128, 256, (c, w, h) => { c.fillStyle = '#5a3a24'; c.fillRect(0, 0, w, h); for (let i = 0; i < 60; i++) { c.strokeStyle = `rgba(30,16,8,${rand(0.1, 0.35)})`; c.beginPath(); const x = rand(0, w); c.moveTo(x, 0); c.bezierCurveTo(x + rand(-8, 8), h / 3, x + rand(-8, 8), h * 2 / 3, x, h); c.stroke(); } }), 1, 1),
  web: () => canvasTex(256, 256, (c, w, h) => {
    c.strokeStyle = 'rgba(235,235,255,0.75)'; c.lineWidth = 1.6;
    for (let a = 0; a <= Math.PI / 2 + 0.01; a += Math.PI / 14) { c.beginPath(); c.moveTo(0, 0); c.lineTo(Math.cos(a) * 250, Math.sin(a) * 250); c.stroke(); }
    for (let r = 26; r < 250; r += 26) { c.beginPath(); for (let a = 0; a <= Math.PI / 2 + 0.01; a += Math.PI / 14) { const rr = r + Math.sin(a * 9) * 4; const x = Math.cos(a) * rr, y = Math.sin(a) * rr; a === 0 ? c.moveTo(x, y) : c.quadraticCurveTo(Math.cos(a - 0.11) * (rr - 8), Math.sin(a - 0.11) * (rr - 8), x, y); } c.stroke(); }
  }),
  swirl: () => canvasTex(256, 256, (c, w, h) => {
    c.fillStyle = '#fff4f8'; c.fillRect(0, 0, w, h); c.translate(128, 128);
    const cols = ['#ff3a8a', '#ffb020', '#7a3aff', '#28c8a0'];
    for (let i = 0; i < 4; i++) { c.fillStyle = cols[i]; c.beginPath(); for (let t = 0; t < 12; t += 0.05) { const r = t * 10.5, a = t + i * Math.PI / 2; c.lineTo(Math.cos(a) * r, Math.sin(a) * r); } for (let t = 12; t > 0; t -= 0.05) { const r = t * 10.5, a = t + i * Math.PI / 2 + 0.7; c.lineTo(Math.cos(a) * r, Math.sin(a) * r); } c.fill(); }
  }),
  choco: () => canvasTex(256, 128, (c, w, h) => {
    c.fillStyle = '#7a1a8a'; c.fillRect(0, 0, w, h); c.fillStyle = '#ffb020'; c.fillRect(0, 44, w, 40); c.fillStyle = '#5a0e66'; c.font = 'bold 34px Arial Black, Arial'; c.textAlign = 'center'; c.fillText('BOO!', 128, 76);
    c.fillStyle = 'rgba(255,255,255,0.25)'; c.fillRect(0, 8, w, 10);
  }),
  sign: () => canvasTex(512, 128, (c, w, h) => { c.fillStyle = '#2a1408'; c.fillRect(0, 0, w, h); c.strokeStyle = '#ffb040'; c.lineWidth = 6; c.strokeRect(8, 8, w - 16, h - 16); c.fillStyle = '#ffd070'; c.font = 'bold 64px Georgia, serif'; c.textAlign = 'center'; c.fillText('CANDY', 256, 88); }),
  bandage: () => rep(canvasTex(128, 128, (c, w, h) => { c.fillStyle = '#d8ceb0'; c.fillRect(0, 0, w, h); for (let y = 0; y < h; y += 10) { c.fillStyle = `rgba(90,70,40,${rand(0.15, 0.4)})`; c.save(); c.translate(0, y); c.rotate(rand(-0.15, 0.15)); c.fillRect(-10, 0, w + 20, 2); c.restore(); } noise(c, w, h, 600, '80,60,30', 0.05, 0.2); }), 2, 2),
  fur: () => rep(canvasTex(128, 128, (c, w, h) => { c.fillStyle = '#5a3e2a'; c.fillRect(0, 0, w, h); for (let i = 0; i < 1600; i++) { const l = rand(0.6, 1.4); c.strokeStyle = `rgba(${110 * l | 0},${80 * l | 0},${56 * l | 0},0.6)`; c.beginPath(); const x = rand(0, w), y = rand(0, h); c.moveTo(x, y); c.lineTo(x + rand(-2, 2), y + rand(4, 9)); c.stroke(); } }), 2, 2)
};
