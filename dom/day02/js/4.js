//获得样式表对象sheet
var sheet=document.styleSheets[1];
//获得要修改的样式所在的规则
var ruleS=sheet.cssRules[4];
//获得子规则
var ruleS_start=ruleS.cssRules[0];
var ruleS_end=ruleS.cssRules[1];
//获得要修改的样式所在的规则
var ruleM=sheet.cssRules[5];
//获得子规则
var ruleM_start=ruleM.cssRules[0];
var ruleM_end=ruleM.cssRules[1];
//获得要修改的样式所在的规则
var ruleH=sheet.cssRules[6];
//获得子规则
var ruleH_start=ruleH.cssRules[0];
var ruleH_end=ruleH.cssRules[1];

var now=new Date();

var sdeg=?;//秒针起始的旋转角度
var mdeg=?;//分针起始的旋转角度
var hdeg=?;//时针起始的旋转角度

//修改规则中的css属性
ruleS_start.style.transform="rotate("+sdeg+"deg)";
ruleS_end.style.transform=
  "rotate("+(sdeg+360)+"deg)";
ruleM_start.style.transform="rotate("+mdeg+"deg)";
ruleM_end.style.transform=
  "rotate("+(mdeg+360)+"deg)";
ruleH_start.style.transform="rotate("+hdeg+"deg)";
ruleH_end.style.transform=
  "rotate("+(hdeg+360)+"deg)";