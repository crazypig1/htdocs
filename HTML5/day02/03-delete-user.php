<?php 
	#1、接收前端传递过来的要删除的用户的ID值
	$uid=$_REQUEST["uid"];
	#2、数据库的连接
	require("00-init.php");
	#3、拼删除的sql语句
	$sql="delete from xz_user where uid=$uid";
	#4、执行删除并接收结果
	$result=mysqli_query($conn,$sql);
	#5、根据删除的结果给出响应(响应获取一个 alert("..."))
	if($result == true){
		//echo "alert('删除成功');";
		echo "1";
	}else{
		//echo "alert('删除失败');";
		echo "0";
	}
?>