<?php
header("Content-Type:text/plain");
require_once("../init.php");
@$uname=$_REQUEST["uname"];
$sql="SELECT count(*) FROM xz_user where uname='".strtolower($uname)."'";
$result=sql_execute($sql);
//var_dump($result);
if($result[0]["count(*)"]==1)
  echo "false";
else
  echo "true";