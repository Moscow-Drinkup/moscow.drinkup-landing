// Полный JSON-отчёт для анализа: node scripts/lighthouse-json.mjs <url> [desktop|mobile] <out.json>
import lighthouse from 'lighthouse';
import {launch} from 'chrome-launcher';
import {writeFileSync} from 'node:fs';

const CHROME_PATH =
  process.env.CHROME_PATH ||
  '/home/pasha-agent/.cache/ms-playwright/chromium-1208/chrome-linux64/chrome';

const url = process.argv[2];
const preset = process.argv[3] || 'desktop';
const out = process.argv[4] || '/tmp/lighthouse.json';

const flags = {
  output: 'json',
  logLevel: 'error',
  chromeFlags: ['--headless=new', '--no-sandbox', '--disable-gpu', '--disable-dev-shm-usage', '--no-proxy-server'],
  preset,
};

const chrome = await launch({chromePath: CHROME_PATH, chromeFlags: flags.chromeFlags});
try {
  flags.port = chrome.port;
  const result = await lighthouse(url, flags, null);
  writeFileSync(out, JSON.stringify(result.lhr, null, 1));
  console.log('saved', out);
} finally {
  await chrome.kill();
}
