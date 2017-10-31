<?php 
	/*1、
		完成$pageSize 和 $currentPage的声明
		可能的情况：
			1、从前端传递过来的，直接取值，赋值给两个变量即可
			2、第一次访问，前端没传递过来，那么就将 $pageSize 设置为 10，$currentPage 设置为 1
	*/
	#$pageSize表示每页显示的行数
	@$pageSize = $_REQUEST["pageSize"];
	if($pageSize == null){
		$pageSize = 10;
	}
	#$currentPage表示当前要看的页数
	@$currentPage = $_REQUEST["currentPage"];
	if($currentPage == null){
		$currentPage = 1;
	}


	/*2、计算要显示的数据的首条记录的下标*/
	$start=($currentPage-1)*$pageSize;

	/*3、
		根据$pageSize 和 $start , 查询要显示的数据
		1、连接到数据库
		2、拼sql语句
		3、执行查询并将结果保存在 $result
		4、将 $result 转换为  关联数组 保存到$array中
	*/
	require("00-init.php");
	$sql="select * from xz_user limit $start,$pageSize";
	$result = mysqli_query($conn,$sql);
	$array = mysqli_fetch_all($result,MYSQLI_ASSOC);
	
	/**
		4、计算分页查询的尾页
		1、查询总记录数
			1.1 拼SQL语句
			1.2 执行SQL语句，将结果保存在 $result
			1.3 从 $result 中取出一行保存在$row
			1.4 $row取出唯一的一个列 保存在 $total
		2、根据总记录数再查询尾页
			用$total与$pageSize 判断余数，如果能整除，整除($total/$pageSize)的结果就为 尾页，否则ceil($total/$pageSize)结果为 尾页
	*/
	$sql = "select count(*) from xz_user";
	$result = mysqli_query($conn,$sql);
	$row=mysqli_fetch_row($result);
	$total=$row[0];
	/*if($total%$pageSize == 0){
		$totalPage = $total / $pageSize;
	}else{
		$totalPage = ceil($total / $pageSize);
	}*/

	/*$totalPage = $total % $pageSize == 0 ? $total / $pageSize : ceil($total / $pageSize);*/

	$totalPage = ceil($total / $pageSize);

	/*
		计算上一页
		如果 $currentPage > 1的话，上一页则为 $currentPage - 1 ,否则 ，则为 1
	*/
	$prePage = 1;
	if($currentPage > 1){
		$prePage = $currentPage - 1;
	}

	/*
		计算下一页
		如果$currentPage < $totalPage的话，下一页则为 $currentPage + 1 , 否则就是 $totalPage
	*/
	$nextPage = $totalPage;
	if($currentPage < $totalPage){
		$nextPage = $currentPage + 1;
	}

	/*将分页的页码们数据追加到查询的数据的数组的后面，再转换成JSON格式字符串进行响应*/
	/*
		{"firstPage":1,"prePage":$prePage,"nextPage":$nextPage,"totalPage":$totalPage}
	*/
	$pageInfo="{\"firstPage\":1,\"prePage\":$prePage,\"nextPage\":$nextPage,\"totalPage\":$totalPage}";
	//将 $pageInfo 追加到 $array 的后面
	Array_push($array,$pageInfo);
	echo json_encode($array);

?>