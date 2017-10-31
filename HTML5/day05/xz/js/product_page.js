//功能:分页显示商品列表

//1:创建函数发送AJAX请求获取当前页的内容，并且创建分页条
//2:参数pno 当前页码 1 2 3 4
function loadProductByPage(pno){
  //3:发送AJAX请求 data/xz_productlist_page.php
  //4:参数pno  10:48--10:50
  $.ajax({
      type:"GET",
      url:"data/xz_productlist_page.php",
      data:{pno:pno},
      success:function(pager){
          console.log("获取服务器返回数据");
          //console.log(pager);
          //5:获取返回数据 pager.data
          //6:拼接字符串动态创建表格并且添加数据
          var html = "";
          for(var p of pager.data){
              html += `
              <tr>
                <td>
                <input type="checkbox">
                </td>
                <td>${p.lid}</td>
                <td><img src="${p.sm}" /></td>
                <td>${p.fname}</td>
                <td>${p.title}</td>
                <td>${p.spec}</td>
                <td>${p.price}</td>
                <td>
                   <a href="">详情</a>
                   <a href="">修改</a>
                   <a href="">删除</a>
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
          alert("网络出现故障，请检查");
      }
  });


}
loadProductByPage(1);
//为页码绑定点击事件,由于页码是动态生成
//使用事件代理机制完成绑定
$("#pagination").on("click","li a",function(e){
    //a:阻止事件默认行为 a
    e.preventDefault();
    //b:获取当前页码
    var pno = $(this).attr("href");
    //c:调用函数
    loadProductByPage(pno);
});



