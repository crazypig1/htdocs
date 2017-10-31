<?php 
	#1、接收前端传递过来的数据
	$uname=$_REQUEST["uname"];
	#2、连接到数据库
	require("00-init.php");
	#3、拼sql语句
	$sql="select * from xz_user where uname='$uname'";
	#4、执行sql语句，并得到结果
	$result=mysqli_query($conn,$sql);
	#5、获取一行，并判断是否为空，给出响应
	$row = mysqli_fetch_row($result);
	if($row == null){
		echo "通过";
	}else{
		echo "用户名称已存在";
	}
?>