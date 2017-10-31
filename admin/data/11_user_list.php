<?php
//1:加载init.php   9:33-9:43
require("00_init.php");
//2:获取参数pno,并且判断        1
@$pno = $_REQUEST["pno"];
if(!$pno){
  $pno = 1;
}
//3:获取参数pageSize,并且判断   8
@$pageSize = $_REQUEST["pageSize"];
if(!$pageSize){
  $pageSize = 8;
}
//4:创建SQL 语句查询总记录数,发送执行
$sql = "SELECT count(*) FROM xz_user";
$result = mysqli_query($conn,$sql);
$row = mysqli_fetch_row($result);//????
//$row = mysqli_affected_rows($conn);//ADD/DEL/UP
//总记录数
$recordCount = $row[0];
//总页数
$pageCount = ceil($recordCount/$pageSize);
//开始记录数
$start = ($pno-1)*$pageSize;
//5:创建SQL 语句查询当前页内容,发送执行
$sql = " SELECT uid,uname,phone,avatar,gender,expire";
$sql .= " FROM xz_user";
$sql .= " ORDER BY uid";
$sql .= " LIMIT $start,$pageSize";
$result = mysqli_query($conn,$sql);
$rows = mysqli_fetch_all($result,MYSQLI_ASSOC);
if(mysqli_error($conn)){
  echo mysqli_error($conn);
}

//6:创建output数据保存所有数值
$output = [
 "code"=>1,
 "msg"=>"查询成功",
 "pno"=>$pno,
 "pageSize"=>$pageSize,
 "pageCount"=>$pageCount,
 "data"=>$rows,
 "recordCount"=>$recordCount
];

//7:发送json
echo json_encode($output);
