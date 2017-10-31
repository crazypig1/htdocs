<?php
//1:设置响应头 json
header("Content-Type:application/json;charset=utf-8");
//2:连接数据库
//3:设置编码
$conn = mysqli_connect("127.0.0.1","root","","xz",3306);
//4:获取用户名参数
//5:获取密码参数
$u = $_REQUEST["uname"];
$p = $_REQUEST["upwd"];

//5.1通过正则表达式在PHP对用户参数再验证
$uPattern = '/[a-zA-Z0-9]{3,12}/';
$pPattern = '/[a-zA-Z0-9]{3,12}/';
if(!preg_match($uPattern,$u)){
 echo '{"code":-2,"msg":"用户名格式不正确"}';
 exit;//停止php运行
}
if(!preg_match($pPattern,$p)){
 echo '{"code":-2,"msg":"密码格式不正确"}';
 exit;//停止php运行
}

//6:创建SQL并且发送SQL语句
$sql = " SELECT * FROM xz_user";
$sql .=" WHERE uname='$u'";
$sql .=" AND upwd=md5($p)";
//7:获取数据库返回结果
$result = mysqli_query($conn,$sql);
//8:判断并且输出结果信息
$row = mysqli_fetch_assoc($result);
if($row==null){
 echo '{"code":-1,"msg":"用户名或密码有误"}';
}else{
 echo '{"code":1,"msg":"登录成功"}';
}
?>