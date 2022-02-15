const fetch = require('node-fetch'); 
const random = require('random-name');

const randstr = (length) =>
    new Promise((resolve, reject) => {
        var text = "";
        var possible =
            "abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        for (var i = 0; i < length; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        resolve(text);
    });

const captchaGetTaskID = () => new Promise((resolve, reject) => { 
    fetch('https://api.anycaptcha.com/createTask', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({"clientKey": "7937906bd2174154b2b668a24c00c37d",
        "task": {
            "type": "RecaptchaV2TaskProxyless",
            "websiteURL": "https://www.agoda.com/id-id/signup?targeturl=%2F",
            "websiteKey": "6LfGHMcZAAAAAAN-k_ejZXRAdcFwT3J-KK6EnzBE",
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

const funcRegist = (email,firstName,lastName,captcha) => new Promise((resolve, reject) => { 
    fetch("https://www.agoda.com/ul/api/v1/signup", {
        "headers": {
          "accept": "*/*",
          "accept-language": "id-ID,id;q=0.9",
          "content-type": "application/json; charset=utf-8",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-origin",
          "ul-app-id": "mspa",
          "ul-fallback-origin": "https://www.agoda.com",
          "x-kl-ajax-request": "Ajax_Request",
          //"cookie": '',
          "Referer": "https://www.agoda.com/id-id/ul/login/signup/?appId=mspa&rpcId=mspa-%23universal-login-app-430&useExternalRoute=true&useExternalNotification=true&initialPath=signupEmail&fullScreen=true&sdkVersion=5.1.2&type=email",
          "Referrer-Policy": "strict-origin-when-cross-origin"
        },
        "body": `{\"credentials\":{\"username\":\"${email}\",\"password\":\"Toor2002\",\"authType\":\"email\"},\"firstName\":\"${firstName}\",\"lastName\":\"${lastName}\",\"newsLetter\":true,\"captchaVerifyInfo\":{\"captchaType\":\"recaptcha\",\"captchaResult\":{\"recaptchaToken\":\"${captcha}\"}}}`,
        "method": "POST"
      })
.then(res => {
    const location = res.headers.raw()
    resolve(location);
})
.catch(err => reject(err));
});


const funcClaimReward = (realCookie1) => new Promise((resolve, reject) => { 
    fetch('https://www.agoda.com/id-id/app/agodacashcampaign?campaignToken=b6ee49c1fc6734aa0eae8b75014cbd3032b1fea3&refreshOnBack=', {
        headers: {
            'authority': 'www.agoda.com',
            'upgrade-insecure-requests': '1',
            'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1',
            'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
            'sec-fetch-site': 'none',
            'sec-fetch-mode': 'navigate',
            'sec-fetch-user': '?1',
            'sec-fetch-dest': 'document',
            'accept-language': 'id-ID,id;q=0.9',
            'Cookie': `${realCookie1}; ASP.NET_SessionId=qc4qj3to0ausxypu5ml15cg0; agoda.firstclicks=-1||||2022-02-07T08:52:22||qc4qj3to0ausxypu5ml15cg0||{"IsPaid":false,"gclid":"","Type":""}; agoda.lastclicks=-1||||2022-02-07T08:52:22||qc4qj3to0ausxypu5ml15cg0||{"IsPaid":false,"gclid":"","Type":""}; agoda.landings=-1|||qc4qj3to0ausxypu5ml15cg0|2022-02-07T08:52:22|False|19-----1|||qc4qj3to0ausxypu5ml15cg0|2022-02-07T08:52:22|False|20-----1|||qc4qj3to0ausxypu5ml15cg0|2022-02-07T08:52:22|False|99; agoda.attr.03=ATItems=-1$02-07-2022 08:52$; agoda.banner=OverlayBanner=1; tealiumEnable=true; _ab50group=GroupA; _40-40-20Split=Group40A; deviceId=ef81e2e2-9bef-45eb-bc55-0e0b78166e25; agoda.price.01=PriceView=1; ab.storage.userId.16f5c72b-4360-4777-81e0-3319f2e7079a=%7B%22g%22%3A%2272b192e2-943c-44f0-be87-a4b25fd19f99%22%2C%22c%22%3A1644198752084%2C%22l%22%3A1644198752084%7D; ab.storage.deviceId.16f5c72b-4360-4777-81e0-3319f2e7079a=%7B%22g%22%3A%223caa0a5e-6458-2840-25b2-3cfa910f03a1%22%2C%22c%22%3A1644198752091%2C%22l%22%3A1644198752091%7D; _ga=GA1.2.879444067.1644198754; _gid=GA1.2.1105606819.1644198754; _fbp=fb.1.1644198756928.629069390; _clck=1h78uy5|1|eys|0; xsrf_token=CfDJ8Dkuqwv-0VhLoFfD8dw7lYzgzypyrQ9Zw73EIW_i6aMYmoIGXNvRyde-fkB8Xeec7s5zO1gTMXoMnGQ-UkLC5kq0kAv6utoFyLFayOyVDtCy2yw3AzpZPOVEr8Yzf1RlR3pdgJw622vrGSsFgUyE3kg; token=eyJhbGciOiJFUzI1NiJ9.eyJtIjoyODQ5ODMwNjksInIiOltdLCJlIjoiJWFIQ2khWWtmXilmM1tsKkxWZm5wWWd1ZkU3ayxmOC0hLUIpa3JWW0FnTWxaV0M-OGdPV0tZVUtkOiZQVzVFWjVjYVBqOGNSJGglJU09KyUiLCJzcmMiOiJzcmMiLCJzdWIiOiI3RlYzM28yRFQ2aXVGRXFlYzZjUkhRIiwianRpIjoiNU5UcS1iNGpUNE82SjZlcFl6c3djZyIsImlhdCI6MTY0NDE5ODgyOCwiZXhwIjoxNjUxOTc0ODI4LCJ3bHQiOiJmMWE1OTA1Zi05NjIwLTQ1ZTUtOWQ5MS1kMjUxYzA3ZTBiNDIifQ.dncmpgrk8o08j6tcQLkNH7OQrpiapKKgKTe_ozN4gp-QYVqDPo9H8AKQV_VFCPn1cNIsaoz03ym2IUpl5yXeEg; criteo_cookie_perm=1; __gads=ID=1e0f0d7adfcfb2ed-222014fb7dd000b9:T=1644198757:RT=1644201277:S=ALNI_Ma4OJM7SPPh9Oct4B6fTZP_rWXYqQ; agoda.version.03=CookieId=c8f5bc09-2a07-4618-8840-5b8d1a83b09f&TItems=2$-1$02-07-2022 08:52$03-09-2022 08:52$&DLang=id-id&CurLabel=IDR; agoda.analytics=Id=349043819816061920&Signature=-3803936494696075552&Expiry=1644204926142; ab.storage.sessionId.16f5c72b-4360-4777-81e0-3319f2e7079a=%7B%22g%22%3A%22e22f01f8-f9fe-5726-ae3d-6f6b6ae2e67a%22%2C%22e%22%3A1644203142154%2C%22c%22%3A1644201229353%2C%22l%22%3A1644201342154%7D; utag_main=v_id:017ed1e1e6170001e3d82a785cc100089001c08100536$_sn:2$_se:8$_ss:0$_st:1644203142291$ses_id:1644201274131%3Bexp-session$_pn:4%3Bexp-session; _uetsid=9eed18b087b811ecadd4f5dfdf76749e; _uetvid=9eed65b087b811ecb3a2cd8b1e852363; cto_bundle=DxKA3l93U2VhJTJGMGhjNXEwSWFYdjgwYiUyQmZSSlpuSDF4MnRTdWE2NzQlMkI1b1FnRDZEZTR0Um93ekJUdk5FM0tCVWw0azRvRyUyRkVQWlZOJTJCQTl6ckFKJTJGbjd1UFNyNXFBRVVRUVpqQm9vVnVHcTduYUtoNmgxZHk5JTJGRyUyQkJQRktZUlNMNDRLMGs; _clsk=1ciukv5|1644201346528|5|0|e.clarity.ms/collect; RT=z=1&dm=agoda.com&si=10281ce3-d236-4b4a-b5f0-1d150dc7b5b3&ss=kzc2zf1s&sl=4&tt=833&bcn=%2F%2F684d0d49.akstat.io%2F&ld=1k3e&ul=2was`
        }
    })
.then(res => res.text())
.then(text => {
    resolve(text);
})
.catch(err => reject(err));
});


(async() => { 

    const domain = ['gmail.com'];
    const firstName = `${random.first()}`
    const lastName = `${random.middle()}`
    const email = `${firstName}${lastName}${await randstr(5)}@${domain[Math.floor(Math.random() * domain.length)]}`.toLowerCase();
        console.log(email)

    const gettaskID = await captchaGetTaskID()
    const taskID = await gettaskID.split(':')[3].replace('}','');
    //console.log(taskID)

        let realCaptchaResponse 

    do {
        realCaptchaResponse = await captchaGetRespone(taskID)
        //console.log(realCaptchaResponse.status)
    } while (realCaptchaResponse.status === 'processing');


    const getCaptchaResponse = realCaptchaResponse.solution
    const captcha = getCaptchaResponse.gRecaptchaResponse
    //console.log(captcha)


        const regist = await funcRegist(email,firstName,lastName,captcha)
        //console.log(regist)
        const cookie = JSON.stringify(regist)
        const realCookie = await cookie.split(',')[20].replace('"','').replace('"','').replace(']}','');
        const realCookie1 = await realCookie.split(';')[0]
        const realCookie2 = await realCookie1.split('=')[1]
        //console.log(realCookie)

            const claim1 = await funcClaimReward(realCookie1)
            console.log(claim1)
})();