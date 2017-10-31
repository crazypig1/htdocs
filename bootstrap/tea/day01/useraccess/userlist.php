<?php
   //1:修改响应头格式为json
   header("Content-Type:application/json;charset=UTF-8");
   //2:创建数据库连接
   $conn = mysqli_connect("127.0.0.1","root","","ua",3306);
   //3:设置编码
   mysqli_query($conn,"SET NAMES UTF8");
   //5:创建SQL语句并且发送SQL    10:32--10:35
   $sql = "SELECT * FROM user";
   $result = mysqli_query($conn,$sql);
   $rows = mysqli_fetch_all($result,MYSQLI_ASSOC);
   echo json_encode($rows);
?>