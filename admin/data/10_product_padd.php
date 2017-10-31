<?php
//作用:获取产品类别表中数据
//:xz_laptop_family
//9:30~9:35
//1:加载init.php程序
require("00_init.php");
//2:创建SQL语句并且发送SQL
$sql = "SELECT fid,name FROM xz_laptop_family";
//3:抓取多行记录
$result = mysqli_query($conn,$sql);
$rows = mysqli_fetch_all($result,MYSQLI_ASSOC);
//4:转换json格式并且发送
echo json_encode($rows);
?>