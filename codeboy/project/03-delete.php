<?php 
$uid=$_REQUEST["uid"];
require("00-init.php");
$sql="DELETE FROM xz_user where uid='$uid'";
$result=mysqli_query($conn,$sql);
if ($result) {
	echo "删除成功";
}else{
	echo "删除失败";
}

 ?>