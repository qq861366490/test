var express = require('express');
var router = express.Router();
var goods = require('../service/goods.js');
var add = require('../service/add.js');
var list = require('../service/list.js');

router.post('/add', function (req, res, next) {
    var dataObj = req.body;
    add(dataObj, res);
});

router.post('/list', function (req, res, next) {
    list(res);
});

router.post('/goods', function (req, res, next) {
    var dataObj = req.body;
    goods(dataObj, res);
});

module.exports = router;