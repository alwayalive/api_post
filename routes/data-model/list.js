"use strict";
var express = require("express");
var Router = express.Router();
var DataModel = require("../../database/db").dataModel;

/**
 * 跳转API主页
 */
Router.get("/", function (req, res) {
    res.render("data-model/list");
});

/**
 * 新增API数据格式到数据库中，并请求API进行测试
 */
Router.post("/new-api", (req, res)=> {
    try {
        //1、获取输入数据
        let dataArray = req.body.dataArray,
            url = req.body.url,
            method = req.body.method,
            name = req.body.name,
            createTime = Date.now(),
            identity = req.body.identity;
        //2、创建mongodb数据模型，获取模型实例
        let dataModel = new DataModel({
            _json: dataArray,
            url,
            method,
            name,
            createTime,
            identity
        });
        //3、保存数据模型到数据库，然后请求API测试
        dataModel.save((err)=> {
            if (err)
                return res.json({code: 1, msg: err});
            //发送请求
            sendRequest(url, method, dataArray, (str)=> {
                let data = JSON.parse(str);
                res.json(data);
            });
        });
    } catch (e) {
        res.json({code: 1, msg: e})
    }
});
/**
 * API 测试路由
 */
Router.post("api-test", (req, res)=> {
    let url = req.body.url,
        method = req.body.method,
        dataArray = req.body.dataArray;
    //发送请求
    sendRequest(url, method, dataArray, (str)=> {
        let data = JSON.parse(str); //接收数据为字符串格式，转换格式
        res.json(data);
    });
});

/**
 * 请求API接口
 * @param url 请求地址
 * @param method    请求方法GET、POST等
 * @param postData  请求数据JSON格式
 * @param fn    API响应后的回调函数
 */
function sendRequest(url, method, postData, fn) {
    let http = require("http"),
        queryString = require("querystring"),
        _url = require("url"),
        parsedUrl = _url.parse(url);
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
module.exports = Router;