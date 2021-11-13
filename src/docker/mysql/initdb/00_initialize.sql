GRANT ALL ON *.* TO mysqladmin;
DROP DATABASE IF EXISTS `STYLISTNAVI_LOCAL`;
CREATE DATABASE `STYLISTNAVI_LOCAL`;
use `STYLISTNAVI_LOCAL`;
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
);
set autocommit=0;
-- INSERT INTO `users` VALUES (1,'John Doe','hogehoge@gmail.com','2021-11-13 16:51:30','2021-11-13 16:51:30');
-- INSERT INTO `users` VALUES (2,'fugafuga','fugafuga@gmail.com','2021-11-13 16:51:30','2021-11-13 16:51:30');
commit;