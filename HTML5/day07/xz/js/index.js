//防止用户非法使用主页
var uid = sessionStorage.getItem("uid");
if(!uid){
    location.href = "login.html";
}