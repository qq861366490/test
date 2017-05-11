<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title></title>
</head>
<body>
	<?php
		$name = '皮卡丘';

		//echo 打印简单数据类型（字符串、数字、布尔值）
		echo $name;

		echo '<br>';

		$num1 = 10;
		$num2 = 20;
		echo $num1+$num2;

		echo '<br>';

		$flag = true;

		echo $flag;

		/*
			= += -+ *= /= %=
		*/
		echo '<br>';
		$num1 += 5;
		echo $num1;

		echo '<br>';
		echo $num1*$num2;

		echo '<br>';
		$str1 = "how are you!";
		$str2 = "I`m fine , thanks";
		echo $str1 . $str2;

		echo '<br>';
		echo "$str1,$str2";

		echo '<br>';
		echo "\$str1=$str1";
	?>
</body>
</html>