





const fetch = require('node-fetch');
const cheerio = require('cheerio')
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

const funcgetlink = (email) => new Promise((resolve, reject) => {  
fetch('https://generator.email/', {
    headers: {
        'authority': 'generator.email',
        'upgrade-insecure-requests': '1',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36',
        'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'sec-fetch-site': 'none',
        'sec-fetch-mode': 'navigate',
        'sec-fetch-user': '?1',
        'sec-fetch-dest': 'document',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'accept-language': 'id-ID,id;q=0.9',
        'cookie': `_ga=GA1.2.912907824.1637998498; _gid=GA1.2.1611239844.1637998498; __gads=ID=d4166c0d5b56f4e2-223de5e849cf0019:T=1637998497:RT=1637998497:S=ALNI_Maq1ebBvll2fCLzXrUj-x7e8YJmnA; surl=${email}`
    }
})
.then(res => res.text())
.then(text => {
    resolve(text);
})
.catch(err => reject(err));
});

const funcregist = (email) => new Promise((resolve, reject) => {  
    fetch('https://whalemap.io/api/v1/sign_up', {
        method: 'POST',
        headers: {
            'Connection': 'keep-alive',
            'X-KL-Ajax-Request': 'Ajax_Request',
            'sec-ch-ua-mobile': '?0',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36',
            'tokenauth': '',
            'Content-Type': 'application/json',
            'Accept': 'application/json, text/plain, */*',
            'sec-ch-ua-platform': '"Windows"',
            'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
            'Origin': 'https://whalemap.io',
            'Sec-Fetch-Site': 'same-origin',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Dest': 'empty',
            'Referer': 'https://whalemap.io/airdrop',
            'Accept-Language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7',
            'Cookie': 'mp_4232d4e477f009223ba5f5c3ed50cc6c_mixpanel=%7B%22distinct_id%22%3A%20%22%22%2C%22%24device_id%22%3A%20%2217dd59d5c7c1af-00d2ea79cc7783-4303066-144000-17dd59d5c802fd%22%2C%22%24initial_referrer%22%3A%20%22%24direct%22%2C%22%24initial_referring_domain%22%3A%20%22%24direct%22%2C%22__mps%22%3A%20%7B%7D%2C%22__mpso%22%3A%20%7B%7D%2C%22__mpus%22%3A%20%7B%7D%2C%22__mpa%22%3A%20%7B%7D%2C%22__mpu%22%3A%20%7B%7D%2C%22__mpr%22%3A%20%5B%5D%2C%22__mpap%22%3A%20%5B%5D%2C%22%24user_id%22%3A%20%22%22%7D; G_ENABLED_IDPS=google; __stripe_mid=2facf67b-1adb-4b3f-a820-3d00b03bcb3e560124; __stripe_sid=e7607a0e-8091-4d82-9b70-6b685957db37505aa3'
        },
        body: JSON.stringify({"email":email,"password":"Kholif57!"})
    })
.then(res => res.text())
.then(text => {
    resolve(text);
})
.catch(err => reject(err));
});


(async() => {
    for (let i = 0; i < 500; i++) {
//createemail
    const domain = ['playfuny.com'];
    const email = `${random.first()}${random.middle()}${await randstr(5)}@${domain[Math.floor(Math.random() * domain.length)]}`.toLowerCase();
    console.log(email)
//regist
    const regist = await funcregist(email)
    console.log(regist)
//getlink
    //const link = await funcgetlink(email)
    //console.log(link)
//gotolink
await delay(2000)
const browser = await puppeteer.launch({
    headless: true,
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

await page.goto(`http://generator.email/${email}`, {
    waitUntil: 'networkidle0',
    timeout: 120000,
});

const kliker = 'td > a'
await page.click(kliker)

await delay(30000)
await browser.close();
hasiljadi = JSON.stringify(email)
    fs.appendFileSync('whilemap.txt',`\n${hasiljadi}`);
    }
})();