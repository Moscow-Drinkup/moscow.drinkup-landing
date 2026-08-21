// Матричный Lighthouse-аудит на живом сайте: node scripts/lighthouse-matrix.mjs <baseUrl>
// Использует уже запущенный Chrome (порт 9222), чтобы избежать холодного старта.
import lighthouse from 'lighthouse';
import {writeFileSync} from 'node:fs';

const base = process.argv[2] || 'http://drinkup.moscow';
const PORT = 9222;
const ROUTES = ['/', '#/events', '#/venues', '#/partners', '#/events/6699'];
const PRESETS = ['desktop', 'mobile'];

const results = [];
for (const preset of PRESETS) {
  for (const route of ROUTES) {
    const url = `${base}/${route}`;
    const flags = {
      output: 'json',
      logLevel: 'error',
      onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
      preset,
      port: PORT,
    };
    try {
      const {lhr} = await lighthouse(url, flags, null);
      const m = lhr.audits['metrics']?.details?.items?.[0] ?? {};
      const row = {
        url: url.replace(base, ''),
        preset,
        perf: Math.round((lhr.categories.performance?.score ?? 0) * 100),
        a11y: Math.round((lhr.categories.accessibility?.score ?? 0) * 100),
        bp: Math.round((lhr.categories['best-practices']?.score ?? 0) * 100),
        seo: Math.round((lhr.categories.seo?.score ?? 0) * 100),
        fcp: Math.round(m.observedFirstContentfulPaint ?? -1),
        lcp: Math.round(m.observedLargestContentfulPaint ?? -1),
        ttfb: Math.round(m.timeToFirstByte ?? -1),
        cls: (m.cumulativeLayoutShift ?? -1).toFixed(3),
        tbt: Math.round(m.totalBlockingTime ?? -1),
      };
      results.push(row);
      console.log(JSON.stringify(row));
    } catch (e) {
      console.log(JSON.stringify({url: route, preset, error: String(e.message ?? e)}));
    }
  }
}
writeFileSync('/tmp/lighthouse-matrix.json', JSON.stringify(results, null, 1));
console.log('matrix saved to /tmp/lighthouse-matrix.json');
