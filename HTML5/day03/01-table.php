<?php 
header("Content-Type:application/json");
require("init.php");
$sql="select uname,email,user_name from xz_user";
$result=mysqli_query($conn,$sql);
$row=mysqli_fetch_all($result,1);
echo json_encode($row);











 ?>