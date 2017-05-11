<?php
	class User {
		public $users = array(
			array(
				"account" => "pine",
				"password" => "123456"
			),
			array(
				"account" => "zzy",
				"password" => "123456"
			),
			array(
				"account" => "trj",
				"password" => "654321"
			),
			array(
				"account" => "zf",
				"password" => "999999"
			)
		);
		function checkUserInfo($account,$psw){
			//遍历users，模拟数据库查询工作
			foreach($this->users as $v){
				//比对
				if($v['account'] == $account && $v['password'] == $psw){
					return true;
				}
			}
			return false;
		}
	}
?>