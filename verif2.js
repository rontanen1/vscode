const Captcha = require("2captcha");
const keyCaptcha = "";
const fetch = require("node-fetch");
const jwt_decode = require("jwt-decode");
const readlineSync = require("readline-sync");
const fs = require("fs-extra");
const date = () => new Date().toLocaleTimeString();

const functionGetTokenAction = (sitekey, pageurl) =>
    new Promise((resolve, reject) => {
        fetch(
            `http://2captcha.com/in.php?key=${keyCaptcha}&method=userrecaptcha&version=v3&action=action&min_score=0.3
    &googlekey=${sitekey}&pageurl=${pageurl}`,
            {
                method: "get",
            }
        )
            .then((res) => res.text())
            .then((text) => {
                resolve(text);
            })
            .catch((err) => reject(err));
    });

const functionGetRealTokenAction = (id) =>
    new Promise((resolve, reject) => {
        fetch(
            `http://2captcha.com/res.php?key=${keyCaptcha}&action=get&json=1&id=${id}`,
            {
                method: "get",
            }
        )
            .then((res) => res.json())
            .then((text) => {
                resolve(text);
            })
            .catch((err) => reject(err));
    });

const verif = (accessToken, emailToken, body) =>
    new Promise((resolve, reject) => {
        const datra = {
            firstName: body.firstName,
            lastName: body.lastName,
            DoB: body.DoB,
            emailId: body.email,
            password: "Zxcv1234#",
            token: emailToken,
            referralCode: "LM6142D9E6229F4AD3C9255988",
        };
        fetch("http://3.129.198.102:8080/api/auth/signup", {
            method: "POST",
            headers: {
                authority: "d32uscg0d7yvt0.cloudfront.net",
                "sec-ch-ua":
                    '"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"',
                accept: "application/json, text/plain, */*",
                authentication: "",
                accesstoken: accessToken,
                "sec-ch-ua-mobile": "?0",
                "user-agent":
                    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36",
                "content-type": "application/json;charset=UTF-8",
                origin: "https://mail.ledgermail.io",
                "sec-fetch-site": "cross-site",
                "sec-fetch-mode": "cors",
                "sec-fetch-dest": "empty",
                referer: "https://mail.ledgermail.io/",
                "accept-language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7",
            },
            body: JSON.stringify(datra),
        })
            .then((res) => res.text())
            .then((res) => resolve(res))
            .catch((err) => reject(err));
    });


const login = (accessToken, emailToken, body) =>
    new Promise((resolve, reject) => {
        const datra = {
            firstName: body.firstName,
            lastName: body.lastName,
            DoB: body.DoB,
            emailId: body.email,
            password: "Zxcv1234#",
            token: emailToken,
            referralCode: body.referralCode,
        };
        fetch("http://3.129.198.102:8080/api/auth/login", {
            "headers": {
                "accept": "application/json, text/plain, */*",
                "accept-language": "en-US,en;q=0.9",
                "accesstoken": accessToken,
                "authentication": "",
                "content-type": "application/json;charset=UTF-8",
                "sec-ch-ua": "\"Google Chrome\";v=\"93\", \" Not;A Brand\";v=\"99\", \"Chromium\";v=\"93\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"Windows\"",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin"
            },
            "referrer": "https://mail.ledgermail.io/auth/login",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": `{"emailId":${body.email},"password":"Zxcv1234#","publicKey":"xpub661MyMwAqRbcFzCieHwGHvFXJ7f55RruVMi3M56WiNhDX4iwjVEYUTNvrHzhgLnrjnP5wcKxGHsUv81UkEyUK6pupEECzUWiHUbHKQ5phHJ"}`,
            "method": "POST",
            "mode": "cors"
        })
            .then((res) => res.text())
            .then((res) => resolve(res))
            .catch((err) => reject(err));
    });
(async () => {
    const dataToken = fs.readFileSync('result_gmail.txt', 'utf-8');
    const emailTokenAll = dataToken.split('\n');
    for (let index = 0; index < emailTokenAll.length; index++) {
        const emailToken = emailTokenAll[index];
        const decoded = jwt_decode(emailToken);
        console.log(decoded);
        console.log(emailToken)

        let Terrors = {
            error: "",
        };
        let resultVerif = {error:''}
        do {
            const actionToken3 = await functionGetTokenAction(
                "6Lfz7_MbAAAAACmu3k85v-qW2aSjLTdIOR3s68Vy",
                `https://mail.ledgermail.io/auth/email-verification?token=${emailToken}`
            );
            const requestId3 = actionToken3.split("|")[1];
            let resultActionToken3 = {
                request: "",
            };
            do {
                resultActionToken3 = await functionGetRealTokenAction(requestId3);
                console.log(resultActionToken3, "3");
            } while (resultActionToken3.request === "CAPCHA_NOT_READY");

            const theRealActionToken2 = resultActionToken3.request;
            resultVerif = await verif(theRealActionToken2, emailToken, decoded);
            if (resultVerif.includes("Please contact support team (b4)") ) {
                console.log(resultVerif)
                console.log(`exit di ${emailToken}`)
                process.exit(0);
                
            }
            console.log(resultVerif);
        } while (resultVerif.includes("Invalid Access Token") || resultVerif.includes("Transaction timed out while creating user, Please try again after sometime"));
        // resultVerif = JSON.stringify(resultVerif);
        if (resultVerif.includes("User created successfully")) {
            fs.appendFileSync(`AkunList.txt`, `\n${resultVerif}`);
        }
        // console.log(`(${date()}) ${Terrors}`);
        
        

    }
    //   const emailToken = readlineSync.question("Masukan jwt nya : ");

})();
