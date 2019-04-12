<?php
	$username=$_GET["username"];
	$password=$_GET["password"];
	
mysql_connect("localhost","root","");
mysql_select_db("lal");
mysql_query("set charset 'utf8'");
mysql_query("set character set 'utf8'");
$spl="select * from yonghu where username ='$username'";
//echo $spl;
$res=mysql_query($spl);
if(mysql_num_rows($res)>0){
	echo Json_encode(array('res_code' => 0, 'res_message' => "用户名已存在"));
}else{
	$lal="insert  into yonghu (username ,password) value ('$username','$password')";
	$rese=mysql_query($lal);
	if($rese) {
			echo json_encode(array('res_code' => 1, 'res_message' => "注册成功"));
		}else{
			echo json_encode(array('res_code' => 0, 'res_message' => "网络错误"));
		}
}

?>
