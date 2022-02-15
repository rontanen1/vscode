const fetch = require('node-fetch'); 

const funcSendOTP = () => new Promise((resolve, reject) => { 
fetch('https://goldefy.com/api/reservation', {
    method: 'POST',
    headers: {
        'authority': 'goldefy.com',
        'sec-ch-ua': '" Not;A Brand";v="99", "Google Chrome";v="97", "Chromium";v="97"',
        'accept': 'application/json',
        'content-type': 'application/json',
        'sec-ch-ua-mobile': '?0',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36',
        'sec-ch-ua-platform': '"Windows"',
        'origin': 'https://goldefy.com',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'referer': 'https://goldefy.com/pre-order.html',
        'accept-language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7',
        'Content-Type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify({"CHECK":true,"EMAIL":"volchok8@osmye.com","OS":"Android"})
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
