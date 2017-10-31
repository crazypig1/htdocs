#  user		    用户表				uid/uname/upwd
#  role		    角色表				rid/rname
#  user_role	用户角色关系表		id/uid/rid
#  model		模块表				mid/mname/url
#  acl		    权限表				aid/mid/rid/c/r/u/d
#库名、表名、列名(小写)、SQL 严格区分大小/
#变量名,上名，必须用英文不能拼音
#js/php  变量 匈牙利名命  getElementById

CREATE DATABASE rbac CHARSET=UTF8;
USE rbac;
CREATE TABLE user(
  uid INT,
  uname VARCHAR(20),
  upwd VARCHAR(20)
);
INSERT INTO user VALUES(1,'tom','123');
INSERT INTO user VALUES(2,'jerry','123');
CREATE TABLE role(
 rid INT,
 rname VARCHAR(20)
);
INSERT INTO role VALUES(1,'系统管理员');
INSERT INTO role VALUES(2,'普通操作员');
INSERT INTO role VALUES(3,'用户管理员');
CREATE TABLE user_role(
 id INT,
 uid INT,
 rid INT
);
INSERT INTO user_role VALUES(1,1,1);
INSERT INTO user_role VALUES(2,2,2);
INSERT INTO user_role VALUES(3,2,3);
CREATE TABLE model(
 mid   INT,
 mname VARCHAR(20),
 url   VARCHAR(20)
);
INSERT INTO model VALUES(1,"用户管理","user.php");
INSERT INTO model VALUES(2,"订单管理","order.php");
CREATE TABLE acl(
 aid INT,
 mid INT,
 rid INT,
 c   INT,
 r   INT,
 u   INT,
 d   INT
);
INSERT INTO acl VALUES(1,1,3,1,1,1,1);
INSERT INTO acl VALUES(2,1,2,0,1,0,0);

#问题:登录用户帐户 jerry/123 操作 用户模块 ??

#1:登录         jerry/123-->编号 uid 2
#2:拥有哪些角色 查询user_role (2 普通操作员 ,3 用户管理员)
#3:拥有哪些权限 查询acl      用户模块编号1
#               模块1 角色3  1 1 1 1
#               模块1 角色2  0 1 0 0
#               合并         1 1 1 1


#登录如何实现
#用户输入用户名和密码发送 ajax 请求 login_do.php
#$uname = "jerry";
#$upwd = "123";
#1:依据用户名和密码查询uid
#SELECT uid FROM user WHERE uname='jerry' AND upwd='123';
#uid=2
#2:依据uid查询用户所拥有所有角色rid
#SELECT rid FROM user_role WHERE uid = 2;
#{2,3}
#3:查询所有rid-(mid=1)所有拥有权限
SELECT mid,c,r,u,d FROM acl WHERE rid IN (2,3);
#4:保存查询结果 json











