<?php 
header("Content-Type:application/json");
$arr=[
"uname"=>"杨幂",
"gender"=>"女",
"age"=>"30"
];
$string=json_encode($arr);
echo $string;
echo $string;
?>