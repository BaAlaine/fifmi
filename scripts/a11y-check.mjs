// Runs axe-core (WCAG 2.2 A/AA rules) against pages of a running site.
// Usage: node scripts/a11y-check.mjs http://localhost:3000 / /other-page
import { createRequire } from "node:module";
import { readFileSync } from "node:fs";
const require = createRequire(import.meta.url);
const { chromium } = require("playwright");
const axeSource = readFileSync(require.resolve("axe-core/axe.min.js"), "utf8");

const [base = "http://localhost:3000", ...paths] = process.argv.slice(2);
const targets = paths.length ? paths : ["/"];
const browser = await chromium.launch();
let failed = 0;
for (const width of [390, 1440]) {
  const page = await browser.newPage({ viewport: { width, height: 900 } });
  for (const path of targets) {
    await page.goto(base + path, { waitUntil: "load" });
    await page.addScriptTag({ content: axeSource });
    const result = await page.evaluate(async () =>
      // eslint-disable-next-line no-undef
      axe.run(document, { runOnly: { type: "tag", values: ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa", "best-practice"] } }),
    );
    const serious = result.violations.filter((v) => ["serious", "critical"].includes(v.impact));
    console.log(`${path} @${width}px: ${result.violations.length} issues (${serious.length} serious or critical)`);
    for (const v of result.violations) console.log(`  [${v.impact}] ${v.id}: ${v.help} (${v.nodes.length}) ${v.nodes.slice(0, 2).map((n) => n.target.join(" ")).join(" | ")}`);
    failed += serious.length;
  }
  await page.close();
}
await browser.close();
process.exit(failed ? 1 : 0);
