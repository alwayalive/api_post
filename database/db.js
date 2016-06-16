var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/chihuo'); //；连接数据库
var Schema = mongoose.Schema; //  创建模型
var userSchema = new Schema({
    identity: String
}); //  定义了一个新的模型，但是此模式还未和users集合有关联
var dataModelSchema = new Schema({
    _json : Schema.Types.Mixed,
    url : String,
    method : String,
    name : String,
    createTime : Date,
    identity: String,
    createIdentity: String
});
exports.users = db.model('users', userSchema); //  与users集合关联
exports.dataModel = db.model('data-models', dataModelSchema); //  与dataModel集合关联

