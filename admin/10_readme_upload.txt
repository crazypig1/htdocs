
上传文件
1:工作流程
  客户端有一张图片->通过浏览器发送-->服务器->文件夹
2:创建哪些程序和目录完成上传
  2.1:创建目录  uploads
  2.2:创建php   x.php
  2.3:创建html  x.html
3:拖动上传;预览;AJAX

3.1：拖动上传(FireFox/Chrome/)从操作系统获取文件

a:阻止事件默认行为(打开图片并显示)
  (document)[拖动开/拖释放/拖动进入/拖动悬停]
b:在浏览器获取刚刚拖动图片信息
  e.dataTransfer.files[0]
  var fileNum = e.dataTransfer.files.length;
  if(fileNum==0)
c: 预览(很多种方法)
   var img = window.webkitURL.createObjectURL(files[0]);
   var str = `<img src="${img}" />`;
   $("#box").html(str);
d:上传 AJAX2 提供 FormData(特点:上传二进制文件)
   var formData = new FormData();
   formData.append("mypic",files[0]);

   var xhr = new XMLHttpRequest();
   xhr.open("POST","14_x.php",true);
   xhr.setRequestHeader("X-Requested-With","XMLHttpReqeust");
   xhr.send(formData);