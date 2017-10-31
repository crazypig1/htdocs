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
                   <a href="${p.lid}" class="detail_p">详情</a>
                   <a href="${p.lid}_${p.price}" class="update_p">修改</a>
                   <a href="${p.lid}" class="del_p">删除</a>
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
//console.log(1);//运行就不是js
$("#pagination").on("click","li a",function(e){
//console.log(2);//事件绑定对象
    //a:阻止事件默认行为 a
    e.preventDefault();
    //b:获取当前页码
    var pno = $(this).attr("href");
    //c:调用函数
    loadProductByPage(pno);
});


//功能二:删除指定商品
//1:获取商品的删除按钮绑定点击事件
//  动态生成数据一定事件代理绑定
$("#tb1").on("click","a.del_p",function(e){
    e.preventDefault();
    //console.log("1:"+this);
//2:获取商品编号
    var lid = $(this).attr("href");
    var that = this;
    //console.log("2:"+lid);
//3:显示确认框，再次确认用户是否要删除该数据
    var rs = window.confirm("您是否要删除该数据?");
    if(rs==false){
        return;//函数停止后继执行
    }
    //console.log("3:");
//4:发送AJAX请求 data/product_del.php
    $.ajax({
        type:"POST",   //9:45--9:55
        url:"data/product_del.php",
        data:{lid:lid},
        success:function(data){
        //5:获取返回数据结果删除成功
       //6:删除指定行
        //console.log(data);
        if(data.code>0){
            var tr = $(that).parent().parent();
            tr.remove();
        }
        },
        error:function(){
            alert("网络发生故障，请检查");
        }
    });
});

//功能三:完成商品更新操作
//1:获取更新按钮绑定点击事件,使用事件代理
$("#tb1").on("click","a.update_p",function(e){
    e.preventDefault();
    //2:获取更新商品编号，商品价格  1_100
    var href = $(this).attr("href").split("_");
    var lid = href[0];//商品编号
    var price = href[1];//商品价格
    //3:显示更新div
    $("#old_price").val(price);
    $("#lid").val(lid);
    $("#update_message").css("display","block");
    //4:并且将商品价格与商品编添加div中
});
//5:为更新div中"更新"按钮绑定点击事件
$("#btn2").click(function(){
    //6:获取商品价格与编号
    var p = $("#old_price").val();
    var l = $("#lid").val();
    //7:发送ajax请求   11:47--11:57
    $.ajax({
        type:"POST",
        url:"data/product_update_price.php",
        data:{lid:l,price:p},
        success:function(data){
            console.log(data);
        },
        error:function(){}

    });
})











//错误锦集
//1:清除缓存
//打开浏览器-->F12->NetWorker->[*]Disable Cache

//2:检查php是否存在错误
//http://127.0.0.1/xz/data/product_del.php?pno=3
//a:目测    {"code":1,"msg":"删除成功"}
//b:F12-->NetWork 响应头{f5}
//Reponse Header{最后一行}
//Content-Type: application/json;charset=utf-8

//3:检查js是否存在错误
//a:js程序代码太多 3000--5000  调试工具DEBUG
//b:逐行调试











