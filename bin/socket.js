"use strict";
let http = require("http"),
    queryString = require("querystring"),
    _url = require("url");
/**
 * 请求API接口
 * @param url 请求地址
 * @param method    请求方法GET、POST等
 * @param postData  请求数据JSON格式
 * @param fn    API响应后的回调函数
 */
function sendRequest(url, method, postData, fn) {
    let parsedUrl = _url.parse(url);
    //1、设置请求参数
    let options = {
        port: _url.port,
        method,
        protocol: _url.protocol,
        host: _url.host,
        hostname: _url.host
    };
    //2、设置请求发送完毕时回调事件
    let req = http.request(options, (res)=> {
        //设置响应编码
        res.setEncoding('utf8');
        //获取响应数据
        res.on('data', (data) => {
            fn(data);
        });
        //数据接收完毕
        res.on('end', () => {
            console.log('No more data in response.')
        })
    });
    //3、发送请求
    req.write(queryString.stringify(postData));
    //4、结束请求发送
    req.end();
}

module.exports = {
    sendRequest
};