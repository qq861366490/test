/**
	index.js
*/

/*
	require([model1,model2,...],function(){}); 用于加载模块

	model1,model2 是需要加载的模块（依赖的js文件）
	function(){
		模块加载完成的处理函数
	}

	加载所有的模块使用的是异步加载
*/
require(['config'],function(){

	//index.js开始
	require(['banner','jquery'],function(b,$){
		console.log($);
		console.log(b);
	});

});
