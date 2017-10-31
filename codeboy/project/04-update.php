<?php  
$uid=$_REQUEST['uid'];
require("00-init.php");
$sql="select * from xz_user where uid='$uid'";
$result=mysqli_query($conn,$sql);
$row=mysqli_fetch_assoc($result);
echo json_encode($row);
?>



<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title></title>
	<script type="text/javascript">
		




	</script>
</head>
<body>
<form action="04-update-1.php" method="post">
	<p><input type="text" name="uname" value="<?php echo $row['uname'];?>" disabled></p>
	<p><input type="password" name="upwd" value="<?php echo $row['upwd'];?>"></p>
	<p><input type="email" name="email" value="<?php echo $row['email']; ?>"></p>
	<p><input type="text" name="phone" value="<?php echo $row['phone']; ?>"></p>
	<p><input type="text" name="user_name" value="<?php echo $row['user_name']; ?>"></p>
	<p>
		用户性别：<select name="gender">
		
			<option value="0" 
				<?php 
					if ($row['gender']==0) {
						echo "selected";
					}
				 ?>
			>女</option>
			<option value="1" 
				<?php 
					if ($row['gender']==1) {
						echo "selected";
					}
				?>
			>男</option>
		</select>
	</p>
	<p><input type="hidden" name="uid" value="<?php echo $row['uid']; ?>"></p>
	<p><input type="submit" value="提交"></p>
</form>

</body>
</html>