const random = require('random-name');
const puppeteer = require('puppeteer');

(async() => {
  const browser = await puppeteer.launch({
    // Launch chromium using a proxy server on port 9876.
    // More on proxying:
    //    https://www.chromium.org/developers/design-documents/network-settings
    headless: false,
    args: [ '--proxy-server=socks4://128.199.142.101:37024' ]
  });
  const page = await browser.newPage();
  await page.goto('https://share-w.in/pd134g-46534');
  //await browser.close();
})();