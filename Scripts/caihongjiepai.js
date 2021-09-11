
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `http://caihongjiepai.me/zb_users/plugin/mochu_us/cmd.php?act=qiandao`;
const method = `POST`;
const headers = {
'Accept' : `application/json, text/javascript, */*; q=0.01`,
'Accept-Encoding' : `gzip, deflate`,
'Origin' : `http://caihongjiepai.me`,
'Cookie' : `is_mochu_us_load=mochu_us; addinfo=%7B%22chkadmin%22%3A1%2C%22chkarticle%22%3A1%2C%22levelname%22%3A%22%5Cu534f%5Cu4f5c%5Cu8005%22%2C%22userid%22%3A%224486%22%2C%22useralias%22%3A%22zhucp18%22%7D; cookie_islog=1; token=10188323d49916aec83ff7b90093a994f024cc5bf5e088bc3a900d1d31f0b56b1633947921; username=zhucp18; PHPSESSID=jc85hbfgo5a844fhrgca6mgjo6; timezone=8`,
'Connection' : `keep-alive`,
'Host' : `caihongjiepai.me`,
'User-Agent' : `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_5) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/93 Version/11.1.1 Safari/605.1.15`,
'Referer' : `http://caihongjiepai.me/Ucenter`,
'Accept-Language' : `zh-cn`,
'X-Requested-With' : `XMLHttpRequest`
};
const body = ``;

const myRequest = {
    url: url,
    method: method,
    headers: headers,
    body: body
};

$task.fetch(myRequest).then(response => {
    console.log(response.statusCode + "\n\n" + response.body);
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});
