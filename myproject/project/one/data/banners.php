<?php
header("Content-Type:application/json;charset=utf-8");
$conn=mysqli_connect("127.0.0.1","root","","yueji","3306");
mysqli_query($conn,"SET NAMES UTF8");
$sql="SELECT * FROM yueji_index_carousel";
$result=mysqli_query($conn,$sql);
$rows=mysqli_fetch_all($result,1);
echo json_encode($rows);
?>