// Obsidian Cyber-Glass SVG component kit shared by profile READMEs.
// Content lives in build-assets.mjs next to this file.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

let out = "assets";
export const setOut = (dir) => { out = dir; mkdirSync(out, { recursive: true }); };

export const THEMES = {
  dark: {
    bg: "#05070e", panel: "#0c101d", glassTop: "#10152a", grid: "#ffffff", line: "#1a2033",
    title: "#ffffff", text: "#e6e9f5", dim: "#7d849b", faint: "#4a5068",
    indigo: "#5e6ad2", violet: "#8b93ff", cyan: "#00e5ff", mongo: "#00ED64", nvidia: "#76B900", yc: "#FB651E",
    w3c: "#3d8fd6", lf: "#4f7cff", java: "#f89820", ts: "#3178c6", rust: "#dea584", red: "#f85149",
  },
  light: {
    bg: "#eef1f8", panel: "#ffffff", glassTop: "#ffffff", grid: "#0b1020", line: "#d5dbe7",
    title: "#0b1020", text: "#141a2e", dim: "#4b5468", faint: "#8a93a6",
    indigo: "#4f5bd5", violet: "#5b63e6", cyan: "#0e7490", mongo: "#00994d", nvidia: "#4f8a00", yc: "#d9480f",
    w3c: "#1f6fb2", lf: "#3456d8", java: "#b85c00", ts: "#3178c6", rust: "#a0522d", red: "#cf222e",
  },
};
// Mutable palette read by every component; setTheme swaps it in place.
export const C = { ...THEMES.dark };
export const setTheme = (name) => Object.assign(C, THEMES[name]);
export const MONO = `'JetBrains Mono','SF Mono','Cascadia Code',Consolas,'Liberation Mono',monospace`;
export const SANS = `'Inter','Segoe UI',-apple-system,BlinkMacSystemFont,'Helvetica Neue',Arial,sans-serif`;
export const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
export const monoW = (s, size) => s.length * size * 0.61;

// Shared defs: gradient border, glass fill, glow, grid pattern.
export const defs = (id, accent = C.indigo, accent2 = C.cyan) => `
  <defs>
    <linearGradient id="${id}-border" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${accent}" stop-opacity=".9"/>
      <stop offset=".5" stop-color="${C.line}" stop-opacity=".6"/>
      <stop offset="1" stop-color="${accent2}" stop-opacity=".8"/>
    </linearGradient>
    <linearGradient id="${id}-glass" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="${C.glassTop}"/>
      <stop offset="1" stop-color="${C.bg}"/>
    </linearGradient>
    <radialGradient id="${id}-orb" cx=".85" cy="0" r=".9">
      <stop offset="0" stop-color="${accent}" stop-opacity=".28"/>
      <stop offset="1" stop-color="${accent}" stop-opacity="0"/>
    </radialGradient>
    <pattern id="${id}-grid" width="24" height="24" patternUnits="userSpaceOnUse">
      <path d="M24 0H0V24" fill="none" stroke="${C.grid}" stroke-opacity=".035"/>
    </pattern>
    <filter id="${id}-glow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>`;

export const frame = (id, w, h, r = 14) => `
  <rect x=".5" y=".5" width="${w - 1}" height="${h - 1}" rx="${r}" fill="url(#${id}-glass)"/>
  <rect x=".5" y=".5" width="${w - 1}" height="${h - 1}" rx="${r}" fill="url(#${id}-grid)"/>
  <rect x=".5" y=".5" width="${w - 1}" height="${h - 1}" rx="${r}" fill="url(#${id}-orb)"/>
  <rect x=".5" y=".5" width="${w - 1}" height="${h - 1}" rx="${r}" fill="none" stroke="url(#${id}-border)" stroke-width="1"/>`;

export const pulseDot = (x, y, color, id) => `
  <circle cx="${x}" cy="${y}" r="4" fill="${color}" filter="url(#${id}-glow)"/>
  <circle cx="${x}" cy="${y}" r="4" fill="none" stroke="${color}" class="pulse"/>`;

export const chip = (x, y, label, color, size = 11) => {
  const w = monoW(label, size) + 18;
  return {
    w,
    svg: `<g transform="translate(${x},${y})">
      <rect width="${w}" height="22" rx="11" fill="${color}" fill-opacity=".12" stroke="${color}" stroke-opacity=".45"/>
      <text x="${w / 2}" y="15" text-anchor="middle" font-family="${MONO}" font-size="${size}" fill="${color}">${esc(label)}</text>
    </g>`,
  };
};
export const chipRow = (x, y, items) => {
  let cx = x, s = "";
  for (const [label, color] of items) { const c = chip(cx, y, label, color); s += c.svg; cx += c.w + 8; }
  return s;
};

export const baseStyle = `
  <style>
    .pulse { transform-box: fill-box; transform-origin: center; animation: pulse 2.4s ease-out infinite; }
    @keyframes pulse { 0% { transform: scale(1); opacity: .9 } 100% { transform: scale(3.2); opacity: 0 } }
    @media (prefers-reduced-motion: reduce) { * { animation: none !important; opacity: 1 !important } }
  </style>`;

export const svg = (w, h, body, title) =>
  `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-label="${esc(title)}">
  <title>${esc(title)}</title>${body}
</svg>
`;
export const write = (name, content) => writeFileSync(join(out, name), content);

// ─── Hero: terminal boot HUD ─────────────────────────────────────────────
// lines: array of [text, color][] segments, revealed one after another.
export const hero = ({ name, subtitle, host, uplink, lines, statusText = "all systems nominal", nameGradient = [C.title, C.violet, C.cyan], file = "hero.svg" }) => {
  const W = 1200, id = "h";
  const x0 = 40, y0 = 196, lh = 23, fs = 14.5, step = 0.32;
  const H = y0 + lines.length * lh + 34;
  let body = "", css = "";
  lines.forEach((segs, i) => {
    let spans = "";
    for (const [t, col] of segs) spans += `<tspan fill="${col}">${esc(t)}</tspan>`;
    css += `.l${i}{opacity:0;animation:in .35s ease-out ${(0.6 + i * step).toFixed(2)}s forwards}`;
    body += `<text class="l${i}" x="${x0}" y="${y0 + i * lh}" font-family="${MONO}" font-size="${fs}" xml:space="preserve">${spans}</text>`;
  });
  const cursorY = y0 + lines.length * lh;
  const cursorDelay = (0.6 + lines.length * step).toFixed(2);
  const content = `${defs(id)}
  <style>
    @keyframes in { from { opacity: 0; transform: translateX(-6px) } to { opacity: 1; transform: none } }
    ${css}
    .cur { opacity: 0; animation: in .2s ${cursorDelay}s forwards, blink 1s steps(1) ${cursorDelay}s infinite; }
    @keyframes blink { 50% { opacity: 0 } }
    .scan { animation: scan 7s linear infinite; }
    @keyframes scan { from { transform: translateY(-40px) } to { transform: translateY(${H}px) } }
    .pulse { transform-box: fill-box; transform-origin: center; animation: pulse 2.4s ease-out infinite; }
    @keyframes pulse { 0% { transform: scale(1); opacity: .9 } 100% { transform: scale(3.2); opacity: 0 } }
    @media (prefers-reduced-motion: reduce) { * { animation: none !important; opacity: 1 !important } }
  </style>
  <linearGradient id="h-name" x1="0" x2="1">${nameGradient.map((c, i) => `<stop offset="${i / (nameGradient.length - 1)}" stop-color="${c}"/>`).join("")}</linearGradient>
  <linearGradient id="h-scan" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${C.cyan}" stop-opacity="0"/><stop offset="1" stop-color="${C.cyan}" stop-opacity=".07"/></linearGradient>
  <clipPath id="h-clip"><rect x="1" y="1" width="${W - 2}" height="${H - 2}" rx="16"/></clipPath>
  ${frame(id, W, H, 16)}
  <g clip-path="url(#h-clip)"><rect class="scan" x="0" y="0" width="${W}" height="40" fill="url(#h-scan)"/></g>

  <circle cx="28" cy="26" r="6" fill="#ff5f57"/><circle cx="48" cy="26" r="6" fill="#febc2e"/><circle cx="68" cy="26" r="6" fill="#28c840"/>
  <text x="${W / 2}" y="31" text-anchor="middle" font-family="${MONO}" font-size="12.5" fill="${C.faint}">${esc(host)}</text>
  <line x1="0" y1="50" x2="${W}" y2="50" stroke="${C.line}"/>

  <text x="40" y="112" font-family="${SANS}" font-size="50" font-weight="700" letter-spacing="-1.5" fill="url(#h-name)">${esc(name)}</text>
  <text x="42" y="146" font-family="${MONO}" font-size="14" fill="${C.dim}">${esc(subtitle)}</text>
  ${pulseDot(W - 54 - monoW(statusText, 13), 100, C.mongo, id)}
  <text x="${W - 40}" y="105" text-anchor="end" font-family="${MONO}" font-size="13" fill="${C.mongo}">${esc(statusText)}</text>
  <text x="${W - 40}" y="130" text-anchor="end" font-family="${MONO}" font-size="12" fill="${C.faint}">uplink: ${esc(uplink)}</text>
  <line x1="40" y1="168" x2="${W - 40}" y2="168" stroke="${C.line}" stroke-dasharray="2 6"/>

  ${body}
  <text class="cur" x="${x0}" y="${cursorY}" font-family="${MONO}" font-size="${fs}"><tspan fill="${C.mongo}">❯ </tspan><tspan fill="${C.text}">▍</tspan></text>`;
  write(file, svg(W, H, content, `${name} — ${subtitle}`));
};

// ─── Section header ──────────────────────────────────────────────────────
export const header = (file, num, label, sub, accent = C.indigo) => {
  const W = 1200, H = 72;
  const content = `
  <linearGradient id="s-line" x1="0" x2="1"><stop offset="0" stop-color="${accent}"/><stop offset=".4" stop-color="${C.cyan}" stop-opacity=".5"/><stop offset="1" stop-color="${C.cyan}" stop-opacity="0"/></linearGradient>
  <style>.sweep{animation:sweep 5s ease-in-out infinite}@keyframes sweep{0%{transform:translateX(-200px);opacity:0}30%{opacity:1}100%{transform:translateX(1200px);opacity:0}}@media (prefers-reduced-motion: reduce){.sweep{animation:none;opacity:0}}</style>
  <text x="0" y="30" font-family="${MONO}" font-size="13" fill="${accent}" letter-spacing="2">// ${num}</text>
  <text x="${monoW(`// ${num}`, 13) + 22}" y="31" font-family="${SANS}" font-size="22" font-weight="600" fill="${C.text}" letter-spacing="-.3">${esc(label)}</text>
  <text x="${W}" y="30" text-anchor="end" font-family="${MONO}" font-size="12" fill="${C.dim}">${esc(sub)}</text>
  <rect x="0" y="50" width="${W}" height="1.5" fill="url(#s-line)"/>
  <rect class="sweep" x="0" y="49" width="160" height="3.5" rx="2" fill="${C.cyan}" opacity=".8"/>`;
  write(file, svg(W, H, content, label));
};

// ─── Accreditation strip ─────────────────────────────────────────────────
export const programs = (items, file = "programs.svg") => {
  const W = 1200, H = 64, id = "a", fs = 13, gap = 12;
  const widths = items.map(([l]) => monoW(l, fs) + 44);
  const total = widths.reduce((a, b) => a + b, 0) + gap * (items.length - 1);
  let x = (W - total) / 2, body = "";
  items.forEach(([label, color], i) => {
    const w = widths[i];
    body += `<g transform="translate(${x},14)">
      <rect width="${w}" height="36" rx="18" fill="${color}" fill-opacity=".09" stroke="${color}" stroke-opacity=".55"/>
      <circle cx="18" cy="18" r="4" fill="${color}" filter="url(#a-glow)"/>
      <text x="32" y="23" font-family="${MONO}" font-size="${fs}" fill="${color}">${esc(label)}</text>
    </g>`;
    x += w + gap;
  });
  write(file, svg(W, H, defs(id) + body, `Programs: ${items.map((i) => i[0]).join(", ")}`));
};

// ─── Cards ───────────────────────────────────────────────────────────────
export const card = ({ file, w = 590, h = 270, accent, accent2 = C.cyan, kicker, title, tagline, bullets, chips, status, statusColor, title2 }) => {
  const id = file.replace(/\W/g, "");
  let y = 152, bl = "";
  for (const b of bullets) {
    bl += `<text x="30" y="${y}" font-family="${SANS}" font-size="14" fill="${C.text}" fill-opacity=".86"><tspan fill="${accent}">▸ </tspan>${esc(b)}</text>`;
    y += 25;
  }
  const content = `${defs(id, accent, accent2)}${baseStyle}
  ${frame(id, w, h)}
  <text x="30" y="40" font-family="${MONO}" font-size="11.5" letter-spacing="1.5" fill="${accent}">${esc(kicker)}</text>
  ${pulseDot(w - 30 - monoW(status, 11.5) - 14, 36, statusColor, id)}
  <text x="${w - 30}" y="40" text-anchor="end" font-family="${MONO}" font-size="11.5" fill="${statusColor}">${esc(status)}</text>
  <text x="30" y="80" font-family="${SANS}" font-size="27" font-weight="700" letter-spacing="-.6" fill="${C.text}">${esc(title)}${title2 ? `<tspan fill="${C.dim}" font-weight="400" font-size="18"> ${esc(title2)}</tspan>` : ""}</text>
  <text x="30" y="110" font-family="${SANS}" font-size="14.5" fill="${C.dim}">${esc(tagline)}</text>
  <line x1="30" y1="128" x2="${w - 30}" y2="128" stroke="${C.line}"/>
  ${bl}
  ${chipRow(30, h - 46, chips)}`;
  write(file, svg(w, h, content, `${title} — ${tagline}`));
};

// ─── Merged upstream PR card ─────────────────────────────────────────────
export const mergedCard = ({ file, repo, number, mergedOn, commit, title, description, chips, additions, deletions, files }) => {
  const W = 1200, H = 210, id = "m", A = "#a371f7";
  const content = `${defs(id, A, C.cyan)}${baseStyle}
  ${frame(id, W, H)}
  <g transform="translate(30,26)">
    <rect width="92" height="24" rx="12" fill="${A}" fill-opacity=".16" stroke="${A}" stroke-opacity=".6"/>
    <text x="46" y="16.5" text-anchor="middle" font-family="${MONO}" font-size="11.5" fill="${A}" letter-spacing="1">⑂ MERGED</text>
  </g>
  <text x="138" y="43" font-family="${MONO}" font-size="12.5" fill="${C.dim}">${esc(repo)} · #${number} · merged ${esc(mergedOn)}</text>
  <text x="${W - 30}" y="43" text-anchor="end" font-family="${MONO}" font-size="12.5" fill="${C.faint}">commit <tspan fill="${C.cyan}">${esc(commit)}</tspan></text>
  <text x="30" y="92" font-family="${SANS}" font-size="25" font-weight="700" letter-spacing="-.5" fill="${C.text}">${esc(title)}</text>
  ${description.map((d, i) => `<text x="30" y="${124 + i * 22}" font-family="${SANS}" font-size="14.5" fill="${C.dim}">${esc(d)}</text>`).join("")}
  ${chipRow(30, H - 44, chips)}
  <text x="${W - 30}" y="${H - 28}" text-anchor="end" font-family="${MONO}" font-size="13"><tspan fill="${C.mongo}">+${additions}</tspan><tspan fill="${C.faint}"> / </tspan><tspan fill="${C.red}">−${deletions}</tspan><tspan fill="${C.faint}"> · ${files} files</tspan></text>`;
  write(file, svg(W, H, content, `Merged: ${repo} #${number}, ${title}`));
};

// ─── Footer waveform ─────────────────────────────────────────────────────
export const footer = (label, colors = [C.mongo, C.indigo, C.cyan], file = "footer.svg") => {
  const W = 1200, H = 120, n = 96, bw = 6, gap = (W - 80 - n * bw) / (n - 1);
  let bars = "";
  for (let i = 0; i < n; i++) {
    const t = i / (n - 1);
    const env = Math.sin(Math.PI * t) ** 1.4;
    const h = 6 + env * (20 + 34 * Math.abs(Math.sin(i * 1.7) * Math.cos(i * 0.43)));
    const x = 40 + i * (bw + gap);
    const dur = (1.2 + ((i * 37) % 11) / 10).toFixed(2);
    const del = (((i * 53) % 17) / 10).toFixed(2);
    bars += `<rect class="b" style="animation-duration:${dur}s;animation-delay:-${del}s" x="${x.toFixed(1)}" y="${(50 - h / 2).toFixed(1)}" width="${bw}" height="${h.toFixed(1)}" rx="3" fill="url(#f-g)"/>`;
  }
  const content = `
  <linearGradient id="f-g" x1="0" x2="1">${colors.map((c, i) => `<stop offset="${i / (colors.length - 1)}" stop-color="${c}"/>`).join("")}</linearGradient>
  <style>.b{transform-box:fill-box;transform-origin:center;animation:eq ease-in-out infinite alternate}@keyframes eq{from{transform:scaleY(.35)}to{transform:scaleY(1)}}@media (prefers-reduced-motion: reduce){.b{animation:none}}</style>
  ${bars}
  <text x="${W / 2}" y="108" text-anchor="middle" font-family="${MONO}" font-size="12" fill="${C.faint}" letter-spacing="3">${esc(label)}</text>`;
  write(file, svg(W, H, content, "Animated waveform footer"));
};

// ─── Treasury card: animated vault + capital + AWS credits ───────────────
export const usd = (n) => "$" + Math.round(n).toLocaleString("en-US");

export const treasury = ({ capital, awsGranted, awsUsed = null, awsSynced = null, awsSource = null, file = "capital.svg" }) => {
  const W = 1200, H = 180, id = "t";
  const dark = C.bg === THEMES.dark.bg;
  const aws = dark ? "#FF9900" : "#c25e00";
  const gold = dark ? "#f5c542" : "#b8860b";
  const live = awsUsed !== null;
  const remaining = live ? Math.max(0, awsGranted - awsUsed) : awsGranted;
  const frac = awsGranted > 0 ? remaining / awsGranted : 0;

  // Falling coins: the outer group drops into the slot, the inner group spins.
  const coin = (i) => `
  <g class="drop" style="animation-delay:${(i * 0.9).toFixed(1)}s">
    <g class="spin">
      <circle cx="104" cy="46" r="9" fill="${gold}" stroke="${C.title}" stroke-opacity=".35"/>
      <text x="104" y="50.5" text-anchor="middle" font-family="${SANS}" font-size="11" font-weight="800" fill="${C.bg}">$</text>
    </g>
  </g>`;
  const spark = (x, y, d) => `<path class="tw" style="animation-delay:${d}s" d="M${x} ${y - 5}L${x + 1.4} ${y - 1.4}L${x + 5} ${y}L${x + 1.4} ${y + 1.4}L${x} ${y + 5}L${x - 1.4} ${y + 1.4}L${x - 5} ${y}L${x - 1.4} ${y - 1.4}Z" fill="${gold}"/>`;
  const awsLine = live
    ? `${usd(awsUsed)} of ${usd(awsGranted)} used · live via cost explorer${awsSynced ? ` · ${awsSynced}` : ""}`
    : "compute credits · cloud infrastructure grant";

  const content = `${defs(id, C.mongo, C.cyan)}
  <defs>
    <linearGradient id="t-amt" gradientUnits="userSpaceOnUse" x1="236" y1="0" x2="700" y2="0">
      <stop offset="0" stop-color="${C.mongo}"/><stop offset=".42" stop-color="${C.cyan}"/>
      <stop offset=".5" stop-color="${C.title}"/><stop offset=".58" stop-color="${C.cyan}"/><stop offset="1" stop-color="${C.mongo}"/>
      <animateTransform attributeName="gradientTransform" type="translate" values="-520 0;520 0" dur="4.5s" repeatCount="indefinite"/>
    </linearGradient>
    <linearGradient id="t-pig" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${C.mongo}"/><stop offset="1" stop-color="${C.cyan}"/></linearGradient>
    <linearGradient id="t-bar" x1="0" x2="1"><stop offset="0" stop-color="${aws}"/><stop offset="1" stop-color="${gold}"/></linearGradient>
    <filter id="vault-glow" x="-60%" y="-60%" width="220%" height="220%"><feGaussianBlur stdDeviation="14"/></filter>
  </defs>
  <style>
    .drop { opacity: 0; animation: drop 2.7s cubic-bezier(.5,0,.75,0) infinite; }
    @keyframes drop { 0% { transform: translateY(-34px); opacity: 0 } 15% { opacity: 1 } 80% { transform: translateY(14px); opacity: 1 } 92%, 100% { transform: translateY(18px); opacity: 0 } }
    .spin { transform-box: fill-box; transform-origin: center; animation: spin .9s linear infinite; }
    @keyframes spin { 0%, 100% { transform: scaleX(1) } 50% { transform: scaleX(.25) } }
    .pig { transform-box: fill-box; transform-origin: 50% 100%; animation: bob .9s ease-in-out infinite; animation-delay: .1s; }
    @keyframes bob { 0%, 60%, 100% { transform: scale(1) } 75% { transform: scale(1.03, .97) } 88% { transform: scale(.99, 1.012) } }
    .aura { animation: aura .9s ease-in-out infinite; }
    @keyframes aura { 0%, 100% { opacity: .2 } 75% { opacity: .42 } }
    .tw { transform-box: fill-box; transform-origin: center; animation: tw 1.8s ease-in-out infinite; opacity: 0; }
    @keyframes tw { 0%, 100% { opacity: 0; transform: scale(.4) } 50% { opacity: 1; transform: scale(1) } }
    .pulse { transform-box: fill-box; transform-origin: center; animation: pulse 2.4s ease-out infinite; }
    @keyframes pulse { 0% { transform: scale(1); opacity: .9 } 100% { transform: scale(3.2); opacity: 0 } }
    .grow { transform-box: fill-box; transform-origin: left; animation: grow 1.4s .3s cubic-bezier(.2,.8,.2,1) both; }
    @keyframes grow { from { transform: scaleX(0) } to { transform: scaleX(1) } }
    @media (prefers-reduced-motion: reduce) { * { animation: none !important } .drop, .tw { opacity: 0 !important } }
  </style>
  ${frame(id, W, H, 16)}

  <circle class="aura" cx="104" cy="104" r="58" fill="${C.mongo}" fill-opacity="${dark ? 1 : 0.45}" filter="url(#vault-glow)"/>
  ${[0, 1, 2].map(coin).join("")}
  <g class="pig">
    <path d="M51 104 q-11 -3 -8 -12 q3 -7 9 -2" fill="none" stroke="url(#t-pig)" stroke-width="2.2" stroke-linecap="round"/>
    <path d="M124 76 L135 60 L142 80 Z" fill="${C.panel}" stroke="url(#t-pig)" stroke-width="2.2" stroke-linejoin="round"/>
    ${[70, 88, 116, 134].map((x) => `<rect x="${x}" y="128" width="11" height="17" rx="3.5" fill="${C.panel}" stroke="url(#t-pig)" stroke-width="2"/>`).join("")}
    <ellipse cx="103" cy="106" rx="54" ry="36" fill="${C.panel}" stroke="url(#t-pig)" stroke-width="2.4"/>
    <rect x="151" y="94" width="17" height="22" rx="7" fill="${C.panel}" stroke="url(#t-pig)" stroke-width="2.2"/>
    <circle cx="157.5" cy="102.5" r="1.8" fill="${C.cyan}"/><circle cx="157.5" cy="108.5" r="1.8" fill="${C.cyan}"/>
    <circle cx="139" cy="94" r="3" fill="${C.title}"/>
    <rect x="90" y="69" width="28" height="4.5" rx="2.2" fill="${C.title}" fill-opacity=".75"/>
    <path d="M70 118 q20 12 46 0" fill="none" stroke="${C.mongo}" stroke-opacity=".35" stroke-width="1.6" stroke-linecap="round"/>
  </g>
  ${spark(76, 52, 0.2)}${spark(140, 44, 1.1)}${spark(172, 76, 0.6)}

  <line x1="214" y1="30" x2="214" y2="${H - 30}" stroke="${C.line}"/>
  <circle cx="242" cy="40" r="4" fill="${C.mongo}"/><circle cx="242" cy="40" r="4" fill="none" stroke="${C.mongo}" class="pulse"/>
  <text x="256" y="44" font-family="${MONO}" font-size="11.5" letter-spacing="1.5" fill="${C.cyan}">LIVE TREASURY · CAPITAL &amp; GRANTS SECURED</text>
  <text x="236" y="104" font-family="${MONO}" font-size="50" font-weight="800" letter-spacing="-2" fill="url(#t-amt)">${esc(usd(capital))}<tspan font-size="20" font-weight="600" letter-spacing="1" fill="${C.dim}"> USD</tspan></text>
  <text x="238" y="134" font-family="${SANS}" font-size="14.5" fill="${C.dim}">venture grants · client payouts · ecosystem capital</text>
  <text x="238" y="160" font-family="${MONO}" font-size="12" fill="${C.faint}">Σ combined with compute credits <tspan fill="${C.text}">${esc(usd(capital + awsGranted))} USD</tspan></text>

  <rect x="740" y="24" width="430" height="132" rx="12" fill="${C.panel}" stroke="${C.line}"/>
  <rect x="740" y="38" width="3" height="104" rx="1.5" fill="${aws}"/>
  <text x="764" y="52" font-family="${MONO}" font-size="11.5" letter-spacing="1.5" fill="${aws}">${esc(awsSource ? `AWS CREDITS · VIA ${awsSource.toUpperCase()}` : "AWS CLOUD CREDITS")}</text>
  <circle cx="1100" cy="48" r="3.5" fill="${C.mongo}"/><circle cx="1100" cy="48" r="3.5" fill="none" stroke="${C.mongo}" class="pulse"/>
  <text x="1146" y="52" text-anchor="end" font-family="${MONO}" font-size="11" fill="${C.mongo}">ACTIVE</text>
  <text x="764" y="94" font-family="${SANS}" font-size="32" font-weight="800" letter-spacing="-.8" fill="${C.title}">${esc(usd(remaining))}<tspan font-size="15" font-weight="500" letter-spacing="0" fill="${C.dim}"> USD ${live ? "remaining" : "granted"}</tspan></text>
  <rect x="764" y="110" width="382" height="8" rx="4" fill="${C.line}"/>
  <g class="grow"><rect x="764" y="110" width="${Math.max(8, 382 * frac).toFixed(1)}" height="8" rx="4" fill="url(#t-bar)"/></g>
  <text x="764" y="140" font-family="${MONO}" font-size="11" fill="${C.dim}">${esc(awsLine)}</text>`;
  write(file, svg(W, H, content, `Treasury: ${usd(capital)} USD capital secured; ${usd(remaining)} USD AWS credits ${live ? "remaining" : "granted"}`));
};
