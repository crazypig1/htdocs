<?php 
$upwd=$_REQUEST['upwd'];
$email=$_REQUEST['email'];
$phone=$_REQUEST['phone'];
$user_name=$_REQUEST['user_name'];
$gender=$_REQUEST['gender'];
$uid=$_REQUEST['uid'];
require("00-init.php");
$sql  = "update xz_user set";

$sql .= " upwd='$upwd',";
$sql .= "email='$email',";
$sql .= "phone='$phone',";
$sql .= "user_name='$user_name',";
$sql .= "gender='$gender'";
$sql .= "where uid=$uid";
$result=mysqli_query($conn,$sql);
if ($result==true) {
	echo "更新成功";
}else{
	echo "更新失败";
}



 ?>