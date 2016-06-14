var express = require('express');
var router = express.Router();
var Users = require("../database/db").users;

router.get('/', function(req, res, next) {
	res.render('users', { title: 'users' });
});
/* 创建标识. */
router.post('/create-identity', function(req, res, next) {
	var users = new Users({ identity : req.body.identity });

	users.save(function(err, doc){
		if( err )
			return res.redirect('/');
		res.render('success', { title: 'success' });
	});
});

module.exports = router;
