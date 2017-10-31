<?php 
require("00_init.php");
@$kw=$_REQUEST["kw"];
@$low=$_REQUEST["low"];
@$high=$_REQUEST["high"];
@$pno=$_REQUEST["pno"];
if (!$kw) $kw="";
if (!$low) $low=0;
if (!$high) $high=2100000000;
if (!$pno) $pno=1;
$sql="SELECT count(*) FROM xz_laptop";
$sql.=" WHERE title LIKE '%$kw%'";
$sql.=" AND price >=$low";
$sql.=" AND price <=$high";
$result=mysqli_query($conn,$sql);
$row=mysqli_fetch_row($result);
$recordCount=intval($row[0]);
$pageSize=8;
$offset=($pno-1)*$pageSize;
$sql = " SELECT p.lid,p.title,p.price";
$sql .=" ,p.spec,p.expire";
$sql .=" ,pic.sm,f.name";
$sql .=" FROM xz_laptop p,";
$sql .=" xz_laptop_family f,";
$sql .=" xz_laptop_pic pic";
$sql.=" WHERE p.title like '%$kw%'";
$sql.=" AND p.price >= $low";
$sql.=" AND p.price <= $high";
$sql .=" GROUP BY p.lid";
$sql .=" LIMIT $offset,$pageSize";
$result = mysqli_query($conn,$sql);
$rows = mysqli_fetch_all($result,1);
$pageCount=ceil($recordCount/$pageSize);
$output=[
	"kw"=>$kw,
	"low"=>$low,
	"high"=>$high,
	"pno"=>$pno,
	"pageSize"=>$pageSize,
	"pageCount"=>$pageCount,
	"data"=>$rows
];
echo json_encode($output);
?>