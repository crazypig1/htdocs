function loadProductByLikePage(low,high,pno,kw){
	$.ajax({
		type:"GET",
		url:"07_product_search.php",
		data:{low:low,high:high,pno:pno,kw:kw}
		success:function(data){
			var html="";
			var rows=data.data;
			console.log(data.data);
		}
		error:function(){
			alert("网络故障，请检查");
		}
	})
}