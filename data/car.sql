USE NAMES utf8;

CREATE DATABASE car CHARSET=UTF8;
USE car;
CREATE TABLE t_car(
	pid INT PRIMARY KEY AUTO_INCREMENT,
	pname VARCHAR(20),
	price DOUBLE(10,2),
	pic VARCHAR(50)
	
);



INSERT INTO t_car VALUES(null,'途观',11111,'img/pt4_img6.png');
INSERT INTO t_car VALUES(null,'lorem',22222,'img/pt4_img6.png');
INSERT INTO t_car VALUES(null,'lorem',33333,'img/pt4_img6.png');
INSERT INTO t_car VALUES(null,'lorme',44444,'img/pt4_img6.png');
INSERT INTO t_car VALUES(null,'lorem',55555,'img/pt4_img6.png');
INSERT INTO t_car VALUES(null,'lorem',66666,'img/pt4_img6.png');
INSERT INTO t_car VALUES(null,'lorme',77777,'img/pt4_img6.png');
INSERT INTO t_car VALUES(null,'lorem',88888,'img/pt4_img6.png');
INSERT INTO t_car VALUES(null,'途观',11111,'img/pt4_img3.png');
INSERT INTO t_car VALUES(null,'lorem',22222,'img/pt4_img3.png');
INSERT INTO t_car VALUES(null,'lorem',33333,'img/pt4_img3.png');
INSERT INTO t_car VALUES(null,'lorme',44444,'img/pt4_img3.png');
INSERT INTO t_car VALUES(null,'lorem',55555,'img/pt4_img3.png');
INSERT INTO t_car VALUES(null,'lorem',66666,'img/pt4_img3.png');
INSERT INTO t_car VALUES(null,'lorme',77777,'img/pt4_img3.png');
INSERT INTO t_car VALUES(null,'lorem',88888,'img/pt4_img3.png');

