<?php 
header("Content-Type:application/json");
require_once("./init.php");
$sql="select fname,fid from xz_laptop_family ";
echo json_encode(sql_execute($sql));
 ?>