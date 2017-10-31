<?php 
header("Content-Type:application/json");
require_once("./init.php");
$fid=$_REQUEST["fid"];
if($fid){
	$sql="select lid,title from xz_laptop where family_id=$fid";
	echo json_encode(sql_execute($sql));

}else{
	echo json_encode($sql);
}
?>