<?php 
$currentPage=$_REQUEST['currentPage'];
if ($currentPage==null) {
	$currentPage=1;
}
$pageSize=$_REQUEST['pageSize'];
if ($pageSize==null) {
	$pageSize=10;
}

$start=($currentPage-1)*$pageSize;
require("00-init.php");
$sql="select * from xz_user limit $start,$pageSize";
$result=mysqli_query($conn,$sql);
$array=mysqli_fetch_all($result,1);
// var_dump($array);
$sql="select count(*) from xz_user";
$result=mysqli_query($conn,$sql);
$row=mysqli_fetch_row($result);
$total=$row[0];
// echo "$total<br>";
$totalPage=ceil($total/$pageSize);
// echo "$totalPage";
$prePage=$currentPage<=1?1:$currentPage-1;
$nextPage=$currentPage>=$totalPage?$totalPage:$currentPage+1;
echo "$prePage<br>";
echo "$nextPage";
$Info="{\"first\":1,\"prePage\":$prePage,\"nextPage\":$nextPage,\"totalPage\":$totalPage}";
Array_push($array,$Info);
echo json_encode($array);
?>