(()=>{
		//登陆
		var input=$("input[type=submit]");	
		input.click(function(){
		var uname=$("#uname").val();
		var upwd=$("#password").val();
		$.ajax({
		type:"POST",
		url:"../data/login.php",
		data:{uname:uname,upwd:upwd},
		success:function(data){
	      console.log(data);
	    },
		error:function(){
	      alert("网络故障，请检查");
	    }
			})
		})


})()