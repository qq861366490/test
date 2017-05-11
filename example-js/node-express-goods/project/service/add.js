var db = require('../db/mongo.js');
var event = require('../events/events.js');

var add = function (dataObj, res) {
    event.removeAllListeners();
    var dObj = {};
    event.once('DB_CONNECT_ERROR', function (data) {
        dObj.code = -1;
        dObj.txt = '数据库连接失败';
        res.json(dObj);
    });
    event.once('DB_INSERT_ERROR', function (data) {
        dObj.code = -2;
        dObj.txt = '数据库数据添加失败';
        res.json(dObj);
    });
    event.once('DB_INSERT_SUCCESS', function (data) {
        dObj.code = 2;
        dObj.txt = '恭喜你，录入成功！';
        res.json(dObj);
    });
    event.once('DB_FIND_SUCCESS', function (data) {
        if (!data.length) {
            dObj.code = 0;
            dObj.txt = '商品可录入';
            db.insert(dataObj);
        } else {
            dObj.code = 1;
            dObj.txt = '商品已存在';
            res.json(dObj);
        };
    });
    db.find0(dataObj.goodsName);
};

module.exports = add;
