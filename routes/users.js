"use strict";
var express = require('express');
var router = express.Router();
var Users = require("../database/db").users;

router.get('/', function(req, res, next) {
	res.render('users', { title: 'users' });
});
/* 创建标识. */
router.post('/create-identity', function(req, res, next) {
	var formState = req.body.formState,
		identity = req.body.identity;
	if( formState == 1 ){
		let users = new Users({ identity : identity });

		users.save(function(err, doc){
			if( err )
                return res.render('index', { msg : "未知错误，请重试！" } );
            else
                res.render('/data-model/');
		});
	}else{
		Users.count({ identity : identity },function(err, doc){
			if( doc === 1 )
				res.render('/data-model/');
            else
                return res.render('index', { msg : "标识"+ identity + "找不到！" });
		});
	}
    res.setHeader("Set-Cookie",`identity=${identity}`);
});

module.exports = router;
