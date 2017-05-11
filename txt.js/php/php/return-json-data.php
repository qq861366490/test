<?php
	//输出  返回
	//echo 'hello';

	/*
		json数据

		[
			{},
			{},
			{}
		]
	*/

	$weather = array(
		array(
			"date" => '周一',
			"temperature" => '14',
			"weather" => '阴'
		),
		array(
			"date" => '周二',
			"temperature" => '10',
			"weather" => '阴'
		),
		array(
			"date" => '周三',
			"temperature" => '6',
			"weather" => '小雨转中雨'
		)
	);

	echo json_encode( $weather );
	//echo "<script>console.log(".json_encode( $weather ).");</script>";

	echo '<br>';
	$result = array(
		'status' => 1,
		'info' => '登录成功',
		'login_time' => '20170220'
	);
	
	echo json_encode($result);
?>