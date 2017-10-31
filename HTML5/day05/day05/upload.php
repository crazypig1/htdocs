<?php
 //1:获取上传文件信息
 $mypic = $_FILES["myFile"];
 //2:判断是否顾在上传文件
 if(!empty($mypic)){
 $picname = $_FILES["myFile"]["name"];
 $picsize =$_FILES["myFile"]["size"];
 //3:判断文件大小 2m  2*1024*1024
 if($picsize>2*1024*1024){
   echo "图片大小不能超过 2MB 请重选";
   exit;//终止当前php运行
 }
 //4:判断类型 jpg gif png
 $type = strstr($picname,'.');//截取字符串 .jpg
 if($type != ".gif" && $type != ".jpg" && $type != ".png"){
     echo "图片格式不正确";
     exit;
 }
 //5:创建新文件名
 //time 时间戳/rand随机数/后缀名称
 $pics = time().rand(1,9999).$type;
 //6:将临时文件移到指定目录
 move_uploaded_file($_FILES["myFile"]["tmp_name"],
 "uploads/".$pics);
 }
?>