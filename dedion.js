const superagent = require('superagent');
const fs = require('fs');
require('superagent-proxy')(superagent);
const colors = require('colors');
const ua = require('random-useragent');
const delay = require('delay');

async function getnama() {
    return new Promise((resolve, reject) => {
      superagent
        .get("https://api.randomuser.me/")
        .then((res) => {
          resolve(JSON.parse(res.text).results[0]);
        });
    });
  }

  var nama =  getnama()
  console.log(nama)