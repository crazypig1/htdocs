//1:获取uid如果不存在，请用户重新登陆
var uid = sessionStorage.getItem("uid");
if(!uid){
  location.href = "login.html";
}
//2:获取type 用户权限
var type = sessionStorage.getItem("type");
//3:发送ajax获取列表
$.ajax({
    type:"GET",
    url:"userlist.php",
    success:function(data){
        //console.log(data);
        var html = "";
        for(var i=0;i<data.length;i++){
            var obj = data[i];
            html += `
          <tr>
            <td>${obj.uid}</td>
            <td>${obj.uname}</td>
            <td>${obj.phone}</td>
            <td>`;
            if(type==1){    //11:00--11:10
                html += `
                <a href="#">删除</a>
                <a href="#">更新</a>
                <a href="#">添加</a>
                `;
            }
            html += `</td></tr>`;
        }
        $("#tb1").html(html);

    },
    error:function(){
        alert("网络故障，请检查");
    }
});
//4:如果type=1 创建  删除 添加 更新按钮

