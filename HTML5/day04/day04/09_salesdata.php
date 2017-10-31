<?php
  //1:修改响应头格式json
  header("Content-Type:application/json;charset=utf-8");
  //2:创建数据
  $rows = [];
  $rows[] = ["季度"=>"一季度","value"=>270];
  $rows[] = ["季度"=>"二季度","value"=>280];
  $rows[] = ["季度"=>"三季度","value"=>380];
  $rows[] = ["季度"=>"四季度","value"=>280];
  //3:输出
  echo json_encode($rows);
?>