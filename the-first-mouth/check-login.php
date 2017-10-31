<?php 
$uname=$_REQUEST['uname'];
$upwd=$_REQUEST['upwd'];
$conn=mysqli_connect("127.0.0.1","root","","xuezi",3306);
$sql="select * from xz_user where uname='$uname' and upwd='$upwd'";
$result=mysqli_query($conn,$sql);
if ($result===false) {
	echo "asdasdasd";
}
$row=mysqli_fetch_row($result);
if($row==null){
	echo "<a href='#'></a>";
}else{
	echo "登陆成功";
}
?>