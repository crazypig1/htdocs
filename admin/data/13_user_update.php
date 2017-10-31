<?php
//功能:获取用户提供旧密码和新密码 9:30--9:40
//如果旧密码与数据库中保存一致，则更新密码
//否则：提供您输入旧密码有误，请检查后现试
//1:加载init.php
require("00_init.php");
//2:获取参数:uid/old_pwd/new_pwd
$uid    = $_REQUEST["uid"];
$old_pwd = $_REQUEST["old_pwd"];
$new_pwd = $_REQUEST["new_pwd"];
//3:创建二个SQL
//  SELECT * FROM xz_user
//  WHERE uid=$uid AND upwd='$old_pwd';
//  UPDATE xz_user SET upwd='$new_pwd'
//  WHERE uid=$uid
$sql_select=" SELECT * FROM xz_user";
$sql_select.=" WHERE uid=$uid AND upwd=md5($old_pwd)";

$result = mysqli_query($conn,$sql_select);
$row = mysqli_fetch_assoc($result);
if($row==null){
  die('{"code":-1,"msg":"旧密有误"}');
}
$sql_update=" UPDATE xz_user SET upwd=md5($new_pwd)";
$sql_update.=" WHERE uid=$uid";
$result = mysqli_query($conn,$sql_update);
$rowCount = mysqli_affected_rows($conn);
if($result&&$rowCount>0){
  echo ('{"code":1,"msg":"密码更新成功"}');
}else{
  echo ('{"code":-2,"msg":"更新失败"}');
}
//4:查询旧密码是否与数据库中内容匹配
//5:匹配则更新密码
//6:并且返回成功或失败信息
