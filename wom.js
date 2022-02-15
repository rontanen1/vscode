const request = require('request'), ProxyAgent = require('proxy-agent');
const cloudflareScraper = require('cloudflare-scraper');

(async () => {
    try {
      const response = await cloudflareScraper.get('https://swee.ps/dahWqP_VEQCAOF');
      //console.log(response);
    } catch (error) {
      //console.log(error);
    }

generateRandomProxy(function(proxy){
    console.log(proxy);
    var agent = new ProxyAgent(proxy.curl);
    var dataString = 'pid=103687&email=rainmen999%40omdlism.com';
    headers = {
        'authority': 'app.viralsweep.com',
        'x-kl-ajax-request': 'Ajax_Request',
        'sec-ch-ua-mobile': '?0',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36',
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'accept': '*/*',
        'x-requested-with': 'XMLHttpRequest',
        'sec-ch-ua-platform': '"Windows"',
        'sec-ch-ua': '" Not;A Brand";v="99", "Google Chrome";v="97", "Chromium";v="97"',
        'origin': 'https://app.viralsweep.com',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'referer': 'https://app.viralsweep.com/sweeps/full/51124e-103687?framed=1&__cf_chl_jschl_tk__=pMmMgfW8h4jwHT0MYd2FHjGPjUHhqQPxlkGjJ7C7yYA-1643135785-0-gaNycGzNB_0',
        'accept-language': 'id-ID,id;q=0.9',
        'cookie': 'PHPSESSID=0a0d4c6725d3aa51ff0abe24ad3c4e07; sfsf=1; rid_103687=2281072; cf_chl_2=571fc508d5f826b; cf_chl_prog=x12; cf_clearance=xP74UGchuIM29OecbTDhB5Wr3arY0ozIHzOz3GWytgI-1643135790-0-150; viewed_103687=1643135791; _ga=GA1.3.175857353.1643135799; _gid=GA1.3.513006732.1643135799; __cf_bm=SRUL0MsAvHz0DiyDLz..ySMce2T5xUMlNbSUDSW0Uf0-1643135794-0-ATejqiU9It2ooU3UkCP374Bt1BhN+LLbgOnrcukwHnFjlUDRuLd1dozb4pr7GL421RdfVSz7aVW4P9WGSz9hr+KBUy6Vrl9FNBDd77wRwmDBOGDEVa3ejNgyPWE4RO72BuXWjrE+I9lUN9nIxdmPVxa+blXit8KR2WClsXEs+8M4; _gat_viralsweep_tracker1=1'
    };

    request({
        uri: "https://swee.ps/dahWqP_VEQCAOF",
        method: "POST",
        agent: agent,
        headers: headers,
        body: dataString,
        timeout: 5000,
    },
    function callback(error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body);
        }
    });       
})

function generateRandomProxy(cb){
    request.get('https://gimmeproxy.com/api/getProxy?get=true&cookies=true&country=US&supportsHttps=true',{json:true},function(err,res){
        if(!err){cb(res.body)}
        else{console.log('problem obtaining proxy')}
    })
}

})();