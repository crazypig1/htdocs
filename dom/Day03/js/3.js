//获得id为form1 的表单
var form=document.forms[0];
//Step1:为name为username和pwd的文本框绑定获得焦点事件
// var txtName=document.querySelector("[name=username]");
// var txtPwd= document.querySelector("[name=pwd]");
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
    return true;
  }
  
  //否则修改div的class为vali_fail
  else{
    div.className="vali_fail";
    return false ;
  }
}
form.pwd.onblur=function(){
  vali(this,/^\d{6}$/);
}
//找到表单中倒数第二个按钮你绑定单机事件
 form.elements[form.length-2].onclick=function(){
//先验证用户名，获得结果
  // var rName=vali(form.username,/^\w{1,10}$/);
  // var rPwd=vali(form.pwd,/^\d{6}$/)
//如果两个结果都是true
// if (rName&&rPwd) {
  // form.submit;
// }
//才手动提交表单
// }
    if (!vali(form.username,/^\w{1,10}$/)) {
      form.username.focus();
    }else if (!vali(form.pwd,/^\d{6}$/)){
      form.pwd.focus();
    }else form.submit();
  }
  