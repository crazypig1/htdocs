<?php 
	#1、获取前端请求过来的数据
	$uname=$_REQUEST["uname"];
	$upwd=$_REQUEST["upwd"];
	$email=$_REQUEST["email"];
	$phone=$_REQUEST["phone"];
	$user_name=$_REQUEST["user_name"];
	$gender=$_REQUEST["gender"];
	#2、连接到数据库
	require("00-init.php");
	#3、拼sql语句
	$sql="insert into xz_user(uname,upwd,email,phone,user_name,gender) values ('$uname','$upwd','$email','$phone','$user_name',$gender)";
	#4、执行sql语句
	$result=mysqli_query($conn,$sql);
	#5、根据执行结果给出响应提示
	if($result == true){
		echo "<script>alert('注册成功');</script>";
	}else{
		echo "<script>alert('注册失败');</script>";
	}
?>