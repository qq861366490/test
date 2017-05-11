var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '商品录入' ,page: 'index'});
});

router.get('/list', function(req, res, next) {
  res.render('list', { title: '商品列表' ,page: 'list'});
});

router.get('/goods', function(req, res, next) {
  res.render('goods', { title: '商品详情' ,page: 'goods'});
});


module.exports = router;
