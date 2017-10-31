<?php
 //1:设备响应头格式
 //2:连接数据库
 //3:设置编码
 require("00_init.php");
 //4:获取参数 lid
 $lid = $_REQUEST["lid"];
 //5:创建SQL语句并且发送SQL语句 9:33-9:35
 $sql = "UPDATE xz_laptop SET expire = 1 WHERE lid = $lid";
 $result = mysqli_query($conn,$sql);
 //更新影响行数
 $rowsCount = mysqli_affected_rows($conn);
 //6:将结果返回客户
 if($result&&$rowsCount>0){
  //json 左侧key 双引号/右侧val 字符串双引号
  echo '{"code":1,"msg":"删除成功"}';
 }else{
  echo '{"code":-1,"msg":"删除失败"}';
 }
?>