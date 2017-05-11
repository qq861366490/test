var db = require('../db/mongo.js');
var event = require('../events/events.js');

var list = function (res) {
    event.removeAllListeners();
    var dObj = {};
    event.once('DB_CONNECT_ERROR', function (data) {
        dObj.code = -1;
        dObj.txt = '数据库连接失败';
        res.json(dObj);
    });
    event.once('DB_FIND_SUCCESS', function (data) {
        res.json(data);
    });
    db.list();
};

module.exports = list;