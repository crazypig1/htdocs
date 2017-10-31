<?php
  //1:修改响应头格式;连接数据库;设置编码
  require("init1.php");
  //2:参数  uid old_pwd  new_pwd
  $uid = $_REQUEST["uid"];
  $opwd = $_REQUEST["old_pwd"];
  $npwd = $_REQUEST["new_pwd"];
  //3:创建sql查询指定用户编码与密码是否匹配
  $sql = "SELECT * FROM xz_user WHERE uid=$uid AND upwd=$opwd";
  $result = mysqli_query($conn,$sql);
  $row = mysqli_fetch_assoc($result);
  //4:如果抓取结果null
  if($row==null){
  //5:输出错误信息 '{"code":-1,"msg":"旧密码不正确"}'
    echo '{"code":-1,"msg":"旧密码不正确"}';
  //6:停止程序
    exit;
  }
  //7:创建SQL更新密码
  $sql = "UPDATE xz_user SET upwd='$npwd' WHERE uid=$uid";
  $result = mysqli_query($conn,$sql);
  if($result==true){
    echo '{"code":1,"msg":"更新成功"}';
  }
  //8:输出正确信息 '{"code":1,"msg":"更新成功"}'

?>