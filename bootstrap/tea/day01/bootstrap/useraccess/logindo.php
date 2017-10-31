<?php
  //1:修改响应头格式为json
  header("Content-Type:application/json;charset=UTF-8");
  //2:创建数据库连接
  $conn = mysqli_connect("127.0.0.1","root","","ua",3306);
  //3:设置编码
  mysqli_query($conn,"SET NAMES UTF8");
  //4:获取用户登录二个参数  uname upwd
  $u = $_REQUEST["uname"];
  $p = $_REQUEST["upwd"];
  //5:创建SQL语句并且发送SQL
  $sql = "SELECT * FROM user WHERE uname='$u' AND upwd='$p'";
  $result = mysqli_query($conn,$sql);
  $row = mysqli_fetch_assoc($result);
  //6:判断登录成功
  //7:返回信息 uid type
  if($row==null){
     echo '{"code":-1,"msg":"用户名或密码错误"}';
  }else{
     $type = $row['type'];
     $uid = $row['uid'];
     echo '{"code":1,"type":'.$type.',"uid":'.$uid.'}';
  }
?>