// Локальный Lighthouse-аудит: node scripts/lighthouse-audit.mjs <url> [desktop|mobile]
import lighthouse from 'lighthouse';
import {launch} from 'chrome-launcher';

const CHROME_PATH =
  process.env.CHROME_PATH ||
  '/home/pasha-agent/.cache/ms-playwright/chromium-1208/chrome-linux64/chrome';

const url = process.argv[2];
const preset = process.argv[3] || 'desktop';
if (!url) {
  console.error('usage: node scripts/lighthouse-audit.mjs <url> [desktop|mobile]');
  process.exit(1);
}

const flags = {
  output: 'json',
  logLevel: 'error',
  onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
  chromeFlags: ['--headless=new', '--no-sandbox', '--disable-gpu', '--disable-dev-shm-usage', '--no-proxy-server'],
  preset,
};

const chrome = await launch({chromePath: CHROME_PATH, chromeFlags: flags.chromeFlags});
try {
  flags.port = chrome.port;
  const result = await lighthouse(url, flags, null);
  const lhr = result.lhr;
  const cats = lhr.categories;
  const perf = (cat) => Math.round(cat?.score * 100 ?? -1);
  console.log(`\n=== ${url} [${preset}] ===`);
  console.log(
    `performance=${perf(cats.performance)} accessibility=${perf(cats.accessibility)} best-practices=${perf(cats['best-practices'])} seo=${perf(cats.seo)}`,
  );
  // ключевые метрики
  const audits = lhr.audits;
  for (const id of ['first-contentful-paint', 'largest-contentful-paint', 'cumulative-layout-shift', 'total-blocking-time', 'interactive', 'server-response-time', 'speed-index']) {
    const a = audits[id];
    if (a) console.log(`  ${id}: ${a.displayValue ?? a.score}`);
  }
  // проваленные аудиты best-practices/accessibility/seo
  const failed = [];
  for (const [id, a] of Object.entries(audits)) {
    if (a.score !== null && a.score < 1 && a.scoreDisplayMode !== 'notApplicable' && a.scoreDisplayMode !== 'informative') {
      failed.push(`${id} [${a.score}] ${a.title}`);
    }
  }
  console.log(`  FAILED (${failed.length}):`);
  failed.slice(0, 40).forEach((f) => console.log('   -', f));
} finally {
  await chrome.kill();
}
