<?php 
	#模拟删除用户的信息
	$uname = "sanfeng.zhang";
	$upwd = "123456";
	$gender = "1";
?>
<!doctype html>
<html>
 <head>
  <meta charset="UTF-8">
  <title>Document</title>
 </head>
 <body>
  <form action="">
		<p>
			登录名称：
			<input type="text" disabled value="<?php echo $uname; ?>">
		</p>
		<p>
			登录密码：
			<input type="password" value="<?php echo $upwd; ?>">
		</p>
		<p>
			用户性别：
			<select name="" id="">
				<option value="0"
					<?php 
						if($gender == "0"){
							echo "selected";
						}
					?>
				>男</option>
				<option value="1"
					<?php 
						if($gender == "1"){
							echo "selected";
						}
					?>
				>女</option>	
			</select>
		</p>
	</form>
 </body>
</html>
