//console.log(1);
//模块二:分页显示产品列表
/**
 * 分页显示产品列表
 * @param pno       当前页码
 * @param pageSize  当前页记录条数
 */
function loadProductByPage(pno,pageSize){
  //console.log(2);
  //1:发送ajax请求获取当前页的内容
  //2:参数 pno pageSize
  //3:接收服务器返回数据 output["data"]=[...]
  //4:拼接字符串
  //5:如果当前产品己经失效 不再添加"详细、修改、删除"
 $.ajax({
   type:"GET",
   url:"data/04_product_list.php",
   data:{pno:pno,pageSize:pageSize},
   success:function(pager){
     var html = "";
     var rows = pager.data;
     for(var i=0;i<rows.length;i++){
       var obj = rows[i];
       html += `<tr`;
       if(obj.expire==1){
         html += ` class="expire"`;
       }
       html += `>
       <td> <input type="checkbox" /></td>
        <td>${obj.lid}</td>
          <td><img src="${obj.sm}" /></td>
          <td class="pprice">${obj.price}</td>
          <td class="pname">${obj.name}</td>
          <td>${obj.spec}</td>
          <td>`;
  if(obj.expire==0) {
    html += `
 <a href="${obj.lid}" class="btn-del">删除</a>
 <a href="${obj.lid}" class="btn-update">更新</a>
 <a href="${obj.lid}" class="btn-detail">详细</a>
 `;
  }
        html += `</td>
       </tr>
       `;
     }//11:00--11:15
     $("#tbody1").html(html); //10:50--11:00
     //6:创建分页条 [1][2][3][4][5]
     //ul id="pagination"
     var html = "";
     if(pager.pno-2>0){
       html += `
     <li><a href="#">${pager.pno-2}</a></li>
     `;
     }
     if(pager.pno-1>0){
       html += `
     <li><a href="#">${pager.pno-1}</a></li>
     `;
     }

     html += `
     <li class="active"><a href="#">${pager.pno}</a></li>
     `;
     if(pager.pno+1<=pager.pageCount){
       html += `
     <li><a href="#">${pager.pno+1}</a></li>
     `;
     }
     if(pager.pno+2<=pager.pageCount){
       html += `
     <li><a href="#">${pager.pno+2}</a></li>
     `;
     }
     $("#pagination").html(html);
   },
   error:function(){
     alert("网络故障，请检查");
   }
 });
 //7:拼接计算
}
loadProductByPage(1,8);
//14:37--14:47
//为页码绑定点击事件.
//用-事件代理机制-绑定点击事件
//<ul id="#p"> <li><a>1</a></li> </ul>
$("#pagination").on("click","li a",function(e){
  //1:阻止事件默认行为:因为a自动跳转功能
  e.preventDefault();
  //2:当前元素页码
  var pno = $(this).html();
  //3:页大小
  loadProductByPage(pno,8);
});


//模块三:删除指定产品    9:43--9:53
//1:获取所有删除产品按钮
//2:绑定点击事件--事件代理
$("#tbody1").on("click","a.btn-del",function(e){
  e.preventDefault();
 //3:确认用户是否删除->显示产品名称
  var rs = window.confirm("您是否要删除指定记录");
  if(!rs){
    return;//停止后续代码执行
  }
 //4:发送ajax请求删除产品
  var lid = $(this).attr("href");
  $.ajax({
    type:"POST",
    url:"data/05_product_del.php",
    data:{lid:lid},
    success:function(data){
      if(data.code>0){
        alert("删除成功");
        loadProductByPage(1,8);
      }else{
        alert("删除失败");
      }
    },
    error:function(){
      alert("网络故障，请检查");
    }
  });
 //5:获取返回结果
 //6:加载class tr 背景灰色
});




//模块四:更新产品价格
$("#tbody1").on("click","a.btn-update",function(e){
  e.preventDefault();
  var div = $(".update-jumbotron");
  var lid=$(this).attr("href");
  $("[data-action=update-ok]").data("data",lid);
  var td = $(this).parent();
  var tr = $(this).parents("tr");
  var fname = tr.find(".pname").html();
  var price = tr.find(".pprice").html();
  div.find(".aid").html(fname);
  div.find(".input-price").val(price);
  div.show(500);
  // console.log($("[data-action=update-ok]").data("data"))
});
 $("[data-action=update-ok]").click(function(e){
   e.preventDefault();
   var lid=$(this).data("data");
   var price=$(".input-price").val();
   $.ajax({
     type:"POST",
     url:"data/06_prodect_update.php",
     data:{lid:lid,price:price},
     success:function(data){
      if (data.code>0) {
         alert(data.msg);
       }
       $(".update-jumbotron").hide(500);
       loadProductByPage(0,8);
     },
     error:function(){
       alert("sb");
     }
   })
 })

//模块五:显示产品详细信息


