<?php
  //10:42--10:48
  //1:修改响应头格式;连接数据库;修改编码
  require("init1.php");
  //2:获取参数 lid price
  @$l = $_REQUEST["lid"];
  @$p = $_REQUEST["price"];
  //3:创建SQL语句并且发送SQL语句
  $sql = "UPDATE xz_laptop SET price=$p ";
  $sql .= " WHERE lid=$l";
  $result = mysqli_query($conn,$sql);
  //4:判断返回结果输出json
  if($result===true){
     echo '{"code":1,"msg":"更新成功"}';
  }else{
     echo '{"code":-1,"msg":"更新失败"}';
  }
?>