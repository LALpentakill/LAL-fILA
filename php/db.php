<?php
	// 数据库相关配置信息
	$config = array(
		"host" => "localhost",
		"user" => "root",
		"pwd" => "",
		"dbname" => "yonghu"
	);
	
	// 连接数据库
	mysql_connect($config["host"], $config["lal"], $config["pwd"]);
	
	mysql_select_db($config["dbname"]);

	// 设置php和mysql之间连接的编码方式
	mysql_query("set charset 'utf8'");
	mysql_query("set character set 'utf8'");
	
?>