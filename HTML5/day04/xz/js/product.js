
//功能:当前页面加载成功后发送ajax请求 data/xz_productlist.php
//     获取返回内容json数据,并且拼接字符串创建DOM元素
//1:页面加载成功
$(function(){
    //2:发送AJAX请求
    $.ajax({
        type:"GET",
        url:"data/xz_productlist.php",
        success:function(data){  //data json->js obj
            var html = "";
            for(var o of data){//data array[43 obj]
html += `
              <tr>
                <th>
                  <div class="checkbox" style="margin: 0;">
                    <label>
                      <input type="checkbox">
                    </label>
                  </div>
                </th>
                <th>${o.lid}</th>
                <th>???</th>
                <th>${o.lname}</th>
                <th>${o.title}</th>
                <th>规格</th>
                <th>${o.price}</th>
                <th>
                   <a href="#">删除</a>
                   <a href="#">详细</a>
                   <a href="#">修改</a>
                </th>
              </tr>
`;
            }//for end
            $("#tb1").html(html);
        },
        error:function(){
            alert("网络出现故障，请检查")
        }
    });
    //3:获取返回数据{json->js 对象}
    //4:循环拼接字符串
    //5:保存tbody
});
