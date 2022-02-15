const fetch = require('node-fetch'); 

const captchaGetTaskID = () => new Promise((resolve, reject) => { 
    fetch('https://api.anycaptcha.com/createTask', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({"clientKey": "7937906bd2174154b2b668a24c00c37d",
        "task": {
            "type": "RecaptchaV2TaskProxyless",
            "websiteURL": "https://hongbao.near.org/",
            "websiteKey": "6LfRg08eAAAAAEDU57rHGxN9B7oqwaIiXs1Y-tuG",
            "isInvisible": false}})
    })
    .then(res => res.text())
    .then(text => {
        resolve(text);
    })
    .catch(err => reject(err));
    });

    const captchaGetRespone = (taskID) => new Promise((resolve, reject) => { 
        fetch('https://api.anycaptcha.com/getTaskResult', {
            method: 'POST',
            headers: {
                'Host': 'api.anycaptcha.com',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "clientKey": "7937906bd2174154b2b668a24c00c37d",
                "taskId": taskID})
        })
        .then(res => res.json())
        .then(text => {
                resolve(text);
            })
            .catch(err => reject(err));
    });

const funcCheckNumber = (captcha) => new Promise((resolve, reject) => { 
    fetch('https://neardrop-miami-mainnet.herokuapp.com/signup?event=hongbao', {
        method: 'POST',
        headers: {
            'Connection': 'keep-alive',
            'sec-ch-ua': '" Not;A Brand";v="99", "Google Chrome";v="97", "Chromium";v="97"',
            'accept': 'application/json',
            'content-type': 'application/json',
            'sec-ch-ua-mobile': '?0',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36',
            'sec-ch-ua-platform': '"Windows"',
            'Origin': 'https://hongbao.near.org',
            'Sec-Fetch-Site': 'cross-site',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Dest': 'empty',
            'Referer': 'https://hongbao.near.org/',
            'Accept-Language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7',
            'Content-Type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify({"phone":"+6283856711971","g-recaptcha-response":captcha})
    })
.then(res => res.text())
.then(text => {
    resolve(text);
})
.catch(err => reject(err));
});


const funcSendOTP = () => new Promise((resolve, reject) => { 
fetch('https://neardrop-miami-mainnet.herokuapp.com/signup?event=hongbao', {
    method: 'POST',
    headers: {
        'Connection': 'keep-alive',
        'sec-ch-ua': '" Not;A Brand";v="99", "Google Chrome";v="97", "Chromium";v="97"',
        'accept': 'application/json',
        'content-type': 'application/json',
        'sec-ch-ua-mobile': '?0',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36',
        'sec-ch-ua-platform': '"Windows"',
        'Origin': 'https://hongbao.near.org',
        'Sec-Fetch-Site': 'cross-site',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Dest': 'empty',
        'Referer': 'https://hongbao.near.org/',
        'Accept-Language': 'id-ID,id;q=0.9',
        'Content-Type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify({"phone":"+6283856711971"})
})
.then(res => res.text())
.then(text => {
    resolve(text);
})
.catch(err => reject(err));
});


(async() => { 
    const gettaskID = await captchaGetTaskID()
    const taskID = await gettaskID.split(':')[3].replace('}','');
    console.log(taskID)

        let realCaptchaResponse 

    do {
        realCaptchaResponse = await captchaGetRespone(taskID)
        //console.log(realCaptchaResponse.status)
    } while (realCaptchaResponse.status === 'processing');


    const getCaptchaResponse = realCaptchaResponse.solution
    const captcha = getCaptchaResponse.gRecaptchaResponse
    console.log(captcha)

        const checknumber = await funcCheckNumber(captcha)
        console.log(checknumber)
 
        //const create = await FuncCreate()
           //console.log(create)
})();