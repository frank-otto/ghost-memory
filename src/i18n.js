// EN (default) / DE strings, rank titles and share texts
const STR = {
  en: {
    kicker: 'A moonlit graveyard memory game', tag: 'Flip a gravestone, meet a ghost — and find its twin before the night is over!',
    play: 'PLAY', play2: '2 PLAYERS', how: '🖱️ Click or 📱 tap a gravestone to flip it &nbsp;·&nbsp; find the matching ghost pairs &nbsp;·&nbsp; ⌨️ arrows + Enter work too',
    howKids: '🖱️ Tap a gravestone &nbsp;·&nbsp; find two friendly ghosts that look the same &nbsp;·&nbsp; no hurry!',
    kids: 'Kids mode', settings: '⚙ Modes & options', settingsT: 'Modes & options', hintTap: 'Tap two gravestones 🪦🪦 – find the matching ghost pairs!', hintKeys: 'Click two gravestones 🪦🪦 (or arrows + Enter) – find the matching ghost pairs!', help: 'How to play', best: 'Best', quality: 'Quality', q_low: 'Low', q_mid: 'Medium', q_high: 'High', q_ultra: 'Ultra',
    music: 'Music', sfx: 'Sound effects', mute: 'Mute all', lang: 'Language', close: 'Done', suggested: 'Suggested', fpsLow: 'Low frame rate → quality', paused: 'Paused', resume: 'RESUME', quit: 'Quit game',
    tut1t: 'Flip', tut1: 'Click or tap a gravestone. A ghost rises from the grave!', tut2t: 'Match', tut2: 'Find the second ghost of the same kind. Pairs dance and fly to the stars.',
    tut3t: 'Combo', tut3: 'Pairs in a row give a combo bonus. Fewer moves = more stars.', tut4t: 'Twists', tut4: 'Later: a cheeky ghost swaps stones, fog rolls in, and a golden pumpkin pair hides somewhere.',
    tutGo: 'Got it — PLAY!', tutSkip: 'Skip',
    level: 'Level', moves: 'Moves', time: 'Time', pairs: 'Pairs', score: 'Score', combo: 'COMBO', match: 'MATCH!', nope: 'Nope!', gold: 'GOLDEN PUMPKIN!', swap: 'A cheeky ghost swapped two stones!', fogIn: 'The fog rolls in…',
    peek: 'Peek!', memorize: 'Remember the ghosts…', levelDone: 'LEVEL CLEAR!', next: 'NEXT LEVEL ▶', finish: 'FINISH', turn: '’s turn', wins: 'WINS!', draw: 'IT’S A TIE!', again: 'Go again!',
    lv1: 'The Little Churchyard', lv2: 'Lantern Lane', lv3: 'The Foggy Crypts', lv4: 'Midnight Hill', lvk1: 'Tiny Graveyard', lvk2: 'Friendly Ghosts', lvk3: 'Ghost Party',
    twistSwap: '👻 swaps', twistFog: '🌫️ fog', twistGold: '🌟 golden pair',
    endTitle: 'ALL GHOSTS FOUND!', endTitleQuit: 'GOOD NIGHT!', end2p: 'GHOST DUEL', newBest: 'NEW BEST!', stScore: 'score', stMoves: 'moves', stTime: 'time', stStars: 'stars', stCombo: 'best combo',
    name: 'Name', shareT: 'Share text', share: 'Copy share text', shot: 'Download end card', replay: '↻ PLAY AGAIN', menu: 'Menu', copied: 'Share text copied!', copyFail: 'Select the text to copy it', saved: 'End card saved 📸',
    p1: 'Player 1', p2: 'Player 2', mode2: '2-player names', vs: 'vs',
    g_pumpkin: 'Pumpkin Ghost', g_witch: 'Witch Ghost', g_bat: 'Bat Ghost', g_skeleton: 'Skeleton Ghost', g_cat: 'Cat Ghost', g_vampire: 'Vampire Ghost', g_mummy: 'Mummy Ghost', g_candle: 'Candle Ghost',
    g_monster: 'Monster Ghost', g_owl: 'Owl Ghost', g_sheet: 'Classic Ghost', g_zombie: 'Zombie Ghost', g_devil: 'Devil Ghost', g_spider: 'Spider Ghost', g_gold: 'Golden Pumpkin'
  },
  de: {
    kicker: 'Ein Memory auf dem Mondschein-Friedhof', tag: 'Dreh einen Grabstein um, triff einen Geist – und finde seinen Zwilling, bevor die Nacht vorbei ist!',
    play: 'SPIELEN', play2: '2 SPIELER', how: '🖱️ Klick oder 📱 tipp auf einen Grabstein &nbsp;·&nbsp; finde die passenden Geister-Paare &nbsp;·&nbsp; ⌨️ Pfeile + Enter gehen auch',
    howKids: '🖱️ Tipp auf einen Grabstein &nbsp;·&nbsp; finde zwei gleiche, freundliche Geister &nbsp;·&nbsp; ganz ohne Eile!',
    kids: 'Kinder-Modus', settings: '⚙ Modi & Optionen', settingsT: 'Modi & Optionen', hintTap: 'Tipp auf zwei Grabsteine 🪦🪦 – finde die passenden Geister-Paare!', hintKeys: 'Klick zwei Grabsteine 🪦🪦 an (oder Pfeile + Enter) – finde die passenden Geister-Paare!', help: 'Spielanleitung', best: 'Rekord', quality: 'Qualität', q_low: 'Niedrig', q_mid: 'Mittel', q_high: 'Hoch', q_ultra: 'Ultra',
    music: 'Musik', sfx: 'Effekte', mute: 'Ton aus', lang: 'Sprache', close: 'Fertig', suggested: 'Empfohlen', fpsLow: 'Niedrige Bildrate → Qualität', paused: 'Pause', resume: 'WEITER', quit: 'Spiel beenden',
    tut1t: 'Umdrehen', tut1: 'Klick oder tipp auf einen Grabstein. Ein Geist steigt aus dem Grab!', tut2t: 'Paare', tut2: 'Finde den zweiten Geist derselben Art. Paare tanzen und fliegen zu den Sternen.',
    tut3t: 'Kombo', tut3: 'Paare hintereinander geben Kombo-Bonus. Weniger Züge = mehr Sterne.', tut4t: 'Überraschungen', tut4: 'Später: ein frecher Geist vertauscht Steine, Nebel zieht auf und ein goldenes Kürbis-Paar versteckt sich.',
    tutGo: 'Alles klar – LOS!', tutSkip: 'Überspringen',
    level: 'Level', moves: 'Züge', time: 'Zeit', pairs: 'Paare', score: 'Punkte', combo: 'KOMBO', match: 'PAAR!', nope: 'Nö!', gold: 'GOLDENER KÜRBIS!', swap: 'Ein frecher Geist hat zwei Steine vertauscht!', fogIn: 'Der Nebel zieht auf …',
    peek: 'Guck mal!', memorize: 'Merk dir die Geister …', levelDone: 'LEVEL GESCHAFFT!', next: 'NÄCHSTES LEVEL ▶', finish: 'FERTIG', turn: ' ist dran', wins: 'GEWINNT!', draw: 'UNENTSCHIEDEN!', again: 'Nochmal!',
    lv1: 'Der kleine Kirchhof', lv2: 'Laternengasse', lv3: 'Die Nebelgruft', lv4: 'Mitternachtshügel', lvk1: 'Mini-Friedhof', lvk2: 'Freundliche Geister', lvk3: 'Geisterparty',
    twistSwap: '👻 vertauscht', twistFog: '🌫️ Nebel', twistGold: '🌟 goldenes Paar',
    endTitle: 'ALLE GEISTER GEFUNDEN!', endTitleQuit: 'GUTE NACHT!', end2p: 'GEISTER-DUELL', newBest: 'NEUER REKORD!', stScore: 'Punkte', stMoves: 'Züge', stTime: 'Zeit', stStars: 'Sterne', stCombo: 'beste Kombo',
    name: 'Name', shareT: 'Teilen-Text', share: 'Text kopieren', shot: 'Endkarte speichern', replay: '↻ NOCHMAL', menu: 'Menü', copied: 'Text kopiert!', copyFail: 'Text markieren zum Kopieren', saved: 'Endkarte gespeichert 📸',
    p1: 'Spieler 1', p2: 'Spieler 2', mode2: 'Namen für 2 Spieler', vs: 'gegen',
    g_pumpkin: 'Kürbisgeist', g_witch: 'Hexengeist', g_bat: 'Fledermausgeist', g_skeleton: 'Skelettgeist', g_cat: 'Katzengeist', g_vampire: 'Vampirgeist', g_mummy: 'Mumiengeist', g_candle: 'Kerzengeist',
    g_monster: 'Monstergeist', g_owl: 'Eulengeist', g_sheet: 'Klassik-Geist', g_zombie: 'Zombiegeist', g_devil: 'Teufelchen', g_spider: 'Spinnengeist', g_gold: 'Goldener Kürbis'
  }
};
export const RANKS = [
  { min: 0, en: 'Memory Phantom', de: 'Gedächtnis-Gespenst' },
  { min: 2500, en: 'Grave Peeker', de: 'Grabstein-Gucker' },
  { min: 6000, en: 'Pair Poltergeist', de: 'Paar-Poltergeist' },
  { min: 11000, en: 'Crypt Keeper', de: 'Gruft-Hüter' },
  { min: 17000, en: 'Moonlight Medium', de: 'Mondschein-Medium' },
  { min: 24000, en: 'Ghost Genius', de: 'Geister-Genie' }
];
let lang = 'en';
// auto language: a saved choice wins, otherwise DE for de* browsers, EN for everything else
export function autoLang() { try { const l = (navigator.languages && navigator.languages[0]) || navigator.language || ''; return /^de\b/i.test(l) ? 'de' : 'en'; } catch (e) { return 'en'; } }
try { lang = localStorage.getItem('gm-lang') || autoLang(); } catch (e) { lang = autoLang(); }
export function getLang() { return lang; }
export function setLang(l, save = true) { lang = l === 'de' ? 'de' : 'en'; if (save) try { localStorage.setItem('gm-lang', lang); } catch (e) {} document.documentElement.lang = lang; }
export function T(k, l = lang) { return (STR[l] && STR[l][k]) ?? STR.en[k] ?? k; }
export function rankFor(score, l = lang) { let r = RANKS[0]; for (const x of RANKS) if (score >= x.min) r = x; return r[l]; }
export function applyI18n(kids) {
  document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = T(el.getAttribute('data-i18n')); });
  document.querySelectorAll('[data-i18n-html]').forEach(el => { const k = el.getAttribute('data-i18n-html'); el.innerHTML = T(kids && k === 'how' ? 'howKids' : k); });
}
export function fmt(n, l = lang) { return Math.round(n).toLocaleString(l === 'de' ? 'de-DE' : 'en-US'); }
export const mmss = s => { s = Math.max(0, Math.round(s)); return `${(s / 60) | 0}:${String(s % 60).padStart(2, '0')}`; };
export function shareText(r, l) {
  if (r.two) {
    const w = r.winner;
    if (l === 'de') return `👻 GHOST MEMORY Geister-Duell: ${r.p[0].name} ${r.p[0].pairs} : ${r.p[1].pairs} ${r.p[1].name} – ${w ? w + ' gewinnt!' : 'unentschieden!'} 🏆\nAuf dem Mondschein-Friedhof Geister-Paare gefunden 🌕🪦 #GhostMemory #Halloween`;
    return `👻 GHOST MEMORY ghost duel: ${r.p[0].name} ${r.p[0].pairs} : ${r.p[1].pairs} ${r.p[1].name} — ${w ? w + ' wins!' : 'it’s a tie!'} 🏆\nMatching ghost pairs in a moonlit graveyard 🌕🪦 #GhostMemory #Halloween`;
  }
  const rank = rankFor(r.score, l), s = fmt(r.score, l), st = '⭐'.repeat(r.stars) + '☆'.repeat(Math.max(0, r.maxStars - r.stars));
  if (l === 'de') return `👻 ${r.name} hat in GHOST MEMORY ${r.pairs} Geister-Paare in ${r.moves} Zügen gefunden – ${s} Punkte, Rang: ${rank}!\n${st} · beste Kombo x${r.bestCombo}${r.gold ? ' · goldener Kürbis 🌟' : ''}\nSchaffst du’s mit weniger Zügen? 🪦🌕 #GhostMemory #Halloween`;
  return `👻 ${r.name} found ${r.pairs} ghost pairs in ${r.moves} moves in GHOST MEMORY — ${s} points, rank: ${rank}!\n${st} · best combo x${r.bestCombo}${r.gold ? ' · golden pumpkin 🌟' : ''}\nCan you do it in fewer moves? 🪦🌕 #GhostMemory #Halloween`;
}
