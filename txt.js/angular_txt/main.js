var app = angular.module("zouXiu",[]);

app.filter("oldPrice" , function(){
	return function(price , disconut){
		var pri = price*1;
		var dis = disconut*1;
		var oldPrice = pri;
			//当被过滤的数据格式不对或者过滤器参数格式不对,或者折扣为0,则原样返回原数据
		if(isNaN(pri) || isNaN(dis)){
			return oldPrice;
		}else if(dis == 0){
			oldPrice = "¥"+pri.toFixed(2);
		}else{
			var pri2 = pri*10/dis;
			oldPrice = "¥"+pri2.toFixed(2);
		}
		
		return oldPrice;
	}
});


app.controller("main" , function($scope , $http , $sce){
	$scope.nav = [];
	$scope.index = 0;
	
	$scope.tabList = function(i){
		$scope.index = i;
	}
	
	$http.get("http://datainfo.duapp.com/shopdata/getclass.php").success(function(data){
		for(var i = 0; i < data.length; i++){
			data[i].icon = $sce.trustAsHtml(data[i].icon);
		}
		$scope.nav = data;
	});
	
	$http.jsonp("http://datainfo.duapp.com/shopdata/getGoods.php?callback=JSON_CALLBACK").success(function(data){
//		for(var i = 0; i < data.length; i++){
//			var discount = data[i].discount*1;
//			var price = data[i].price*1;
//			
//			
//			data[i].oldPrice = data[i].price;
//			
//			if(discount != 0){
//				data[i].oldPrice = price*10/discount;
//			}
//		}
		
		$scope.goodsList = data;
		
		console.log(data);
	});
});
