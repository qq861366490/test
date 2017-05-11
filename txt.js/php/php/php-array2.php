<?php
	/*
		二维数组
	*/
	$persons = array(
		array(
			"name" => "张三",
			"age" => "18"
		),
		array(
			"name" => "李四",
			"age" => "19"
		),
		array(
			"name" => "王二",
			"age" => "20"
		)
	);

	/*
		[
			{},
			{},
			{}
		]
	*/

	//访问第二个人的名字
	echo $persons[1]['name'];

	foreach($persons as $v){
		//print_r($v);
		echo '<br>';
		//var_dump($v);
		echo '<br>名字是' . $v['name'] .',今年' . $v['age'];
	}
?>