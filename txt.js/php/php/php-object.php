<?php
	/*创建对象*/
	class Person {
		//定义属性 遍历前面一定要加修饰符 （public  private等）
		public $name = "pine";
		public $age = 18;

		//定义方法
		function showInfo(){
			echo $this->name;
		}
	}

	$zs = new Person();
	//访问对象的属性  使用 ->   对象->属性名
	$zs->showInfo();
    
    var_dump($zs);

	/*
		function Person(){
			this.name = 'pine';
			function showInfo(){
				console.log(this.name);
			}
		}
	*/
?>