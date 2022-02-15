const fetch = require('node-fetch'); 
const random = require('random-name');

const randstr = (length) => new Promise((resolve) => {
    var text = "";
    var possible =
        "abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (var i = 0; i < length; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    resolve(text);
});

const funcfirtsopen = (email) => new Promise((resolve, reject) => { 
fetch('https://crewdle.com/?gspk=c3VrYW1rbGlzd2FudG8xMjc2&gsxid=Nh0q6z0jNfsP&utm_campaign=sukamkliswanto1276&utm_medium=marketplace&utm_source=partnerstack', {
    headers: {
        'authority': 'crewdle.com',
        'upgrade-insecure-requests': '1',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36',
        'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'sec-gpc': '1',
        'sec-fetch-site': 'none',
        'sec-fetch-mode': 'navigate',
        'sec-fetch-user': '?1',
        'sec-fetch-dest': 'document',
        'accept-language': 'en-US,en;q=0.9',
        'cookie': 'growSumoPartnerKey=sukamkliswanto1276; gsxid=LoDT1rXpjdsd; _fbp=fb.1.1641626034384.2135397603; intercom-id-ejeuah3x=036fa422-77e1-40b4-b878-d0c9a32d865a; _iub_cs-39030654=%7B%22consent%22%3Atrue%2C%22timestamp%22%3A%222022-01-08T07%3A14%3A00.342Z%22%2C%22version%22%3A%221.35.3%22%2C%22id%22%3A39030654%2C%22cons%22%3A%7B%22rand%22%3A%225b9147%22%7D%7D; intercom-session-ejeuah3x=QXVTT3Y1UkR3TGRla0FDa1p3ZCtwV1VqNUdYcm0yc05WbnlBT1dYS2pGMko0dTdEbCsrQ1JVb3BhekFuNFlKVi0tLzdwM3R0ZTRaM3FRRnNtbE9GMHVVdz09--cb54899a59b5542a6c746e3043046058397fd193'
    }
})
.then(res => res.text())
.then(text => {
    resolve(text);
})
.catch(err => reject(err));
});

const funcreqregist = (email) => new Promise((resolve, reject) => { 
fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBbi2Uq881p2KXYMFv8OcBN3pacapTxN2E', {
    method: 'POST',
    headers: {
        'authority': 'identitytoolkit.googleapis.com',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
        'content-type': 'application/json',
        'x-client-version': 'Chrome/JsCore/9.1.3/FirebaseCore-web',
        'sec-ch-ua-mobile': '?0',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36',
        'sec-ch-ua-platform': '"Windows"',
        'accept': '*/*',
        'origin': 'https://app.crewdle.com',
        'x-client-data': 'CJO2yQEIpLbJAQjBtskBCKmdygEInvnLAQjnhMwBCLaFzAEIy4nMAQjSj8wBCMuSzAEYjp7LAQ==',
        'sec-fetch-site': 'cross-site',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'accept-language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7', 
        'Content-Type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify({"returnSecureToken":true,"email":email,"password":"Toor2002"})
})
.then(res => res.text())
.then(text => {
    resolve(text);
})
.catch(err => reject(err));
});

const funcupdatename = (name,idToken) => new Promise((resolve, reject) => { 
fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBbi2Uq881p2KXYMFv8OcBN3pacapTxN2E', {
    method: 'POST',
    headers: {
        'authority': 'identitytoolkit.googleapis.com',
        'x-client-version': 'Chrome/JsCore/9.1.3/FirebaseCore-web',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36',
        'content-type': 'application/json',
        'accept': '*/*',
        'sec-gpc': '1',
        'origin': 'https://app.crewdle.com',
        'sec-fetch-site': 'cross-site',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'accept-language': 'en-US,en;q=0.9',
        'Content-Type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify({"idToken":idToken,"displayName":name,"returnSecureToken":true})
})
.then(res => res.text())
.then(text => {
    resolve(text);
})
.catch(err => reject(err));
});

const funcregist = (idToken) => new Promise((resolve, reject) => { 
fetch('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyBbi2Uq881p2KXYMFv8OcBN3pacapTxN2E', {
    method: 'POST',
    headers: {
        'authority': 'identitytoolkit.googleapis.com',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
        'content-type': 'application/json',
        'x-client-version': 'Chrome/JsCore/9.1.3/FirebaseCore-web',
        'sec-ch-ua-mobile': '?0',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36',
        'sec-ch-ua-platform': '"Windows"',
        'accept': '*/*',
        'origin': 'https://app.crewdle.com',
        'x-client-data': 'CJO2yQEIpLbJAQjBtskBCKmdygEInvnLAQjnhMwBCLaFzAEIy4nMAQjSj8wBCMuSzAEYjp7LAQ==',
        'sec-fetch-site': 'cross-site',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'accept-language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7',
        'Content-Type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify({"requestType":"VERIFY_EMAIL","idToken":idToken,"continueUrl":"https://app.crewdle.com/login"})
})
.then(res => res.text())
.then(text => {
    resolve(text);
})
.catch(err => reject(err));
});

const funclogin = (email) => new Promise((resolve, reject) => { 
fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBbi2Uq881p2KXYMFv8OcBN3pacapTxN2E', {
    method: 'POST',
    headers: {
        'authority': 'identitytoolkit.googleapis.com',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
        'content-type': 'application/json',
        'x-client-version': 'Chrome/JsCore/9.1.3/FirebaseCore-web',
        'sec-ch-ua-mobile': '?0',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36',
        'sec-ch-ua-platform': '"Windows"',
        'accept': '*/*',
        'origin': 'https://app.crewdle.com',
        'x-client-data': 'CJO2yQEIpLbJAQjBtskBCKmdygEInvnLAQjnhMwBCLaFzAEIy4nMAQjSj8wBCMuSzAEYjp7LAQ==',
        'sec-fetch-site': 'cross-site',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'accept-language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7',
        'Content-Type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify({"returnSecureToken":true,"email":"bentgreek28@greendike.com","password":"Toor2002"})
})
.then(res => res.text())
.then(text => {
    resolve(text);
})
.catch(err => reject(err));
});

const funccekakun = (email) => new Promise((resolve, reject) => { 
fetch('https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyBbi2Uq881p2KXYMFv8OcBN3pacapTxN2E', {
    method: 'POST',
    headers: {
        'authority': 'identitytoolkit.googleapis.com',
        'x-client-version': 'Chrome/JsCore/9.1.3/FirebaseCore-web',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36',
        'content-type': 'application/json',
        'accept': '*/*',
        'sec-gpc': '1',
        'origin': 'https://app.crewdle.com',
        'sec-fetch-site': 'cross-site',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'accept-language': 'en-US,en;q=0.9',
        'Content-Type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify({"idToken":"eyJhbGciOiJSUzI1NiIsImtpZCI6IjM1MDZmMzc1MjI0N2ZjZjk0Y2JlNWQyZDZiNTlmYThhMmJhYjFlYzIiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoicm9ueSB0YW4iLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vY3Jld2RsZS1hcHAiLCJhdWQiOiJjcmV3ZGxlLWFwcCIsImF1dGhfdGltZSI6MTY0MTYyMDg5OCwidXNlcl9pZCI6Ijg1QVRpQk94ZVFPZjRZejE5Rk1tNXVQWUZ2bzEiLCJzdWIiOiI4NUFUaUJPeGVRT2Y0WXoxOUZNbTV1UFlGdm8xIiwiaWF0IjoxNjQxNjI2MDYyLCJleHAiOjE2NDE2Mjk2NjIsImVtYWlsIjoiaGV4YXhvckBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJoZXhheG9yQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.PrOYVDcZ7QKohqug2NxZSKQYT96tHG6B0A76WymUJyV_Hbqs0pQC7TWYu4_fC_VgLdpPowyC7g-48S5qzzCEjkHsc3Y9eplJOWwMZi-gP6EkdcjOlPvvQjFLjOZJ5EbvZCq_E4UAjMSI6B4p3kpM0cM7Lb1Bc5ENBOP_dp9RQ9FGJHeUFyqMuLHBapLjp3Rl5UN0Tt5-mkWwpEUClYae82ogb9I8a8eRnnNwEz7NuGY4jhxuFl72qJWXf7MuEZjT0R9iYiGgrwJtZPd22yCHv0WAnQ6CM1miu9IetisMGkleNgMTVP-zGexO_9fbnjBIsR8dBu55YUiAWu5gRHiPgw"})
})
.then(res => res.text())
.then(text => {
    resolve(text);
})
.catch(err => reject(err));
});

(async() => { 

const domain = ['greendike.com'];
const email = `${random.first()}${random.middle()}${await randstr(5)}@${domain[Math.floor(Math.random() * domain.length)]}`.toLowerCase();
console.log(email)
const name = email.split('@')[0]
const firstopen = await funcfirtsopen()
    const reqregist = await funcreqregist(email)
    //console.log(reqregist)
        const idToken = await reqregist.split(',')[1].split(',')[0].split(':')[1].replace(/"/g,'').replace(/ /g,'')
        console.log(idToken)
        const reqname = await funcupdatename(name,idToken)
        //console.log(reqname)
                const regist = await funcregist(idToken)
                console.log(regist)
//const login = await funclogin()
//console.log(login)
//const cekakun = await funccekakun()
//console.log(cekakun)
})();
