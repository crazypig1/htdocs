<?php
  //功能:删除指定商品
  //ALTER TABLE xz_user ADD isdel INT NOT NULL DEFAULT 0;
  //1:加载init.php 文件
  require("init1.php");
  //2:创建SQL语句
  @$uid = $_REQUEST["uid"];
  $sql = "UPDATE xz_user SET isdel = 1 WHERE uid = $uid";
  //3:发送sql语句
  $result = mysqli_query($conn,$sql);
  //4:判断返回结果
  if($result==true){
    echo '{"code":1,"msg":"删除成功"}';
  }else{
    echo '{"code":-1,"msg":"删除失败 "}';
  }
?>