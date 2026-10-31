<a href="https://github.com/Kukzze">
  <picture>
    <source media="(prefers-color-scheme: light)" srcset="assets/light/hero.svg" />
    <img src="assets/hero.svg" width="100%" alt="Daksh Rawat — founder and systems architect. Terminal HUD showing ventures, packages and compiler targets." />
  </picture>
</a>

<picture>
  <source media="(prefers-color-scheme: light)" srcset="assets/light/capital.svg" />
  <img src="assets/capital.svg" width="100%" alt="Live treasury: capital and grants secured across ventures, plus AWS cloud credits" />
</picture>

<picture>
  <source media="(prefers-color-scheme: light)" srcset="assets/light/programs.svg" />
  <img src="assets/programs.svg" width="100%" alt="NVIDIA Inception · MongoDB for Startups · YC Startup School · W3C Open Source CG · Linux Foundation LFX" />
</picture>

<p align="center">
  <a href="https://www.excelmasters.in/"><img src="https://img.shields.io/badge/excelmasters.in-0c101d?style=flat-square&logo=googlechrome&logoColor=00ED64" alt="Excel Masters" /></a>
  <a href="https://chic-builder.vercel.app/"><img src="https://img.shields.io/badge/chic--builder-0c101d?style=flat-square&logo=vercel&logoColor=8b93ff" alt="Chic Builder" /></a>
  <a href="https://linkedin.com/in/kukzze"><img src="https://img.shields.io/badge/linkedin-0c101d?style=flat-square&logo=linkedin&logoColor=0A66C2" alt="LinkedIn" /></a>
  <a href="https://discord.gg/7vaHhewmtJ"><img src="https://img.shields.io/badge/discord-0c101d?style=flat-square&logo=discord&logoColor=5865F2" alt="Discord" /></a>
  <a href="https://youtube.com/@kukzze"><img src="https://img.shields.io/badge/youtube-0c101d?style=flat-square&logo=youtube&logoColor=FF0000" alt="YouTube" /></a>
  <a href="https://instagram.com/kukzze"><img src="https://img.shields.io/badge/instagram-0c101d?style=flat-square&logo=instagram&logoColor=E4405F" alt="Instagram" /></a>
  <a href="mailto:kukzze@excelmasters.in"><img src="https://img.shields.io/badge/kukzze@excelmasters.in-0c101d?style=flat-square&logo=maildotru&logoColor=00e5ff" alt="Email" /></a>
</p>

<table align="center">
  <tr>
    <td align="center" width="340">
      <a href="https://www.nvidia.com/en-us/startups/"><img src="https://raw.githubusercontent.com/Kukzze/Kukzze/main/assets/nvidia-inception-badge.svg" height="52" alt="Official NVIDIA Inception Member" /></a><br/>
      <sub><b>NVIDIA Inception</b> · AI & accelerated computing</sub>
    </td>
    <td align="center" width="340">
      <a href="https://www.mongodb.com/startups"><img src="https://raw.githubusercontent.com/Kukzze/Kukzze/main/assets/mongodb-startups-badge.svg" height="52" alt="Official MongoDB for Startups Cohort" /></a><br/>
      <sub><b>MongoDB for Startups</b> · Atlas cohort</sub>
    </td>
  </tr>
</table>

<br/>

<picture>
  <source media="(prefers-color-scheme: light)" srcset="assets/light/h-telemetry.svg" />
  <img src="assets/h-telemetry.svg" width="100%" alt="00 — Live Telemetry" />
</picture>

<picture>
  <source media="(prefers-color-scheme: light)" srcset="assets/light/telemetry.svg" />
  <img src="assets/telemetry.svg" width="100%" alt="Live GitHub telemetry: contributions, streak, commits, upstream PRs, language mix, 90-day activity and latest pull requests" />
</picture>

<picture>
  <source media="(prefers-color-scheme: light)" srcset="assets/light/shipping.svg" />
  <img src="assets/shipping.svg" width="100%" alt="Shipping log: latest commits and releases across public repos" />
</picture>

<picture>
  <source media="(prefers-color-scheme: light)" srcset="assets/light/h-ventures.svg" />
  <img src="assets/h-ventures.svg" width="100%" alt="01 — Ventures" />
</picture>

<p align="center">
  <a href="https://www.excelmasters.in/">
  <picture>
    <source media="(prefers-color-scheme: light)" srcset="assets/light/v-excelmasters.svg" />
    <img src="assets/v-excelmasters.svg" width="49.5%" alt="Excel Masters — deterministic AI spreadsheet intelligence" />
  </picture>
  </a>
  <a href="https://chic-builder.vercel.app/">
  <picture>
    <source media="(prefers-color-scheme: light)" srcset="assets/light/v-chicbuilder.svg" />
    <img src="assets/v-chicbuilder.svg" width="49.5%" alt="Chic Builder — AI workouts and ranked fitness PWA" />
  </picture>
  </a>
</p>

<details>
<summary><b>⟢ Architecture: how Excel Masters keeps AI math deterministic</b> <sub>(click to expand)</sub></summary>
<br/>

```mermaid
%%{init: {'theme':'base','themeVariables':{'background':'#05070e','primaryColor':'#0c101d','primaryTextColor':'#e6e9f5','primaryBorderColor':'#5e6ad2','lineColor':'#00e5ff','secondaryColor':'#10152a','tertiaryColor':'#05070e'}}}%%
flowchart LR
    U([User question]) --> L[LLM<br/>intent + explanation]
    L -->|formula, not answer| T
    subgraph FC [formula-core · zero-dep]
        T[Tokenizer] --> P[Parser<br/>operator precedence] --> A[(AST)] --> E[Evaluator]
    end
    G[(In-browser grid)] -- cell refs --> E
    E -- exact result --> R([Answer on the grid])
    A --> S[SheetSense™<br/>circular refs · lint] --> R
```

</details>

<picture>
  <source media="(prefers-color-scheme: light)" srcset="assets/light/h-systems.svg" />
  <img src="assets/h-systems.svg" width="100%" alt="02 — Live Production Systems" />
</picture>

<table width="100%">
  <thead>
    <tr><th align="left">System</th><th align="left">Class</th><th align="left">Uplink</th><th align="left">Release</th><th align="left">Pipeline</th></tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="https://www.excelmasters.in/"><b>excelmasters.in</b></a></td>
      <td><code>web platform</code></td>
      <td><img src="https://img.shields.io/website?url=https%3A%2F%2Fwww.excelmasters.in&style=flat-square&label=%E2%97%8F&labelColor=0c101d&up_message=online&up_color=00ED64&down_message=offline&down_color=f85149" alt="uptime" /></td>
      <td><img src="https://img.shields.io/badge/continuous-0c101d?style=flat-square" alt="continuous" /></td>
      <td><img src="https://img.shields.io/badge/vercel-edge-0c101d?style=flat-square&logo=vercel&labelColor=0c101d&color=5e6ad2" alt="vercel" /></td>
    </tr>
    <tr>
      <td><a href="https://chic-builder.vercel.app/"><b>chic-builder</b></a></td>
      <td><code>pwa</code></td>
      <td><img src="https://img.shields.io/website?url=https%3A%2F%2Fchic-builder.vercel.app&style=flat-square&label=%E2%97%8F&labelColor=0c101d&up_message=online&up_color=00ED64&down_message=offline&down_color=f85149" alt="uptime" /></td>
      <td><img src="https://img.shields.io/badge/continuous-0c101d?style=flat-square" alt="continuous" /></td>
      <td><img src="https://img.shields.io/badge/vercel-edge-0c101d?style=flat-square&logo=vercel&labelColor=0c101d&color=5e6ad2" alt="vercel" /></td>
    </tr>
    <tr>
      <td><a href="https://github.com/Kukzze/mongo-next-sentinel"><b>mongo-next-sentinel</b></a></td>
      <td><code>library</code></td>
      <td><img src="https://img.shields.io/github/last-commit/Kukzze/mongo-next-sentinel?style=flat-square&label=%E2%97%8F&labelColor=0c101d&color=8b93ff" alt="last commit" /></td>
      <td><a href="https://github.com/Kukzze/mongo-next-sentinel/releases"><img src="https://img.shields.io/github/v/release/Kukzze/mongo-next-sentinel?style=flat-square&label=release&labelColor=0c101d&color=00ED64" alt="release" /></a></td>
      <td><a href="https://github.com/Kukzze/mongo-next-sentinel/actions"><img src="https://img.shields.io/github/actions/workflow/status/Kukzze/mongo-next-sentinel/ci.yml?branch=main&style=flat-square&label=ci&labelColor=0c101d" alt="CI" /></a> <img src="https://img.shields.io/github/actions/workflow/status/Kukzze/mongo-next-sentinel/codeql.yml?branch=main&style=flat-square&label=codeql&labelColor=0c101d" alt="CodeQL" /></td>
    </tr>
    <tr>
      <td><a href="https://github.com/ExcelMasters-in/formula-core"><b>formula-core</b></a></td>
      <td><code>library</code></td>
      <td><img src="https://img.shields.io/github/last-commit/ExcelMasters-in/formula-core?style=flat-square&label=%E2%97%8F&labelColor=0c101d&color=8b93ff" alt="last commit" /></td>
      <td><img src="https://img.shields.io/badge/open%20core-0c101d?style=flat-square" alt="open core" /></td>
      <td><img src="https://img.shields.io/github/languages/top/ExcelMasters-in/formula-core?style=flat-square&labelColor=0c101d&color=3178c6" alt="language" /></td>
    </tr>
    <tr>
      <td><a href="https://github.com/ChicBuilder/chic-core"><b>chic-core</b></a></td>
      <td><code>library</code></td>
      <td><img src="https://img.shields.io/github/last-commit/ChicBuilder/chic-core?style=flat-square&label=%E2%97%8F&labelColor=0c101d&color=8b93ff" alt="last commit" /></td>
      <td><img src="https://img.shields.io/badge/open%20core-0c101d?style=flat-square" alt="open core" /></td>
      <td><img src="https://img.shields.io/github/languages/top/ChicBuilder/chic-core?style=flat-square&labelColor=0c101d&color=3178c6" alt="language" /></td>
    </tr>
    <tr>
      <td><a href="https://github.com/Kukzze/astrarium"><b>astrarium</b></a></td>
      <td><code>runelite plugin</code></td>
      <td><img src="https://img.shields.io/github/last-commit/Kukzze/astrarium?style=flat-square&label=%E2%97%8F&labelColor=0c101d&color=8b93ff" alt="last commit" /></td>
      <td><a href="https://github.com/runelite/plugin-hub/pull/19521"><img src="https://img.shields.io/github/pulls/detail/state/runelite/plugin-hub/19521?style=flat-square&label=plugin%20hub&labelColor=0c101d" alt="plugin hub submission" /></a></td>
      <td><img src="https://img.shields.io/badge/java-17-0c101d?style=flat-square&labelColor=0c101d&color=f89820" alt="java 17" /></td>
    </tr>
    <tr>
      <td><a href="https://github.com/Kukzze/grotesque-solar-blasts"><b>grotesque-solar-blasts</b></a></td>
      <td><code>runelite plugin</code></td>
      <td><img src="https://img.shields.io/github/last-commit/Kukzze/grotesque-solar-blasts?style=flat-square&label=%E2%97%8F&labelColor=0c101d&color=8b93ff" alt="last commit" /></td>
      <td><a href="https://github.com/runelite/plugin-hub/pull/19468"><img src="https://img.shields.io/github/pulls/detail/state/runelite/plugin-hub/19468?style=flat-square&label=plugin%20hub&labelColor=0c101d" alt="plugin hub submission" /></a></td>
      <td><img src="https://img.shields.io/badge/java-17-0c101d?style=flat-square&labelColor=0c101d&color=f89820" alt="java 17" /></td>
    </tr>
  </tbody>
</table>

<picture>
  <source media="(prefers-color-scheme: light)" srcset="assets/light/h-packages.svg" />
  <img src="assets/h-packages.svg" width="100%" alt="03 — Open Core & Packages" />
</picture>

<a href="https://github.com/Kukzze/mongo-next-sentinel">
<picture>
  <source media="(prefers-color-scheme: light)" srcset="assets/light/p-sentinel.svg" />
  <img src="assets/p-sentinel.svg" width="100%" alt="mongo-next-sentinel v1.1.0 — MongoDB connection-pool leak detector for Next.js" />
</picture>
</a>

<details>
<summary><b>⟢ Architecture: mongo-next-sentinel event pipeline & circuit breaker</b> <sub>(click to expand)</sub></summary>
<br/>

```mermaid
%%{init: {'theme':'base','themeVariables':{'background':'#05070e','primaryColor':'#0c101d','primaryTextColor':'#e6e9f5','primaryBorderColor':'#00ED64','lineColor':'#5e6ad2','secondaryColor':'#10152a','tertiaryColor':'#05070e'}}}%%
flowchart LR
    M[(MongoClient pool)] -- CMAP events --> PE[poolEvents<br/>checkOut · checkIn · created · closed]
    PE --> ST[stats + snapshot<br/>leak detection]
    ST --> PR["/metrics<br/>Prometheus"] --> GF([Grafana])
    ST --> H[health probe]
    SC[safeClient] --> CB{circuit breaker} --> M
```

```mermaid
%%{init: {'theme':'base','themeVariables':{'background':'#05070e','primaryColor':'#0c101d','primaryTextColor':'#e6e9f5','primaryBorderColor':'#00ED64','lineColor':'#5e6ad2'}}}%%
stateDiagram-v2
    direction LR
    [*] --> CLOSED
    CLOSED --> OPEN: failures ≥ threshold (5)
    OPEN --> HALF_OPEN: recovery timeout (30s)
    HALF_OPEN --> CLOSED: probe succeeds
    HALF_OPEN --> OPEN: probe fails
```

</details>

<p align="center">
  <a href="https://github.com/ExcelMasters-in/formula-core">
  <picture>
    <source media="(prefers-color-scheme: light)" srcset="assets/light/p-formulacore.svg" />
    <img src="assets/p-formulacore.svg" width="49.5%" alt="formula-core — zero-dependency spreadsheet formula engine" />
  </picture>
  </a>
  <a href="https://github.com/ChicBuilder/chic-core">
  <picture>
    <source media="(prefers-color-scheme: light)" srcset="assets/light/p-chiccore.svg" />
    <img src="assets/p-chiccore.svg" width="49.5%" alt="chic-core — biomechanics calculation engine" />
  </picture>
  </a>
  <a href="https://github.com/Kukzze/astrarium">
  <picture>
    <source media="(prefers-color-scheme: light)" srcset="assets/light/p-astrarium.svg" />
    <img src="assets/p-astrarium.svg" width="49.5%" alt="Astrarium — RuneLite progression and readiness plugin" />
  </picture>
  </a>
  <a href="https://github.com/Kukzze/grotesque-solar-blasts">
  <picture>
    <source media="(prefers-color-scheme: light)" srcset="assets/light/p-grotesque.svg" />
    <img src="assets/p-grotesque.svg" width="49.5%" alt="Grotesque Solar Blasts — RuneLite visual plugin" />
  </picture>
  </a>
</p>

<picture>
  <source media="(prefers-color-scheme: light)" srcset="assets/light/h-upstream.svg" />
  <img src="assets/h-upstream.svg" width="100%" alt="04 — Upstream Hall of Fame" />
</picture>

<a href="https://github.com/PaperMC/Paper/pull/14427">
<picture>
  <source media="(prefers-color-scheme: light)" srcset="assets/light/hof-paper.svg" />
  <img src="assets/hof-paper.svg" width="100%" alt="Merged: PaperMC/Paper #14427 — Fix JavadocAlignParameterDescriptionCheck with inline tags" />
</picture>
</a>

<a href="https://github.com/PaperMC/Paper/pull/14430">
<picture>
  <source media="(prefers-color-scheme: light)" srcset="assets/light/hof-paper-2.svg" />
  <img src="assets/hof-paper-2.svg" width="100%" alt="Merged: PaperMC/Paper #14430 — Fix RedundantNullabilityCheck for nested types" />
</picture>
</a>

<table width="100%">
  <thead>
    <tr><th></th><th align="left">Project</th><th align="left">Contribution</th><th align="left">Impact</th><th align="left">Status</th></tr>
  </thead>
  <tbody>
    <tr>
      <td><img src="https://avatars.githubusercontent.com/u/140182603?s=64" width="28" alt="Biome" /></td>
      <td><a href="https://github.com/biomejs/biome/pull/12704"><b>biomejs/biome</b> #12704</a></td>
      <td>Support npm's <code>SEE LICENSE IN &lt;file&gt;</code> in <code>noUntrustedLicenses</code></td>
      <td>Rust lint rule, UTF-8 boundary-safe parsing</td>
      <td><img src="https://img.shields.io/github/pulls/detail/state/biomejs/biome/12704?style=flat-square&label=&labelColor=0c101d" alt="status" /></td>
    </tr>
    <tr>
      <td><img src="https://avatars.githubusercontent.com/u/26492485?s=64" width="28" alt="discord.js" /></td>
      <td><a href="https://github.com/discordjs/discord.js/pull/11667"><b>discordjs/discord.js</b> #11667</a></td>
      <td>Recover from invalid transition when <code>lastTransitionId</code> is 0</td>
      <td>DAVE MLS end-to-end-encrypted voice session recovery</td>
      <td><img src="https://img.shields.io/github/pulls/detail/state/discordjs/discord.js/11667?style=flat-square&label=&labelColor=0c101d" alt="status" /></td>
    </tr>
    <tr>
      <td><img src="https://avatars.githubusercontent.com/u/7565578?s=64" width="28" alt="MDN" /></td>
      <td><a href="https://github.com/mdn/content/pull/46305"><b>mdn/content</b> #46305</a></td>
      <td>Document origin-keyed agent clusters by default</td>
      <td>WHATWG HTML process-isolation semantics and the <code>?0</code> opt-out</td>
      <td><img src="https://img.shields.io/github/pulls/detail/state/mdn/content/46305?style=flat-square&label=&labelColor=0c101d" alt="status" /></td>
    </tr>
    <tr>
      <td><img src="https://avatars.githubusercontent.com/u/3637556?s=64" width="28" alt="DefinitelyTyped" /></td>
      <td><a href="https://github.com/DefinitelyTyped/DefinitelyTyped/pull/75855"><b>DefinitelyTyped</b> #75855</a></td>
      <td><code>jqueryui</code>: <code>JQuery.TriggeredEvent</code> for widget callbacks</td>
      <td>Full contextual inference on widget event handlers</td>
      <td><img src="https://img.shields.io/github/pulls/detail/state/DefinitelyTyped/DefinitelyTyped/75855?style=flat-square&label=&labelColor=0c101d" alt="status" /></td>
    </tr>
    <tr>
      <td><img src="https://avatars.githubusercontent.com/u/3637556?s=64" width="28" alt="DefinitelyTyped" /></td>
      <td><a href="https://github.com/DefinitelyTyped/DefinitelyTyped/pull/75886"><b>DefinitelyTyped</b> #75886</a></td>
      <td><code>wordpress__block-editor</code>: allow <code>false</code> for <code>renderAppender</code></td>
      <td>Matches Gutenberg runtime for <code>InnerBlocks</code> and <code>BlockList</code></td>
      <td><img src="https://img.shields.io/github/pulls/detail/state/DefinitelyTyped/DefinitelyTyped/75886?style=flat-square&label=&labelColor=0c101d" alt="status" /></td>
    </tr>
    <tr>
      <td><img src="https://avatars.githubusercontent.com/u/103134607?s=64" width="28" alt="JDA" /></td>
      <td><a href="https://github.com/discord-jda/JDA/pull/3162"><b>discord-jda/JDA</b> #3162</a></td>
      <td>Add <code>getChannel()</code> to <code>MessageCreateAction</code></td>
      <td>Java Discord API ergonomics</td>
      <td><img src="https://img.shields.io/github/pulls/detail/state/discord-jda/JDA/3162?style=flat-square&label=&labelColor=0c101d" alt="status" /></td>
    </tr>
    <tr>
      <td><img src="https://avatars.githubusercontent.com/u/13814776?s=64" width="28" alt="RuneLite" /></td>
      <td><a href="https://github.com/runelite/runelite/pull/20613"><b>runelite/runelite</b> #20613</a></td>
      <td>Skill calculator: Blood Moon Rises methods</td>
      <td>Open-source OSRS client used by millions of players</td>
      <td><img src="https://img.shields.io/github/pulls/detail/state/runelite/runelite/20613?style=flat-square&label=&labelColor=0c101d" alt="status" /></td>
    </tr>
    <tr>
      <td><img src="https://avatars.githubusercontent.com/u/13814776?s=64" width="28" alt="RuneLite" /></td>
      <td><a href="https://github.com/runelite/runelite/pull/20628"><b>runelite/runelite</b> #20628</a></td>
      <td>Clues: shorten Falo flail requirement text</td>
      <td>Requirement now fits the clue infobox</td>
      <td><img src="https://img.shields.io/github/pulls/detail/state/runelite/runelite/20628?style=flat-square&label=&labelColor=0c101d" alt="status" /></td>
    </tr>
    <tr>
      <td><img src="https://avatars.githubusercontent.com/u/29153234?s=64" width="28" alt="Quest Helper" /></td>
      <td><a href="https://github.com/Zoinkwiz/quest-helper/pull/2875"><b>Zoinkwiz/quest-helper</b> #2875</a></td>
      <td>Karamja Hard: accept any crossbow for the grapple shortcut</td>
      <td>Fixes a false "missing item" for players with other crossbows</td>
      <td><img src="https://img.shields.io/github/pulls/detail/state/Zoinkwiz/quest-helper/2875?style=flat-square&label=&labelColor=0c101d" alt="status" /></td>
    </tr>
  </tbody>
</table>

<picture>
  <source media="(prefers-color-scheme: light)" srcset="assets/light/h-stack.svg" />
  <img src="assets/h-stack.svg" width="100%" alt="05 — Compiler Targets & Stack" />
</picture>

<p align="center">
  <picture>
    <source media="(prefers-color-scheme: light)" srcset="https://skillicons.dev/icons?i=ts,js,rust,java,html,css,bash&theme=light" />
    <img src="https://skillicons.dev/icons?i=ts,js,rust,java,html,css,bash&theme=dark" alt="TypeScript, JavaScript, Rust, Java, HTML, CSS, Bash" />
  </picture>
  <br/><br/>
  <picture>
    <source media="(prefers-color-scheme: light)" srcset="https://skillicons.dev/icons?i=nextjs,react,nodejs,bun,tailwind,vite,mongodb,vercel,aws,githubactions&theme=light" />
    <img src="https://skillicons.dev/icons?i=nextjs,react,nodejs,bun,tailwind,vite,mongodb,vercel,aws,githubactions&theme=dark" alt="Next.js, React, Node.js, Bun, Tailwind, Vite, MongoDB, Vercel, AWS, GitHub Actions" />
  </picture>
</p>

<picture>
  <source media="(prefers-color-scheme: light)" srcset="assets/light/h-matrix.svg" />
  <img src="assets/h-matrix.svg" width="100%" alt="06 — Contribution Matrix" />
</picture>

<picture>
  <source media="(prefers-color-scheme: light)" srcset="profile-3d-contrib/profile-obsidian-light.svg" />
  <img src="profile-3d-contrib/profile-obsidian-dark.svg" width="100%" alt="Isometric 3D contribution matrix" />
</picture>

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/Kukzze/Kukzze/output/pacman-contribution-graph-dark.svg" />
  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/Kukzze/Kukzze/output/pacman-contribution-graph.svg" />
  <img alt="Pac-Man eating the contribution graph" src="https://raw.githubusercontent.com/Kukzze/Kukzze/output/pacman-contribution-graph.svg" width="100%" />
</picture>

<picture>
  <source media="(prefers-color-scheme: light)" srcset="assets/light/footer.svg" />
  <img src="assets/footer.svg" width="100%" alt="" />
</picture>
