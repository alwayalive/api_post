"use strict";
var DataModel = require("../database/db").dataModel;
var sendRequest = require("../bin/socket").sendRequest;
var testOfData = require("../model/comments");
// var assert = require("assert");
var assert = require("chai").assert;
var expect = require("chai").expect;

// decribe("websocket sendRequest() test", ()=> {
//
//     it("send [1,2,3,4,5] to server,return the result of the arr", ()=> {
//         let postModel = testOfData.dataModel1,
//             postData = [1, 2, 3, 4, 5];
//         sendRequest(postModel.url, postModel.method, postData, (data)=> {
//             assert.equal(15, data);
//         });
//     });
//
//     it("fetch data list from server", ()=> {
//         let postModel = testOfData.dataModel2;
//         sendRequest(postModel.url, postModel.null, (data)=> {
//             assert.equal( "object", typeof data);
//             assert.equal( "test", data.name);
//         });
//     });
// });

describe("deta model test", ()=> {
    // describe("insert data-model to db", ()=> {
    //     it(" insert test of data to db , return save count",(done)=>{
    //         let postModel = testOfData.dataModel1;
    //         let dataModel = new DataModel(postModel);
    //         dataModel.save((err,data)=>{
    //             expect(err).to.be.null;
    //             done();
    //         });
    //     });
    // });

    describe("search data-model from db", ()=> {
        it("fetch dat list from db",(done)=>{
            let postModel = testOfData.dataModel1;
            DataModel.find((err,data)=>{
                assert.equal( postModel.url, data[0].url);
                assert.equal( postModel.method, data[0].method);
                assert.equal( postModel.name, data[0].name);
                // assert.equal( postModel.createTime, data[0].createTime);
                assert.equal( postModel.identity, data[0].identity);
                done();
            });
        });
    });

    // describe("request api", ()=> {
    //
    // });
});