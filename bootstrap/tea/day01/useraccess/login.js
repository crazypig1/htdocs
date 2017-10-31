//用户登录
//1:为登录按钮绑定点击事件
$("#btn1").click(function(){
    //2:获取用户名和密码
    var u = $("#uname").val();
    var p = $("#upwd").val();
    //alert(u+p);
    //3:发送AJAX请求 logindo.php
    $.ajax({
        type:"POST",
        url:"logindo.php",
        data:{uname:u,upwd:p},
        success:function(data){
            //4:获取返回数据
            //uid    表示登录成功
            //type  表示用户权限{普通管理员，系统管理员}
            if(data.code>0) {
                //5:保存   sessionStorage
                sessionStorage.setItem("uid",data.uid);
                sessionStorage.setItem("type",data.type);
                alert("登陆成功");
                //6:登录成功跳转 userlist.html 网页
                location.href = "userlist.html";
            }else{
                alert(data.msg);
            }
        },
        error:function(){
            alert("网络故障，请检查");
            //1:404 url地址程序不正确
            //2:json 拼写错误
        }
    });


});
