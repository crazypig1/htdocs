
//模块七:用户列表
//9:30--9:40
//1:创建函数获取用户分页列表信息
function loadUserByPage(pno,pageSize){
  //2:发送AJAX请示 data/11_user_list.php
  $.ajax({
    type:"GET",
    url:"data/11_user_list.php",
    data:{pno:pno,pageSize:pageSize},
    success:function(pager){
      console.log(pager);
      //3:获取返回数据
      //4:拼接表格内容
      var html = "";
      $.each(pager.data,function(idx,obj){
        html += `
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>${obj.uid}</td>
                <td><img src="${obj.avatar}" /></td>
                <td class="uname">${obj.uname}</td>
                <td>${sliceGender(obj.gender)}</td>
                <td>${slicePhone(obj.phone)}</td>
                <td>
  `;
  if(obj.expire==0) {
    html += `<a href="${obj.uid}" class="btn-del">删除</a>
 <a href="${obj.uid}" class="btn-update">更新</a>
                    <a href="${obj.uid}" class="btn-detail">详情</a>
                    <a href="${obj.uid}" class="btn-upload">上传头像</a>
  `;
  }
  html += `
                </td>
              </tr>
        `;
      });//拼接表格循环end
      $("#tbody1").html(html);
      //5:保存 #tbody

      //6:创建分页页条 [1][2][3] 的$.each循环外部
      var html = "";
      //console.log(pager.pno);//1
      //console.log(pager.pageCount);//1
      //console.log(pager.pno+1);//2
      //console.log(pager.pageCount+1);//2

      //[上一页]  当前页小于等于1           禁止显示
      html += `
<li class="${pager.pno<=1?'disabled':''}">
    <a href="${pager.pno>1?pager.pno-1:'1'}">上一页</a>
</li>
      `;
      //[下一页]  当前页大于等于最后一页     禁止显示
      //上上一页  9:42--9:47
      if(pager.pno-2>0){
        html += `
        <li><a href="${pager.pno-2}">${pager.pno-2}</a></li>
        `;
      }
      //上一页
      if(pager.pno-1>0){
        html += `
        <li><a href="${pager.pno-1}">${pager.pno-1}</a></li>
        `;
      }
      //当前页
      html += `<li class="active"><a href="${pager.pno}">${pager.pno}</a></li>`;
      //下一页
      if(pager.pno+1<=pager.pageCount){
       html += `
        <li><a href="${pager.pno+1}">${pager.pno+1}</a></li>
       `;
      }
      //下下一页
      if(pager.pno+2<=pager.pageCount){
        html += `
        <li><a href="${pager.pno+2}">${pager.pno+2}</a></li>
       `;
      }
      //[下一页]
      html += `
        <li class="${pager.pno>=pager.pageCount?'disabled':''}">
          <a href="${pager.pno<pager.pageCount?pager.pno+1:'#'}">下一页</a>
        </li>
      `;

      if(pager.pno>=pager.pageCount){
       html += `<li>下下一页</li>`;
      }else{
        html += `<li><a href="${pager.pno-1}">下下一页</a></li>`;
      }


      $("#pagination").html(html);
    },
    error:function(){
      alert("网络故障，请检查");
      //99%json 1%php语法错
    }
  });

}

loadUserByPage(0,8);

/**
 * 该函数为了转换性别   0->男
 *                    1->女
 * @param gender
 */
function sliceGender(gender){
  return gender=='0'?"男":"女";
}


/**
 * 自学目标
 * baidu
 * www.csdn.net
 * www.cnblogs.com
 *
 * 隐藏手机中间四位
 * @param phone  (139)(9999)(9999)
 * @return       139####9999
 */
function slicePhone(phone){
  var reg = /(\d{3})(\d{4})(\d{4})/;
  var rs = phone.replace(reg,"$1####$3");
  return rs;
}
//自学内容1:隐藏手机中间四位####
//自学内容2:分页页条
//自学内容3:删除
//1:确认是否删除
//2:[是]
//3:删除
//  3.1:  expire = '0' => '1'
//4:创建php data/user_del.php
//5:user_list.html
//6:user_list.js
$("#tbody1").on("click","a.btn-del",function(e){
  //1:阻止事件默认行为
  e.preventDefault();
  //2:获取当前用户uid
  var uid = $(this).attr("href");
  //3:显示用户确认框
  var rs = window.confirm("您确认要删除该数据吗?");
  //4:如果用户选择"不是"停止执行
  if(!rs){
    return;
  }
  //5:发送ajax请求 data/user_del.php
  $.ajax({
    type:"POST",
    url:"data/12_user_del.php",
    data:{uid:uid},
    success:function(data){
      if(data.code>0){
        alert(data.msg);
        loadUserByPage(1,8);
      }
    },
    error:function(){
      alert("网络故障，请检查");
    }
  });
  //6:获取删除返回结果
  //7:如果删除成功，调用分页指令重新显示网页内容
  //10:40--10:50
});



//自学内容4:更新(密码)10:35--10:45
//1:获取更新按钮:->btn-update绑定点击事件(事件代理)
$("#tbody1").on("click","a.btn-update",function(e){
  e.preventDefault();
  //alert(1);
  //2:获取用户编号uid
  var uid = $(this).attr("href");
  //3:获取用户名称uname
  var uname = $(this).parents("tr").find("td.uname").html();
  //alert(2+uid);
  //alert(3+uname);
  //4:将uname和uid绑定 div块中
  //    uname   .pname
  //    uid     ok
  $(".pname").html(uname);
  $("[data-action='update-ok']").attr("href",uid);
  //5:显示div元素 .update-jumbotron
  $(".update-jumbotron").show();
});
//6:获取更新按钮,update绑定点击事件
$("[data-action='update-ok']").click(function(e){
  e.preventDefault();
  //alert(1);
  //7:获取uid,old_pwd,new_pwd
  var uid = $(this).attr("href");
  var old_pwd = $(".old_pwd").val();
  var new_pwd = $(".new_pwd").val()
  //alert(uid+"+"+old_pwd+"+"+new_pwd);
  //8:发送ajax请求   11:35---11:45
  $.ajax({
    type:"POST",
    url:"data/13_user_update.php",
    data:{uid:uid,old_pwd:old_pwd,new_pwd:new_pwd},
    success:function(data){
      if(data.code>0){
        alert(data.msg);
        $(".old_pwd").val("");
        $(".new_pwd").val("");
        $(".update-jumbotron").hide(500);
      }else{
        alert(data.msg);
      }

    },
    error:function(){
      alert("网络故障，请检查");
    }
  });
  //9:更新成功或失败
});


//10:为取消按钮绑定点击事件
$("[data-action='update-cancel']").click(function(e){
  e.preventDefault();
  $(".update-jumbotron").hide(800);
});





//自学内容5:详情
//自学内容6:上传头像(ajax上传/图片预览)
//11:15--11:25
//*1:页面加载成功后执行代码
//*2:阻止事件默认行为 document
//  拖动离开 拖动释放 拖动进入 拖动悬停
$(function(){
  //阻止浏览器默认行为(离开;释放;进入;悬停)
  $(document).on({
    dragleave:function(e){e.preventDefault();},
    drop:function(e){e.preventDefault();},
    dragenter:function(e){e.preventDefault();},
    dragover:function(e){e.preventDefault()}
  });
  //*3:获取 "拖拽区域"
  var drop_area = document.querySelector(".drop_area");
  //*4:绑定事件 拖动释放
  drop_area.ondrop = function(e) {
    //*5:阻止事件默认行为
    e.preventDefault();
    //console.log(2);
    //6:获取文件对象
    var fileList = e.dataTransfer.files;
    //console.log(fileList);
    //7:获取拖动上传文件个数量==0 停止
    if(fileList.length==0){
      alert("没有图片上传");
      return;
    }
    //8:获取上传文件(第一张图片)类型--可选
    //9:阻止非图片
    var rs  = fileList[0].type.indexOf("image");
    if(rs==-1){
      alert("只能上传图片格式类型");
      return;
    }   //11:45--11:50
    //9.1:获取上传文件大小 如果超过512K 阻止上传
    var size = Math.floor(fileList[0].size/1024);
    if(size>512){
      alert("上传图片太大，不能超过 512KB");
      return;
    }
    var fileName = fileList[0].name;
    //10:创建预览对象(创建图片对象)
    var img = window.webkitURL.createObjectURL(fileList[0]);
    //console.log(img);
    var str = `<img src="${img}" /> <p>${fileName}</p>`;
    //11:显示预览图片
    $(".preview").html(str);

    //12:通过ajax对象上传文件(表单对象)
    var fd = new FormData();
    fd.append("mypic",fileList[0]);
    //13:创建AJAX对象发送数据
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
      if(xhr.readyState==4){
        if(xhr.status==200){
          var json = JSON.parse(xhr.responseText);
          if(json.code>0){
            alert(json.msg);
          }else{
            alert(json.msg);
          }
        }
      }
    }
    //14:打开HTTP连接
xhr.open("POST","data/14_user_upload.php",true);
    //15:修改请求头信息
xhr.setRequestHeader("X-Requested-With","XMLHttpRequest");
    //16:发送数据
xhr.send(fd);
  }
});


//为上传头像按钮绑定点击事件
$("#tbody1").on("click","a.btn-upload",function(e){
  e.preventDefault();
  $(".upload-jumbotron").show();
});



