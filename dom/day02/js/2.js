/*查找触发事件的元素
绑定事件
查找要修改的元素
修改元素
*/
//查找table下的thead下的input
let click=document.querySelector("table thead input");
click.onclick=function(){
	let chbs=document.querySelectorAll("table tbody td:first-child>input");
		for (var i = 0; i < chbs.length; i++) {
			chbs[i].checked=click.checked;
		}
}
//绑定单击事件
//遍历所有input
//将当前input的checked属性改为和全选input的checked一致时