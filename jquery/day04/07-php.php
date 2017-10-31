<?php 
header("Content-Type:application/json");
require_once("init.php");
@$uname=$_REQUEST["uname"];
@$uname=$_SESSION["uname"];
@$upwd=$_REQUEST["upwd"];
$sql="select uid ,uname from xz_user where uname='$uname' and upwd='upwd'";
$result=sql_execute($sql);
if (count($result)) {
	# code...
	echo json_encode(
		["ok"=>1,"msg"=>$result[0]["uname"]]
	);
}else{
	echo json_encode(["ok"=>0,"msg"=>"用户名密码错误"]);
}
 ?>