<?php 
header("Content-Type:application/json");
$province=["黑龙江","辽宁","吉林"];
$string=json_encode($province);
echo $string;

 ?>