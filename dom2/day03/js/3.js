//获得id为form1的表单
var form=document.forms[0/*"form1"*/];
//Step1:为name为username和pwd的文本框绑定获得焦点事件
form.username.onfocus=getFocus;
form.pwd.onfocus=getFocus;
function getFocus(){
  //this->当前文本框
  //当前文本框边框加粗
  this.className="txt_focus";
  //清除旁边div的class
  var div=this.parentNode
      .nextElementSibling
      .firstElementChild;
  div.className="";
}
form.username.onblur=function(){
  vali(this,/^\w{1,10}$/);
}
function vali(txt,reg){
  //清除当前文本框的class
  txt.className="";
  //获取旁边div
  var div=txt.parentNode
    .nextElementSibling
    .firstElementChild;
  //用reg测试当前文本框的内容
  //如果通过,就修改div的class为vali_success
  if(reg.test(txt.value)){
    div.className="vali_success";
  //否则修改div的class为vali_fail
    return true;
  }else{
    div.className="vali_fail";
    return false;
  }
}
form.pwd.onblur=function(){
  vali(this,/^\d{6}$/);
}

//找到表单中倒数第二个按钮,绑定单击事件
form.elements[form.length-2].onclick=function(){
  ////先验证用户名,获得结果
  //var rName=vali(form.username,/^\w{1,10}$/);
  ////再验证密码，获得结果
  //var rPwd=vali(form.pwd,/^\d{6}$/);
  ////如果两个结果都是true
  //if(rName&&rPwd)
    //form.submit()//才手动提交表单

  //如果用户名验证失败，就让用户名获得焦点
  if(!vali(form.username,/^\w{1,10}$/))
    form.username.focus();
  //否则 如果密码验证失败，就让密码获得焦点
  else if(!vali(form.pwd,/^\d{6}$/))
    form.pwd.focus();
  //否则 才提交表单
  else form.submit();
}