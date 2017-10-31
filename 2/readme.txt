学子商城后台管理

模块一:{大功能} 后台管理员登录
开发流程
1:创建php  data/01_login.php
2:创建html index.html
3:创建js   js/index.js

------------------------------------
增加难度:密码加密处理:
1:mysql  加密  md5()
2:php程序 加密
3:js 程序 加密
示例:mysql
原文:123
密文:202cb962ac59075b964b07152d234b70
有一种破解方式:碰撞测试;彩虹测试;
202cb962ac59075b964b07152d234b70 123
202cb962ac59075b964b07152d234b71 1234

4:通常情况下加密一次可以完成任务
"12345"-->md5('12345');
5:多次加密码
"12345"-->md5(md5('12345'));
6:安全级别过高
sha2加密算法 512位
des 加密算法(金隔行业)


-----------------------------------
1:创建php  01_login.php
  1.1：将数据库xz_user用户密加密处理
  1.2:
  UPDATE xz_user SET upwd=md5(upwd);
  1.3:分析SQL语句
  SELECT * FROM xz_user
  WHERE uname='tom' AND upwd=md5('123456')
2:创建html index.html
3:创建js   index.js
----------------------------------------
少一块:产品分页显示
----------------------------------------
功能模块三:产品删除
开发流程:
1.1: data/05_product_del.php
1.2: product_list.html
1.1: js/productlist.js
解决方案:
a:DELETE FROM xz_laptop WHERE lid = 3;
 订单表:错误订不存在产品
 购物车:错误购买不存在产品
b:UPDATE xz_laptop SET expire = 1 WHERE lid = 3;
 expire 失效(下架)
c:项目需要有一种"超级管理员拥有项目所有权限->可以删除"
 解决思路:创建历史表
 id del_time   del_user lid title      price   ....
 1  2017-10-10 admin    1   apple mac  6000.00

注意事项
1:删除之前要确认
2:查询之前要排序

排除错误方法
1.1：排错原则.php优先
a:php创建完成立即调试....
示例:
05_product_del.php
打开浏览器 http://127.0.0.1/admin/data/05_product_del.php
空白
#-------------------------
问题:网页没有显示数据
a:数据库、表、数据(命令行)
b:php
c:js  逐行调试














