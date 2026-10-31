// Content for the Kukzze profile cards. Components live in kit.mjs.
// Usage: node .github/scripts/build-assets.mjs [outDir=assets]   (light variants go to <outDir>/light)
import { C, setOut, setTheme, hero, header, programs, card, mergedCard, footer } from "./kit.mjs";

const build = () => {
const P = C.violet, G = C.mongo, D = C.dim, T = C.text, Y = C.cyan;

hero({
  name: "Daksh Rawat",
  subtitle: "founder · systems architect · compilers · distributed runtimes",
  host: "kukzze@obsidian — zsh — 120×32",
  uplink: "github.com/Kukzze",
  lines: [
    [["❯ ", G], ["whoami", T]],
    [["daksh rawat", T], [" · @kukzze · founder & systems architect · india", D]],
    [[" ", D]],
    [["❯ ", G], ["systemctl status ", T], ["--ventures --packages", D]],
    [["● ", G], ["excelmasters.in       ", T], ["active (running)   ", G], ["ast formula engine · sheetsense diagnostics", D]],
    [["● ", G], ["chic-builder.app      ", T], ["active (running)   ", G], ["1rm kinematics · progressive overload", D]],
    [["● ", P], ["mongo-next-sentinel   ", T], ["v1.1.0 released    ", P], ["pool leak detector · circuit breaker", D]],
    [["● ", P], ["formula-core          ", T], ["open core          ", P], ["zero-dep tokenizer → ast → evaluator", D]],
    [[" ", D]],
    [["❯ ", G], ["cat ", T], ["/etc/compiler.targets", D]],
    [["typescript", C.ts], [" → esm+cjs   ", D], ["java 17", C.java], [" → runelite   ", D], ["rust", C.rust], [" → biome   ", D], ["mdx", Y], [" → mdn", D]],
    [[" ", D]],
    [["❯ ", G], ["programs ", T], ["--enrolled", D]],
    [["nvidia-inception", C.nvidia], ["  ", D], ["mongodb-for-startups", C.mongo], ["  ", D], ["yc-startup-school", C.yc], ["  ", D], ["w3c-oss-cg", C.w3c], ["  ", D], ["lfx", C.lf]],
  ],
});

header("h-telemetry.svg", "00", "Live Telemetry", "regenerated every 6h from the github graphql api", C.cyan);
header("h-ventures.svg", "01", "Ventures", "products in production", C.mongo);
header("h-systems.svg", "02", "Live Production Systems", "telemetry · releases · ci health", C.cyan);
header("h-packages.svg", "03", "Open Core & Packages", "libraries i author & maintain", C.violet);
header("h-upstream.svg", "04", "Upstream Hall of Fame", "contributions to projects i depend on", C.yc);
header("h-stack.svg", "05", "Compiler Targets & Stack", "what i ship with", C.indigo);
header("h-matrix.svg", "06", "Contribution Matrix", "isometric · regenerated daily", C.mongo);

programs([
  ["NVIDIA Inception", C.nvidia], ["MongoDB for Startups", C.mongo], ["YC Startup School", C.yc],
  ["W3C Open Source CG", C.w3c], ["Linux Foundation · LFX", C.lf],
]);

card({
  file: "v-excelmasters.svg", accent: C.mongo, accent2: C.indigo, kicker: "VENTURE · 01", title: "Excel Masters",
  tagline: "Deterministic AI spreadsheet intelligence", status: "LIVE", statusColor: C.mongo,
  bullets: ["AST compiler does the math. The LLM never guesses.", "SheetSense™ formula diagnostics, in the browser", "Hands-on formula arenas instead of passive video"],
  chips: [["react", C.ts], ["typescript", C.ts], ["ast", C.violet], ["vite", C.violet]],
});
card({
  file: "v-chicbuilder.svg", accent: C.violet, accent2: C.mongo, kicker: "VENTURE · 02", title: "Chic Builder",
  tagline: "AI workouts & ranked fitness. Free PWA.", status: "LIVE", statusColor: C.mongo,
  bullets: ["AI workout generator & daily task tracker", "Progressive overload & multi-formula 1RM models", "Offline-first sync for uninterrupted gym sessions"],
  chips: [["next.js", C.text], ["mongodb", C.mongo], ["pwa", C.violet], ["kinematics", C.cyan]],
});
card({
  file: "p-sentinel.svg", w: 1200, h: 272, accent: C.mongo, accent2: C.indigo, kicker: "FLAGSHIP PACKAGE", title: "mongo-next-sentinel", title2: "v1.1.0",
  tagline: "MongoDB connection-pool leak detector for Next.js App Router, Server Actions & serverless runtimes",
  status: "CI PASSING", statusColor: C.mongo,
  bullets: ["Microsecond CMAP event tracking per route handler and server action", "Self-healing circuit breaker: CLOSED → OPEN → HALF-OPEN", "Prometheus scrape endpoint for Grafana · dual ESM + CJS builds · CodeQL scanned"],
  chips: [["typescript", C.ts], ["mongodb 6/7", C.mongo], ["next.js 15", C.text], ["prometheus", C.yc], ["bun test", C.rust]],
});
card({
  file: "p-formulacore.svg", accent: C.violet, kicker: "OPEN CORE · EXCEL MASTERS", title: "formula-core",
  tagline: "Zero-dependency spreadsheet formula engine", status: "OPEN CORE", statusColor: C.violet,
  bullets: ["Tokenizer → AST with operator-precedence parsing", "Math, logical, lookup, text & array evaluation", "Deterministic output, so no hallucinated math"],
  chips: [["typescript", C.ts], ["lexer", C.violet], ["ast", C.cyan]],
});
card({
  file: "p-chiccore.svg", accent: C.cyan, accent2: C.violet, kicker: "OPEN CORE · CHIC BUILDER", title: "chic-core",
  tagline: "Biomechanics calculation engine", status: "OPEN CORE", statusColor: C.cyan,
  bullets: ["Rep velocity-loss tracking", "Multi-formula 1RM estimation models", "Offline PWA sync state machine"],
  chips: [["typescript", C.ts], ["kinematics", C.cyan], ["state machine", C.violet]],
});
card({
  file: "p-astrarium.svg", accent: C.java, accent2: C.violet, kicker: "RUNELITE PLUGIN", title: "Astrarium",
  tagline: "Player progression astrolabe & readiness auditor", status: "PLUGIN HUB", statusColor: C.java,
  bullets: ["Combat calculators & readiness checks", "Achievement diary tracking", "Gear audits against your goals"],
  chips: [["java 17", C.java], ["runelite", C.yc], ["gradle", C.dim]],
});
card({
  file: "p-grotesque.svg", accent: C.yc, accent2: C.cyan, kicker: "RUNELITE PLUGIN", title: "Grotesque Solar Blasts",
  tagline: "Visual overhaul for Grotesque Guardians", status: "PLUGIN HUB", statusColor: C.java,
  bullets: ["Replaces Dusk's lightning with solar beam blasts", "Pure client-side rendering hooks", "Zero gameplay impact, all style"],
  chips: [["java 17", C.java], ["runelite", C.yc], ["graphics", C.cyan]],
});

mergedCard({
  file: "hof-paper.svg", repo: "PaperMC/Paper", number: 14427, mergedOn: "2026-10-27", commit: "9d95051",
  title: "Fix JavadocAlignParameterDescriptionCheck with inline tags",
  description: [
    "The Checkstyle AST rule misaligned @param descriptions whenever an inline {@link} tag was present.",
    "Merged into the build tooling of the most widely used high-performance Minecraft server.",
  ],
  chips: [["java", C.java], ["checkstyle", C.violet], ["ast", C.cyan]],
  additions: 28, deletions: 0, files: 2,
});

mergedCard({
  file: "hof-paper-2.svg", repo: "PaperMC/Paper", number: 14430, mergedOn: "2026-10-30", commit: "174574d",
  title: "Fix RedundantNullabilityCheck for nested types",
  description: [
    "Redundant @NullMarked on nested classes, records and enums went unflagged when an enclosing type was already marked.",
    "The check now walks enclosing type declarations, backed by new unit tests and test data.",
  ],
  chips: [["java", C.java], ["checkstyle", C.violet], ["jspecify", C.cyan]],
  additions: 65, deletions: 2, files: 3,
});

footer("KUKZZE · END OF TRANSMISSION");
};

const root = process.argv[2] ?? "assets";
for (const [theme, dir] of [["dark", root], ["light", `${root}/light`]]) {
  setTheme(theme);
  setOut(dir);
  build();
}
console.log("assets written (dark + light)");
