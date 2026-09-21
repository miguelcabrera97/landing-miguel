import puppeteer from 'puppeteer-core';

const chrome = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const browser = await puppeteer.launch({ executablePath: chrome, headless: 'new', args: ['--no-sandbox'] });
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 1000, deviceScaleFactor: 1 });

const reqFailed = [];
page.on('requestfailed', r => reqFailed.push(r.url()));
page.on('response', r => { if (r.status() >= 400) reqFailed.push(`${r.status()} ${r.url()}`); });

await page.goto('http://localhost:4173/', { waitUntil: 'networkidle0', timeout: 30000 });

await page.screenshot({ path: 'screen-verif-full.png', fullPage: true });
await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));

// Hero (above the fold)
await page.screenshot({ path: 'screen-hero.png' });

// Check for layout overflow / missing fonts
const data = await page.evaluate(() => {
  const body = document.body;
  return {
    scrollWidth: body.scrollWidth,
    innerWidth: window.innerWidth,
    fonts: {
      geist: document.fonts.check('16px Geist'),
      serif: document.fonts.check('16px "Instrument Serif"'),
      mono: document.fonts.check('16px "Geist Mono"'),
    },
    svgCount: document.querySelectorAll('svg').length,
    revealHidden: document.querySelectorAll('.reveal:not(.is-in)').length,
    h1: document.querySelector('h1')?.innerText,
  };
});

console.log(JSON.stringify({ reqFailed, ...data }, null, 2));
await browser.close();