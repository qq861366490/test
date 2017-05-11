var pluObj = angular.module("plugin" , []);

pluObj.factory("getAge" , function(){
	var age = 0;
	
	return {
		setAge : function(newAge){
			age = newAge;
		},
		getAge : function(){
			return age;
		}
	}
});

pluObj.factory("sayWelcome" , function(){
	return function(){
		console.log("你好,欢迎来到中国!");
	}
})

pluObj.provider("sayWelcome2" , function(){
	return {
		country : "中国",
		$get : function(data){
			var thisObj = this;
			return function(){
				console.log(data + ",欢迎来到"+ thisObj.country +"!");
			}
		}
	}
})