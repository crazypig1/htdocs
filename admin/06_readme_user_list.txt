模块八:用户列表
a:开发流程
1:data/11_user_list.php 作用:获取用户分页列表
 a:获取参数   $pno $pageSize;
 b:创建sql   SELECT uid,uname,phone,avatar
            FROM xz_user
            ORDER BY uid
            LIMIT 0,8;
常见错误一:
网页显示:Parse error: syntax error  line 18
php解析语法错误：18附近有错误
解决：16 少一个分号
常错误二:
mysqli_fetch_all() expects parameter 1 to be
31 line
SQL语句错误
解决:
if(mysqli_error($conn)){
  echo mysqli_error($conn);
}
2:user_list.html        作用:显示用户列表

3:user_list.js          作用:中间人：发启请求->php->接收数据
                             渲染html网页