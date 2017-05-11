<?php
	/*
		[] 高版本服务器支持

		array()

		print_r(数组名)

		var_dump(数组名);
	*/

	$family = ["奶奶",'dad','mom','me','brother','sister'];
	//echo $family;//echo 不能打印数组和对象（看不到具体内容）
	print_r($family);
	echo "<br>";
	var_dump($family);

	$school = array('xx小学','xx初中','xx高中','xx大学','xx公司');
	echo "<br>";
	var_dump($school);


	/*for($i=0; $i<$school.length; $i++){
		echo $school[$i]+'<br>';
	}*/

	//count方法用于返回数组的长度
	for($i=0; $i<count($school); $i++){
		echo $school[$i].'<br>';
	}

	/*
		foreach(数组 as $value){
			 $value //遍历数组的某项
		}
	*/
	foreach($family as $v){
		echo '<br>'.$v;
	}


	/*var person = {
		name: '张三',
		age: 18
	};*/

	$person = array(
		"name" => "张三",
		"age" => 18
	);
	echo '<br>';
	var_dump($person);
	echo $person['name'];
	//echo $person->name;

	/*
		foreach(数组 as $key => $value){
			 $value //遍历数组的某项
		}
	*/
	foreach($person as $k => $v){
		echo '<br>'.$k . ' => ' . $v;
	}
?>