<?php
	$num = 10;
	$result = 0;
	if($num > 10){
		$result = 10;
	}else{
		$result = 20;
	}
	echo $result;

	echo '<br>';
	$result1 = $num > 5 ? 10 : 20;
	echo $result1;
?>