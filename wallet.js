const fetch = require('node-fetch'); 

const funcSendOTP = () => new Promise((resolve, reject) => {
fetch('https://aurora.dev/api/faucet/mainet', {
    method: 'POST',
    headers: {
        'authority': 'aurora.dev',
        'x-kl-ajax-request': 'Ajax_Request',
        'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1',
        'content-type': 'application/json',
        'accept': '*/*',
        'origin': 'https://aurora.dev',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'referer': 'https://aurora.dev/faucet',
        'accept-language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7',
        //'cookie': '__cfruid=952d2c5d784475b613a7761b3b1b4af4af0aab46-1644340266',
        'Content-Type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify({"address":"0x1426F09eB3e8A3eA108C18F5CeaB22d5770D163e"})
})
.then(res => res.text())
.then(text => {
    resolve(text);
})
.catch(err => reject(err));
});

(async() => { 
    const send = await funcSendOTP()
    console.log(send)
    
    })();