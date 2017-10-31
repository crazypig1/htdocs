<?php 
header("Content-Type:application/json;charset=utf-8");
$uname=$_REQUEST["uname"];
$upwd=$_REQUEST["upwd"];
$conn=mysqli_connect("127.0.0.1","root","","yueji","3306");
mysqli_query($conn,"SET NAMES UTF8");
$unamePattern = '/[a-zA-Z0-9]{3,12}/';
$upwdPattern = '/[a-zA-Z0-9]{3,12}/';
if(!preg_match($unamePattern,$uname)){
 echo '{"code":-2,"msg":"用户名格式不正确"}';
 exit;//停止php运行
}
if(!preg_match($upwdPattern,$upwd)){
 echo '{"code":-2,"msg":"密码格式不正确"}';
 exit;//停止php运行
}
$sql="SELECT * FROM yueji_user WHERE uname='$uname' AND upwd='$upwd'";
$result=mysqli_query($conn,$sql);
$row = mysqli_fetch_assoc($result);
if ($row==null) {
	echo '{"code":-1,"msg":"用户名或密码有误"}';
}else{
	 echo '{"code":1,"msg":"登录成功"}';
}
?>