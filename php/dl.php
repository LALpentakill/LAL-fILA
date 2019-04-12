<?php 
		$username=$_GET["username"];
	$password=$_GET["password"];
	
mysql_connect("localhost","root","");
mysql_select_db("lal");
mysql_query("set charset 'utf8'");
mysql_query("set character set 'utf8'");

	$sql = "select * from yonghu where username='$username' and password='$password'";

	$res = mysql_query($sql);

	if(mysql_num_rows($res) >= 1){
		echo json_encode(array('res_code' => 1, 'res_message' => '登录成功'));
	}else {
		echo json_encode(array('res_code' => 0, 'res_message' => '用户名或密码错误'));
	}

 ?>