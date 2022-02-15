const fetch = require('node-fetch'); 
const crypto = require("crypto");

const createTask = (address,device_id) => new Promise((resolve, reject) => { 
fetch('https://stg-api.ricewallet.io/referral/add-ref', {
    method: 'POST',
    headers: {
        'Host': 'stg-api.ricewallet.io',
        'content-type': 'application/json; charset=UTF-8',
        'content-length': '105',
        'accept-encoding': 'gzip',
        'user-agent': 'okhttp/4.3.1'
    },
    body: JSON.stringify({"address":address,"code":"KZCSKN8V","device_id":device_id})
})
.then(res => res.text())
.then(text => {
    resolve(text);
})
.catch(err => reject(err));
});


(async() => { 
    for (let i = 0; i < 2500; i++) {
    const address =  "0x"+crypto.randomBytes(20).toString("hex")
    const device_id = crypto.randomBytes(8).toString("hex")
    //console.log(address)
    const create = await createTask(address,device_id)
    console.log(create+"     "+i)
    }
})();