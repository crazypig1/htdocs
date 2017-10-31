
//模块二:用户管理

//功能点一:分页查询用户信息
function loadUserByPage(pno){
  //1:发送 ajax请求 data/user_list.php
  $.ajax({
      type:"GET",
      url:"data/userlist.php",
      data:{pno:pno},
      success:function(pager){
          var html = "";
          for(var p of pager.data){
              html += `
              <tr>
                <td>
                <input type="checkbox">
                </td>
                <td>${p.uid}</td>
                <td><img src="${p.avatar}" /></td>
                <td>${p.uname}</td>
                <td>${p.user_name}</td>
                <td>${p.gender}</td>
                <td>${p.email}</td>
                <td>
                   <a href="${p.uid}" class="detail_p">详情</a>
                   <a href="${p.uid}" class="update_p">修改</a>
                   <a href="${p.uid}" class="del_p">删除</a>
                </td>
              </tr>
              `;
          }
          $("#tb1").html(html);
          //7:获取总页数  pager.pageCount
          //8:拼接字符串动态创建页码
          var html = "";

          //判断是否显示上上一页
          if(pager.pno-2>0){
              html += `<li><a href="${pager.pno-2}">${pager.pno-2}</a></li>`;
          }
          //判断是否显示上一页
          if(pager.pno-1>0){
              html += `<li><a href="${pager.pno-1}">${pager.pno-1}</a></li>`;
          }
          html += `<li class="active"><a href="${pager.pno}">${pager.pno}</a></li>`;
          //判断是否显示下一页
          if(pager.pno+1<=pager.pageCount){
              html += `<li><a href="${pager.pno+1}">${pager.pno+1}</a></li>`;
          }
          //判断是否显示下下一页
          if(pager.pno+2<=pager.pageCount){
              html += `<li><a href="${pager.pno+2}">${pager.pno+2}</a></li>`;
          }
          $("#pagination").html(html);
      },
      error:function(){
          //原因一:url中程序地址错误 404
          //原因二:json 字符串拼错
          //'{"uname":"tom","age":19}'
          alert("网络出现故障，请检查");
      }
  });
  //2:参数 pno
  //3:获取返回数据   15:55--16:05
  //  {"recordCount":90,"pageCount":16,"data"=>[{}]...}
  //4:分析绑定不同html元素 tbody#tb1
  //5:动态创建页码 1 2 3 4 5
}
loadUserByPage(1);
//功能点二:为不同页码绑定点击事件获取不同页中用户信息
$("#pagination").on("click","li a",function(e){
//console.log(2);//事件绑定对象
    //a:阻止事件默认行为 a
    e.preventDefault();
    //b:获取当前页码
    var pno = $(this).attr("href");
    //c:调用函数
    loadUserByPage(pno);
});
//功能点三:删除 16:35--16:45
//1:user_del.php
//2:加载删除功能
$("#tb1").on("click","a.del_p",function(e){
    //1:阻止事件默认行为
    e.preventDefault();
    //2:询问是否删除指定用户
    var rs = window.confirm("您是否要删除该数据?");
    if(rs==false){
        return;
    }
    //3:发送ajax请求并且获取返回数据
    //4:预留 this tr
    var tr = $(this).parents("tr");
    var uid = $(this).attr("href");
    $.ajax({
        type:"GET",
        url:"data/user_del.php",
        data:{uid:uid},
        success:function(data){
            if(data.code>0){
                alert("删除成功");
                tr.remove();
                loadUserByPage(1);
            }
        },
        error:function(){
            alert("网络故障，请检查");
        }
    });


});
//功能点四:更新{密码}
//功能点五:详细{头像上传功能}
