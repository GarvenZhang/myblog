/*
 Navicat MySQL Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 80011
 Source Host           : localhost
 Source Database       : myblog

 Target Server Type    : MySQL
 Target Server Version : 80011
 File Encoding         : utf-8

 Date: 08/05/2018 11:57:50 AM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `Article`
-- ----------------------------
DROP TABLE IF EXISTS `Article`;
CREATE TABLE `Article` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '编号',
  `title` varchar(50) NOT NULL COMMENT '标题',
  `content` longtext COMMENT '内容 - 长度限制：3000',
  `summary` varchar(200) NOT NULL COMMENT '文章简介',
  `read_num` int(10) NOT NULL DEFAULT '0' COMMENT '浏览次数',
  `prev_id` char(10) DEFAULT NULL COMMENT '上一篇文章的id',
  `next_id` char(10) DEFAULT NULL COMMENT '下一篇文章的id	',
  `pubtime` varchar(10) DEFAULT NULL COMMENT '写作开始时间',
  `cover_url` varchar(200) DEFAULT NULL COMMENT '封面uri',
  `category_id` int(10) NOT NULL,
  `user_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`,`user_id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `lastId` (`prev_id`) USING BTREE,
  KEY `nextId` (`next_id`) USING BTREE,
  KEY `fk_Article_Category1_idx` (`category_id`),
  KEY `fk_Article_User1_idx` (`user_id`),
  KEY `title` (`title`) USING BTREE,
  CONSTRAINT `fk_Article_Category1` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`),
  CONSTRAINT `fk_Article_User1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=88 DEFAULT CHARSET=utf8 COMMENT='实体表-文章表';

-- ----------------------------
--  Records of `Article`
-- ----------------------------
BEGIN;
INSERT INTO `Article` VALUES ('1', 'feaf', 'feafe', 'fea', '15', null, null, '2018-09-20', '/eee.png', '13', '1'), ('86', 'hello', 'feafwafew', 'summary', '136', '1', '1', '2018-07-07', '/fea.png', '13', '1'), ('87', 'goodbye', '# hello\n\n![40692602.png](/40692602.png.webp)', 'summary', '95', '1', '1', '2018-08-30', '/40692602.png.webp', '13', '1');
COMMIT;

-- ----------------------------
--  Table structure for `Category`
-- ----------------------------
DROP TABLE IF EXISTS `Category`;
CREATE TABLE `Category` (
  `id` int(10) NOT NULL AUTO_INCREMENT COMMENT '编号',
  `name` varchar(45) NOT NULL COMMENT '类别标题',
  `total` int(11) NOT NULL DEFAULT '0' COMMENT '该类别的文章总数',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8 COMMENT='文章类别表';

-- ----------------------------
--  Records of `Category`
-- ----------------------------
BEGIN;
INSERT INTO `Category` VALUES ('13', 'html', '0'), ('14', 'css', '0'), ('15', 'fds', '0');
COMMIT;

-- ----------------------------
--  Table structure for `Comment`
-- ----------------------------
DROP TABLE IF EXISTS `Comment`;
CREATE TABLE `Comment` (
  `id` int(10) NOT NULL AUTO_INCREMENT COMMENT '编号',
  `time` varchar(45) NOT NULL COMMENT '评论时间',
  `content` varchar(300) NOT NULL COMMENT '评论内容',
  `article_id` int(10) unsigned NOT NULL,
  `to_uid` int(10) unsigned DEFAULT NULL COMMENT '评论目标人id',
  `from_uid` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`,`from_uid`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `fk_Comment_Article1_idx` (`article_id`),
  KEY `fk_Comment_User2_idx` (`to_uid`),
  KEY `fk_Comment_User1_idx` (`from_uid`),
  CONSTRAINT `fk_Comment_Article10` FOREIGN KEY (`article_id`) REFERENCES `article` (`id`),
  CONSTRAINT `fk_Comment_User1` FOREIGN KEY (`from_uid`) REFERENCES `user` (`id`),
  CONSTRAINT `fk_Comment_User2` FOREIGN KEY (`to_uid`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8 COMMENT='关系表-留言表';

-- ----------------------------
--  Records of `Comment`
-- ----------------------------
BEGIN;
INSERT INTO `Comment` VALUES ('9', '2019-09-10 10:20:10', 'fdafe', '1', null, '1'), ('10', '2018-06-31 01:22:03', 'fdasfsdfs', '86', null, '1'), ('11', '2018-06-31 01:23:01', 'feafefa', '86', null, '1'), ('12', '2018-06-31 01:25:04', 'fdsafsfasf', '86', null, '1'), ('13', '2018-06-31 01:25:11', 'fdsafsfasffdasff', '86', null, '1'), ('14', '2018-06-31 01:45:08', 'fdafasf', '86', null, '1'), ('15', '2018-06-31 02:01:31', '@garven: feffef', '86', null, '1'), ('16', '2018-06-31 02:02:48', '@garven:fdsfdasfsa', '86', null, '1'), ('17', '2018-06-31 02:05:06', '@garven:fewfew', '86', '1', '1'), ('18', '2018-06-31 02:07:05', 'fdsfsa', '86', '1', '1'), ('19', '2018-06-31 09:49:37', 'kkk', '86', '1', '1'), ('20', '2018-06-31 09:49:53', 'oooo', '1', '1', '1'), ('21', '2018-06-31 09:50:01', '@garv:oooo', '1', null, '1'), ('22', '2018-06-31 09:51:11', '@garv:oooo', '1', null, '1'), ('23', '2018-06-31 09:51:51', '@garveeen:fewafwa', '1', null, '1'), ('24', '2018-06-31 13:11:20', 'fdsafsa', '1', null, '1'), ('25', '2018-06-31 13:11:58', 'fdsafas', '86', '1', '1'), ('26', '2018-06-31 13:12:44', 'fdfafe', '86', null, '1'), ('27', '2018-06-31 13:18:32', 'fdsfdsa', '86', '1', '43'), ('28', '2018-06-31 21:58:37', 'fdasfs', '86', null, '43'), ('29', '2018-06-31 21:58:45', 'fdasfsfdsa', '86', null, '43'), ('30', '2018-06-31 22:16:50', '范德萨发生', '86', null, '43'), ('31', '2018-06-31 22:17:58', 'fdasfs', '86', null, '43'), ('32', '2018-06-31 22:18:03', 'fdasfsfdsa', '86', null, '43'), ('33', '2018-06-31 22:18:09', 'fdasfsfdsa', '86', '1', '43'), ('34', '2018-06-31 22:24:09', 'fdafas', '86', '1', '43'), ('35', '2018-07-02 02:22:06', 'fdjaslfasf', '87', null, '1'), ('36', '2018-07-03 21:21:04', '瓦非法', '87', null, '1'), ('37', '2018-07-04 01:02:25', 'ds a', '87', null, '1'), ('38', '2018-07-04 01:13:25', 'dfas', '87', null, '1'), ('39', '2018-07-05 11:57:11', 'fdasdaf', '87', null, '1');
COMMIT;

-- ----------------------------
--  Table structure for `Liked`
-- ----------------------------
DROP TABLE IF EXISTS `Liked`;
CREATE TABLE `Liked` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` int(11) NOT NULL COMMENT '0 - 博文点赞\n1 - 评论点赞\n2 - 回复点赞\n3 - 作品点赞',
  `status` int(11) NOT NULL COMMENT '0 - 取点赞\n1 - 有点赞',
  `article_id` int(10) unsigned DEFAULT NULL COMMENT '文章id',
  `comment_id` int(10) DEFAULT NULL,
  `user_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`,`user_id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `fk_Like_Article1_idx` (`article_id`),
  KEY `fk_Like_Comment1_idx` (`comment_id`),
  KEY `fk_Like_User1_idx` (`user_id`),
  CONSTRAINT `fk_Like_Article1` FOREIGN KEY (`article_id`) REFERENCES `article` (`id`),
  CONSTRAINT `fk_Like_Comment1` FOREIGN KEY (`comment_id`) REFERENCES `comment` (`id`),
  CONSTRAINT `fk_Like_User1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=55 DEFAULT CHARSET=utf8 COMMENT='关系表-点赞表';

-- ----------------------------
--  Records of `Liked`
-- ----------------------------
BEGIN;
INSERT INTO `Liked` VALUES ('3', '1', '1', null, '18', '1'), ('4', '1', '1', null, '17', '1'), ('7', '1', '1', null, '16', '1'), ('8', '1', '1', null, '15', '1'), ('9', '1', '1', null, '14', '1'), ('10', '1', '1', null, '13', '1'), ('11', '1', '1', null, '12', '1'), ('12', '1', '1', null, '11', '1'), ('13', '1', '1', null, '10', '1'), ('14', '1', '1', null, '23', '1'), ('15', '1', '0', null, '22', '1'), ('16', '1', '0', null, '21', '1'), ('17', '1', '1', null, '9', '1'), ('18', '1', '1', null, '20', '1'), ('19', '1', '1', null, '24', '1'), ('20', '1', '1', null, '19', '1'), ('21', '1', '0', null, '25', '1'), ('22', '1', '0', null, '26', '43'), ('23', '1', '0', null, '27', '43'), ('24', '1', '0', null, '25', '43'), ('25', '1', '1', null, '19', '43'), ('26', '1', '1', null, '16', '43'), ('27', '1', '1', null, '14', '43'), ('28', '1', '0', null, '29', '43'), ('29', '1', '0', null, '28', '43'), ('34', '1', '1', null, '18', '43'), ('35', '1', '0', null, '30', '43'), ('36', '1', '0', null, '31', '43'), ('37', '1', '0', null, '32', '43'), ('38', '1', '1', null, '33', '43'), ('39', '1', '1', null, '34', '43'), ('47', '0', '1', '1', null, '1'), ('48', '0', '1', '1', null, '43'), ('49', '0', '0', '86', null, '43'), ('50', '0', '1', '87', null, '1'), ('51', '1', '1', null, '35', '1'), ('52', '1', '1', null, '37', '1'), ('53', '1', '0', null, '36', '1'), ('54', '1', '1', null, '38', '1');
COMMIT;

-- ----------------------------
--  Table structure for `Street`
-- ----------------------------
DROP TABLE IF EXISTS `Street`;
CREATE TABLE `Street` (
  `text` varchar(30) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL COMMENT '街道名',
  `id` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL COMMENT '街道id'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='实体表-街道表';

-- ----------------------------
--  Table structure for `User`
-- ----------------------------
DROP TABLE IF EXISTS `User`;
CREATE TABLE `User` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '博主编号',
  `account` varchar(20) DEFAULT NULL COMMENT '账号',
  `name` varchar(20) NOT NULL COMMENT '姓名',
  `password` varchar(100) DEFAULT NULL COMMENT '密码',
  `salt` varchar(50) DEFAULT NULL,
  `resume_url` varchar(100) DEFAULT NULL COMMENT '简历链接',
  `secondary_password` varchar(100) DEFAULT NULL COMMENT '二级密码',
  `address` varchar(30) DEFAULT NULL COMMENT '地址id',
  `wechat` varchar(40) DEFAULT NULL COMMENT '微信id',
  `github_url` varchar(40) DEFAULT NULL COMMENT 'github',
  `phone` varchar(15) DEFAULT NULL COMMENT '手机号',
  `avatar_url` varchar(100) DEFAULT NULL COMMENT '头像src',
  `github_id` varchar(45) DEFAULT NULL COMMENT 'Github id - 基于github第三方登录的游客信息的唯一标志',
  `role` int(11) NOT NULL DEFAULT '0' COMMENT '0 - 普通用户\n1 - 博主',
  `email` varchar(30) DEFAULT '' COMMENT 'email',
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `account` (`account`),
  UNIQUE KEY `github_id_UNIQUE` (`github_id`),
  UNIQUE KEY `github_UNIQUE` (`github_url`),
  UNIQUE KEY `phone_UNIQUE` (`phone`)
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8 COMMENT='实体表-用户表';

-- ----------------------------
--  Records of `User`
-- ----------------------------
BEGIN;
INSERT INTO `User` VALUES ('1', 'jf00258jf', 'garven', 'edce8a398b029024a3562fd202c866b5', '03effe232938332ba34f8af58203c808', null, null, '140300', 'jf00258jf', 'garven.com/garvenzhang', '15622178496', null, null, '1', 'jf00258jf@hotmail.com'), ('43', null, 'garven', null, null, null, null, null, null, 'https://github.com/GarvenZhang', null, 'https://avatars2.githubusercontent.com/u/20942047?v=4', '20942047', '0', 'jf00258jf@hotmail.com');
COMMIT;

-- ----------------------------
--  Table structure for `Works`
-- ----------------------------
DROP TABLE IF EXISTS `Works`;
CREATE TABLE `Works` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '编号',
  `title` varchar(45) NOT NULL DEFAULT '作品' COMMENT '作品标题',
  `pubtime` varchar(45) DEFAULT NULL COMMENT '出品时间',
  `url` varchar(45) DEFAULT NULL COMMENT '查看地址',
  `github_url` varchar(45) DEFAULT NULL COMMENT 'github源码地址',
  `cover` varchar(45) DEFAULT NULL COMMENT '封面地址',
  `user_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`,`user_id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `fk_Works_User1_idx` (`user_id`),
  CONSTRAINT `fk_Works_User1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='实体表-作品表';

SET FOREIGN_KEY_CHECKS = 1;
