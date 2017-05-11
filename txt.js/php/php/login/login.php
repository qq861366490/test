<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
	</head>
	<body>
		<?php
			//获取表单的值

			/*
				$_GET 接收通过get方式提交的数据（表单的get方法，后者直接请求链接）
					  get方式常用于从服务器获取数据

				$_POST  接收通过post方式提交的数据
					 post方式常用于向服务器提交数据

				$_GET 和 $_POST  都是数组
			*/
			/*var_dump($_GET);
			echo '<br>';
			var_dump($_POST);

			echo '<br>'.$_POST['uname'];

			echo '<br>'.$_POST['password'];*/

			//模拟连接数据库（引入文件）
			include "user.php";

			//模拟查询
			$users = new User();
			$result = $users->checkUserInfo($_POST['uname'],$_POST['password']);

			//验证是否登录成功
			echo $result ? '登录成功' : '登录失败';
		?>
		<a href="#"><span id="time" style="color: red;font-size: 18px;">3</span>后自动跳转。</a>
		<script>
			'use strict';
			window.onload = function(){
				var timeBox = document.getElementById('time');
				var num = 3;
				var timer = setInterval(function(){
					num--;
					if(num <= 0){
						clearInterval(timer);
						num = 0;
						//跳转页面
						<?php
							if($result){
								echo " location.href = 'http://www.baidu.com' ";
							}else{
								echo " location.href = 'index.php' ";
							}
						?>
						
					}
					timeBox.innerHTML = num;
				},1000);
			}
		</script>
	</body>
</html>