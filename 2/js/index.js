//模块一:用户登录
//1:获取登录按钮绑定点击事件
$("[name='usubmit']").click(function(e){
  //1.1:阻止事件默认行为 a
  e.preventDefault();
  //2:获取用户名和密码
  var u = $("[name='uname']").val();
  var p = $("[name='upwd']").val();
  //alert(u+":"+p);
  //3:发送ajax请求
  $.ajax({
    type:"POST",
    url:"data/01_login.php",
    data:{uname:u,upwd:p},
    success:function(data){
      if(data.code>0){
        alert(data.msg);
        location.href = "main.html";
      }else{
        alert(data.msg);
      }
    },
    error:function(){
      alert("网络出现故障，请检查");
    }
  });
  //4:获取服务器返回数据
  //5:判断登录是否成功->跳转main.html
});
