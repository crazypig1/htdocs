<?php 
	#1、接收前端传递过来的数据
	$upwd=$_REQUEST["upwd"];
	$email=$_REQUEST["email"];
	$phone=$_REQUEST["phone"];
	$user_name=$_REQUEST["user_name"];
	$gender=$_REQUEST["gender"];
	$uid=$_REQUEST["uid"];
	#2、连接数据库
	require("00-init.php");
	#3、拼 更新的 sql 语句
	$sql = "update xz_user set ";
	$sql .= "upwd='$upwd',";
	$sql .= "email='$email',";
	$sql .= "phone='$phone',";
	$sql .= "user_name='$user_name',";
	$sql .= "gender=$gender ";
	$sql .= "where uid=$uid";
	#4、执行 sql 并获取结果并保存在 $result 中
	$result = mysqli_query($conn,$sql);
	#5、根据 $result 给出更新成功 或 失败的提示
	if($result == true){
		#echo "更新成功";
		$msg = "<script>";
		$msg .= "alert('更新成功!');";
		$msg .= "location.href='00-homework.html';";
		$msg .= "</script>";
		echo $msg;
	}else{
		echo "更新失败";
	}
?>