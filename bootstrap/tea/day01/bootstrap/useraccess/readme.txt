权限管理方式一:
1:创建四个程序
  logindo.php
  login.html
  userlist.php
  userlist.html
2:创建库创建表
  CREATE DATABASE ua CHARSET=UTF8;
  USE ua;
  CREATE TABLE user(
    uid     INT PRIMARY KEY AUTO_INCREMENT,
    uname   VARCHAR(20),
    upwd    VARCHAR(32),
    phone   VARCHAR(20),
    type    INT
  );
 添加记录三个普通管理员二个系统管理员
 INSERT INTO user VALUES(null,'tom','123','111',0);
 INSERT INTO user VALUES(null,'jerry','123','111',0);
 INSERT INTO user VALUES(null,'kk','123','111',0);
 INSERT INTO user VALUES(null,'james','123','111',1);
 INSERT INTO user VALUES(null,'dong','123','111',1);

