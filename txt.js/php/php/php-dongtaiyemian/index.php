<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
		<style type="text/css">
			.container {
				width: 1000px;
				margin: 100px auto;
			}
			.container .vedio-item {
				float: left;
				width: 195px;
				height: 150px;
				margin: 20px 23px;
			}
		</style>
	</head>
	<body>
		
		<div class="container">
			<?php
				//文件引入  include  "文件名";
				include "data.php";
				//模拟读取数据库
				$data = new Data();
				$vedios = $data->getVideoData(4);
				//var_dump( $vedios );

				//遍历数据  输出到页面
				foreach($vedios as $v){
					echo '<div class="vedio-item">';
					echo	'<img src="imgs/'.$v['img-url'].'" class="vedio-img">';
					echo	'<p class="vedio-title">'.$v['intro'].'</p>';
					echo '</div>';
				}
			?>
			
		</div>

	</body>
</html>