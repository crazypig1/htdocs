<?php
//1:加载init.php        9:28--9:33
require("00_init.php");
//2:获取参数lid(id数字)
$lid = $_REQUEST["lid"];
//3:创建SQL语句并且发送SQL
$sql =  " SELECT lid,title,price,spec";
$sql .= " category,name,cpu,disk FROM";
$sql .= " xz_laptop WHERE lid = $lid";
@$result = mysqli_query($conn,$sql);
@$row = mysqli_fetch_assoc($result);
if(!$row){
  //echo mysqli_error($conn);//显示详细错误信息
  die('{"code":-1,"msg":"'.mysqli_error($conn).'"}');
  //停止php运行,并且输出字符串
}
//4:抓取一行关联
//5:转换JSON字符串并且输出
echo json_encode($row);
