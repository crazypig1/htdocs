<?php
var_dump($_FILES);
// if(!empty($_FILES["myfile"])){
// 	$picname=$_FILES["myfile"]["name"];
// 	$picsize=$_FILES["myfile"]["size"];
// 	if($picsize>1024*1024*2){
// 		die('{"code":-1,"msg":"文件过大"}');
// 	}
// 	$type=strstr($picname,".");
// 	if ($type!=".gif" && $type!=".jpg" && $type!=".png") {
// 		die('{"code":-2,"msg":"文件budui"}');
// 	}
// 	$pics=time().rand(1,9999).$type;
// 	$src=$_FILES["myfile"]["tmp_name"];
// 	$des="uploads/".$pics;
// 	echo('{"code":1,"msg":"文件cheng"}');
// }