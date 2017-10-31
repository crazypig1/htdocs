
模块五:显示产品详细信息
开发流程
1:data/07_product_detail.php   查询产品详细信息->lid
  sql方案一:
  SELECT * FROM xz_laptop WHERE lid = 1;
  思路:需要哪些查询哪些
  sql方案二:
  SELECT lid,title,price,spec,name,cpu,disk FROM
  xz_laptop WHERE lid = 1;

2:product_list.html
  div 显示详细
3:product_list.js


错误集锦:
1:问题，点击超链接后自动跳转  6 7
2:原因  阻止事件默认行为没有生效
  e.preventDefault();
解决问题思路
1:选择器是否正确
 <a href="${obj.lid}" class="btn_detail">详细</a>
$("#tbody1").on("click","a.btn-detail",function(e){
2:没有参数
$("#tbody1").on("click","a.btn-detail",function(){
  e.preventDefault();
}
