<?php
//10:21--10:31
//1:加载 init.php 文件
require("00_init.php");
//2:获取参数uid
$uid = $_REQUEST["uid"];
//3:创建SQL语句并且执行sql
$sql = " UPDATE xz_user SET expire = '1'";
$sql .= " WHERE uid=$uid";
//4:判断
$result = mysqli_query($conn,$sql);
$row = mysqli_affected_rows($conn);
if($result && $row>0){
 echo '{"code":1,"msg":"删除成功"}';
}else{
 echo '{"code":-1,"msg":"删除失败"}';
}
?>