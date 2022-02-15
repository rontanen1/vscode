const fetch = require('node-fetch'); //MENAMBAHKAN MODULE node-fetch
const random = require('random-name'); //MENAMBAHKAN MODULE random

const randstr = (length) => new Promise((resolve) => {
        var text = "";
        var possible =
            "abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        for (var i = 0; i < length; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        resolve(text);
    });


const funcregist = (email) => new Promise((resolve, reject) => { //FUNGSI SENDING HTTP REQUEST
    fetch("https://live.digitap.eu/v2/account/authenticate/email?create=true&", {
        method: 'POST', //METODE POST / MENGIRIM DATA KE SERVER
        headers: {
        "accept": "application/json",
        "content-type": "application/json",
        "Referer": "https://wam.app/",
        "Referrer-Policy": "strict-origin-when-cross-origin"
    },
    body: JSON.stringify({"email": email ,"password":"Jangsker29!","vars":{"ua":"\"Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1\"","location":"{\"code\":\"ID\",\"name\":\"Indonesia\"}","cookie_consent":null,"invite":"ronytan","utm_medium":"Invite","utm_source":"undefined","utm_campaign":"@ronytan"}})   
    })
.then(res => res.text())
.then(text => {
    resolve(text);
})
.catch(err => reject(err));
});


(async() => { //ALGORITMA DAN PERULANGAN DALAM MEMBUAT BOT AUTO REGIST
    for (let i = 0; i < 500; i++) {
    const domain = ['gmail.com'];
    const email = `${random.first()}${random.middle()}${await randstr(5)}@${domain[Math.floor(Math.random() * domain.length)]}`.toLowerCase();
    console.log(email)
    const regist = await funcregist(email)
    console.log(regist)
    }
})();