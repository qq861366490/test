/**
	轮播插件
*/

/*
	define 用于定义一个符合规范的模块
	define([model1,model2,...],function(){
	
	});
	model1,model2是当前模块依赖的js模块
	function(){}  模块的内容
*/
//依赖某些模块
define(['jquery'],function($){

	console.log($);

	var banner = {
		init: function(){

		}
	};

	return banner;

});

//不依赖其他文件
/*define(function(){

	var banner = {
		init: function(){

		}
	};

	return banner;
});*/