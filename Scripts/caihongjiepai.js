
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
'Cookie' : `timezone=8; PHPSESSID=mpn4n9ubl94ggc82mq86g8djav; username_4eb3014d=zhucp18; token_4eb3014d=3d3c02c8b4b9da9084e4dee0cc8c734935e99ac694bd907e6017e74610e8826d1638096698; addinfo=%7B%22chkadmin%22%3A1%2C%22chkarticle%22%3A1%2C%22levelname%22%3A%22%5Cu534f%5Cu4f5c%5Cu8005%22%2C%22userid%22%3A%224486%22%2C%22useralias%22%3A%22zhucp18%22%7D; searchbetter=0; cookie_islog=1; is_mochu_us_load=mochu_us; mochu_us_notice_alert=1`,
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
