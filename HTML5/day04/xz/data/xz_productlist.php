<?php
  //功能:查询所有产品信息并且返回json数据
  //1：修改响应头格式json
  //2: 连接数据库
  //3: 设置编码
  require("init1.php");
  //4: 创建SQL语句并且发送sql语句
  $sql = "SELECT * FROM xz_laptop";
  $result = mysqli_query($conn,$sql);
  //5: 抓取多行记录
  $rows = mysqli_fetch_all($result,MYSQLI_ASSOC);
  //6: 转换json数据并且输出(服务器返回数据)
  echo json_encode($rows);
?>