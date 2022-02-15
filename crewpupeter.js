const fetch = require('node-fetch');
const fs = require('fs');
const random = require('random-name');
const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());
const AdblockerPlugin = require('puppeteer-extra-plugin-adblocker');
puppeteer.use(AdblockerPlugin({ blockTrackers: true }));
const UserAgents = require('user-agents');
const delay = require('delay');


const randstr = (length) =>
    new Promise((resolve, reject) => {
        var text = "";
        var possible =
            "abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        for (var i = 0; i < length; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        resolve(text);
    });


(async() => {
    //const domain = ['playfuny.com'];
    //const email = `${random.first()}${random.middle()}${await randstr(5)}@${domain[Math.floor(Math.random() * domain.length)]}`.toLowerCase();
    //console.log(email)
    
    const browser = await puppeteer.launch({
        headless: false,
        ignoreHTTPSErrors: true,
        slowMo: 0,
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-accelerated-2d-canvas',
            '--no-zygote',
            '--no-first-run',
            '--ignore-certificate-errors',
            '--ignore-certificate-errors-spki-list',
            '--disable-dev-shm-usage',
            '--disable-infobars',
            '--window-size=1920x1080'
        ]
    });
    
    const page = await browser.newPage();
    
    await page.emulateTimezone("Asia/Jakarta");
    const userAgent = new UserAgents();
    await page.setUserAgent(userAgent.toString());
    await page.setDefaultNavigationTimeout(0);
    
    await page.goto(`https://crewdle.grsm.io/100dollars`, {
        waitUntil: 'networkidle0',
        timeout: 120000,
    });

    const kliker1 = '.btn-label-big'
    await page.click(kliker1)
    await delay(20000)
    //const kliker2 = 'name="ion-input-0"'
    //await page.click(kliker2)
    //await page.waitFor('input[name=ion-input-0]');
    await page.type('name="ion-input-0"', 'fatima');

    


})();