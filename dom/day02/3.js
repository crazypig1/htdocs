//起始状态：让id 为container下的第一个元素在第一个
document.querySelector("#container>div:first-child").style.zIndex=10;
var as=document.querySelectorAll(".tabs [data-tigger=tab]"); 
for(var a of as){
	a.onclick=function(){
		var id=this.getAttribute("href");
		// console.log(id);
		var targetdiv=document.querySelector(id);
		// console.log(targetdiv);
		if (targetdiv.style.zIndex=="") {
			var divs=document.querySelectorAll("#container>div");
			for (var div of divs) {
				div.style.zIndex="";
				targetdiv.style.zIndex=10;
			}
		}
	}
}