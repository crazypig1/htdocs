//模块七:添加产品信息

//14:20--14:35
//1:创建产品类别下拉菜单
//1.1:当页面加载成功后发送ajax请求 10_product_padd.php
//1.2:获取产品类别列表
//1.3:创建产品类别下拉菜单
//   <select id="category">
//     <option value="1_AppleMac">AppleMac</option>
//   </select>
$(function(){
  $.ajax({
    type:"GET",
    url:"data/10_product_padd.php",
    success:function(data){
      var html = "";
      html += "<option value='-1'>---请选择---</option>";
      $.each(data,function(idx,obj){
       html += `
         <option value="${obj.fid}_${obj.name}">${obj.name}</option>
       `;
      });
      $("#category").html(html);
    },
    error:function(){
      alert("网络故障 请检查!");
    }

  });
});


//2:提交数据
//2.1:点击提交，获取所有用户输入参数
$("#btn11").click(function(){
  //a:产品标题
  var title = $("#title");
  var titleReg = /^[\w\s\u4e00-\u9fa5]{1,}$/i;
  if(!titleReg.test(title.val())){
    title.parent().next().css("color","red").html("标题式不正确");
    return;
  }//15:35--15:50
  var subtitle = $("#subtitle");//子标题
  var price = $("#price");      //价格
  var promise = $("#promise");  //售后

  //小技巧:表单序列化
  var data = $("#form-product").serialize();
  //2.2:验证
  //2.3:提交 09_product_add.php
  $.ajax({
    type:"POST",
    url:"data/09_product_add.php",
    data:data,
    success:function(data){
      alert(data.msg);
    },
    error:function(){
      alert("网络故障，请检查");
    }
  });
});