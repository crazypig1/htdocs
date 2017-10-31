模块六:产品搜索
a:开发流程
 1.1:data/08_product_search.php
    a:获取三个参数 low/high/kw
    b:low=0
    if(!$low){
      $low =  0;
    }
    c:high=2100000000
    d:kw=关键字 ""
    要求1:查询所有标签中包含apple产品
    SELECT * FROM xz_laptop
    WHERE title LIKE '%$kw%'
    AND price >= $low AND price <=$high;
 1.2:product_search.html
 1.3:product_search.js
 目标:发送ajax请求，获取返回结果

如何调试错误
1:调试php
http://127.0.0.1/admin/data/08_
product_list.php
2:调试js
http://127.0.0.1/admin/product_search.html




