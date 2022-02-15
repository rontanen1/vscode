const fetch = require('node-fetch'); 
const random = require('random-name');
const cheerio = require('cheerio')
const crypto = require("crypto");


const randstr = (length) => new Promise((resolve) => {
    var text = "";
    var possible =
        "abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (var i = 0; i < length; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    resolve(text);
});

const funcSendOTP = (email) => new Promise((resolve, reject) => {
    fetch('https://api.harmonylauncher.io/otp', {
        method: 'POST',
        headers: {
            'Connection': 'keep-alive',
            'sec-ch-ua': '" Not;A Brand";v="99", "Google Chrome";v="97", "Chromium";v="97"',
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
            'sec-ch-ua-mobile': '?0',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36',
            'sec-ch-ua-platform': '"Windows"',
            'Origin': 'https://referral.harmonylauncher.io',
            'Sec-Fetch-Site': 'same-site',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Dest': 'empty',
            'Referer': 'https://referral.harmonylauncher.io/',
            'Accept-Language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7'
        },
        body: JSON.stringify({"email":email})
    })
.then(res => res.text())
.then(text => {
    resolve(text);
})
.catch(err => reject(err));
});

const funcVerifdOTP = (id,OTP,address) => new Promise((resolve, reject) => {
    fetch('https://api.harmonylauncher.io/login', {
        method: 'POST',
        headers: {
            'Connection': 'keep-alive',
            'sec-ch-ua': '" Not;A Brand";v="99", "Google Chrome";v="97", "Chromium";v="97"',
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
            'sec-ch-ua-mobile': '?0',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36',
            'sec-ch-ua-platform': '"Windows"',
            'Origin': 'https://referral.harmonylauncher.io',
            'Sec-Fetch-Site': 'same-site',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Dest': 'empty',
            'Referer': 'https://referral.harmonylauncher.io/',
            'Accept-Language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7'
        },
        body: JSON.stringify({"id":id,"otp":OTP,"projectCode":"harmony-launcher","walletAddress":address,"referrerCode":"OX8cBsQr"})
    })
    .then(res => res.json())
    .then(text => {
        resolve(text);
    })
    .catch(err => reject(err));
    });

    const functionGetOTP = (username, domain1) => new Promise((resolve, reject) => {
        fetch('https://generator.email/inbox1/', {
            headers: {
                'authority': 'generator.email',
                'upgrade-insecure-requests': '1',
                'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36',
                'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
                'sec-fetch-site': 'same-origin',
                'sec-fetch-mode': 'navigate',
                'sec-fetch-user': '?1',
                'sec-fetch-dest': 'document',
                'sec-ch-ua': '" Not;A Brand";v="99", "Google Chrome";v="97", "Chromium";v="97"',
                'sec-ch-ua-mobile': '?0',
                'sec-ch-ua-platform': '"Windows"',
                'accept-language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7',
                'cookie': `_ga=GA1.2.924411071.1631760118; __gads=ID=7df89103a9b7c9bb-22ee8799a4cb002e:T=1631760118:RT=1631760118:S=ALNI_MbhRaD4249RbdMRYl3YQhkRL6AvcA; embx=%5B%22lisettamaximilianusnrzya%40playfuny.com%22%2C%22smirn9ga%40wyieiolo.com%22%5D; surl=${domain1}%2F${username}`
            }
        })
        .then(res => res.text())
        .then(text => {
            const $ = cheerio.load(text);
            const src = $(".mess_bodiyy > p").text()
            resolve(src);
        })
        .catch(err => reject(err));
});

(async() => { 
for (let i = 0; i < 2500; i++) {
    const address =  "0x"+crypto.randomBytes(20).toString("hex")
    const domain = ["playfuny.com", "wyieiolo.com", "boranora.com", "mobilb.site","mailcuk.com","silnmy.com","notvn.com","masjoco.com","mumbama.com","mphaotu.com","yaachea.com","bacharg.com","anchukatyfarms.com","email-brasil.com","sfdi.site","nproxi.com","esearb.com"];
    const email = `${random.first()}${random.middle()}${await randstr(5)}@${domain[Math.floor(Math.random() * domain.length)]}`.toLowerCase();
    //console.log("email : "+email)
    const domain1 = email.split('@')[1]
    const username = email.split('@')[0]   
            const sendOTP = await funcSendOTP(email)
            //console.log(sendOTP)
            const id = await sendOTP.split(':')[2].replace(/"/g,'').replace(/"/g,'').replace(/}/g,'')
            //console.log("id : "+id)

            //await delay(10000);
let cekOTP 
    do {
        const getOTP = await functionGetOTP(username,domain1)
        cekOTP = await getOTP.split(':')[0]
        //console.log(cekOTP)
    }while(cekOTP === '')

    const getOTP = await functionGetOTP(username,domain1)
    const OTP = getOTP.split(':')[1].split('.')[0].replace(/ /g,'')
    //console.log("OTP : "+OTP)

    const verifOtp = await funcVerifdOTP(id,OTP,address)
    //console.log(verifOtp)

        if(verifOtp.success === true){
            console.log('succes reff ke :'+i)
        }else{
            console.log('gagal reff')
        }
    }
    })();