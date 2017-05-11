<?php
	/*
		function 定义函数  函数名不加$
	*/
    function showName($name){
    	echo $name;
    }

    showName('张三');


    function add($num1,$num2){
    	return $num1 + $num2;
    }

    echo add(1,3);

    function isYear($year){
    	if($year < 0){
    		echo "年份非法";
    		return;
    	}
    	echo "年份合法";
    }

    isYear(-1000);
    isYear(2017);


?>