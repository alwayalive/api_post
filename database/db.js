var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/chihuo'); //；连接数据库
var Schema = mongoose.Schema; //  创建模型
var userScheMa = new Schema({
	id : String,
    identity: String,
}); //  定义了一个新的模型，但是此模式还未和users集合有关联
exports.users = db.model('users', userScheMa); //  与users集合关联

