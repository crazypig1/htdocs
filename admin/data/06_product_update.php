<?php
 //1:设备响应头格式    9:27--9:32
 //2:连接数据库
 //3:设置数据库编码
 require("00_init.php");
 //4:获取参数:产品编号 产品价格
 $lid   = $_REQUEST["lid"];
 $price = $_REQUEST["price"];
 $uid   = 1;
 //5:创建更新SQL语句并且发送SQL
 $sql =  " UPDATE xz_laptop SET ";
 $sql .= " price=$price,mtime=now(),muid=$uid ";
 $sql .= " WHERE lid=$lid";
 $result = mysqli_query($conn,$sql);
 //获取更新影响行数
 $rowsCount = mysqli_affected_rows($conn);
 //6:判断结果并且输出 json
 if($result && $rowsCount>0){
   echo '{"code":1,"msg":"更新成功"}';
 }else{
   echo '{"code":-1,"msg":"更新失败"}';
 }
