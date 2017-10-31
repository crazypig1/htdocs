<?php
  //1:修改响应头格式json
  header("Content-Type:application/json;charset=utf-8");
  //2:创建数据
  $rows = [];
  $rows[] = ["月份"=>"一月","value"=>270];
  $rows[] = ["月份"=>"二月","value"=>280];
  $rows[] = ["月份"=>"三月","value"=>380];
  $rows[] = ["月份"=>"四月","value"=>280];
  $rows[] = ["月份"=>"五月","value"=>280];
  $rows[] = ["月份"=>"六月","value"=>210];
  $rows[] = ["月份"=>"七月","value"=>180];
  $rows[] = ["月份"=>"八月","value"=>280];
  $rows[] = ["月份"=>"九月","value"=>200];
  $rows[] = ["月份"=>"十月","value"=>280];
  $rows[] = ["月份"=>"十一月","value"=>280];
  $rows[] = ["月份"=>"十二月","value"=>280];
  //3:输出
  echo json_encode($rows);
?>