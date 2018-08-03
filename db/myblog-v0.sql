/*
 Navicat MySQL Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 50720
 Source Host           : localhost
 Source Database       : myblog

 Target Server Type    : MySQL
 Target Server Version : 50720
 File Encoding         : utf-8

 Date: 07/04/2018 13:44:03 PM
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
  `readNum` int(10) NOT NULL DEFAULT '0' COMMENT '浏览次数',
  `likedNum` int(10) NOT NULL DEFAULT '0' COMMENT '点赞次数',
  `prevId` char(10) DEFAULT NULL COMMENT '上一篇id',
  `nextId` char(10) DEFAULT NULL COMMENT '下一篇id	',
  `pubtime` varchar(10) DEFAULT NULL COMMENT '写作开始时间',
  `Blogger_id` int(10) unsigned NOT NULL DEFAULT '1' COMMENT '博主编号',
  `ArticleType_id` int(10) unsigned NOT NULL COMMENT '文章类别编号',
  `cover` varchar(200) DEFAULT NULL COMMENT '封面uri',
  `commentNum` int(10) DEFAULT '0' COMMENT '评论数',
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `title` (`title`) USING BTREE,
  KEY `fk_Article_Blogger1_idx` (`Blogger_id`),
  KEY `fk_Article_ArticleType1_idx` (`ArticleType_id`),
  KEY `lastId` (`prevId`) USING BTREE,
  KEY `nextId` (`nextId`) USING BTREE,
  CONSTRAINT `fk_Article_ArticleType1` FOREIGN KEY (`ArticleType_id`) REFERENCES `ArticleType` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Article_Blogger1` FOREIGN KEY (`Blogger_id`) REFERENCES `Blogger` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=80 DEFAULT CHARSET=utf8 COMMENT='文章表';

-- ----------------------------
--  Table structure for `ArticleType`
-- ----------------------------
DROP TABLE IF EXISTS `ArticleType`;
CREATE TABLE `ArticleType` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '编号',
  `name` varchar(30) NOT NULL COMMENT '名称',
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COMMENT='文章类别表';

-- ----------------------------
--  Table structure for `Blogger`
-- ----------------------------
DROP TABLE IF EXISTS `Blogger`;
CREATE TABLE `Blogger` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '博主编号',
  `account` varchar(20) NOT NULL COMMENT '账号',
  `name` varchar(20) NOT NULL COMMENT '姓名',
  `password` varchar(100) NOT NULL COMMENT '密码',
  `salt` varchar(50) DEFAULT NULL,
  `resume_url` varchar(100) DEFAULT NULL COMMENT '简历链接',
  `secondary_password` varchar(100) DEFAULT NULL COMMENT '二级密码',
  `address` varchar(30) DEFAULT NULL COMMENT '地址id',
  `wechat` varchar(40) DEFAULT NULL COMMENT '微信id',
  `github` varchar(40) DEFAULT NULL COMMENT 'github',
  `phone` int(15) DEFAULT NULL COMMENT '手机号',
  `avator` varchar(100) DEFAULT NULL COMMENT '头像src',
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `account` (`account`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8 COMMENT='博主表';

-- ----------------------------
--  Table structure for `BloggerChat`
-- ----------------------------
DROP TABLE IF EXISTS `BloggerChat`;
CREATE TABLE `BloggerChat` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '编号',
  `Blogger_id` int(10) unsigned NOT NULL COMMENT '博主编号',
  `Chatroom_id` int(10) unsigned NOT NULL COMMENT '聊天室编号',
  `time` datetime NOT NULL COMMENT '发言时间',
  `content` varchar(500) DEFAULT NULL COMMENT '发言内容',
  PRIMARY KEY (`Blogger_id`,`Chatroom_id`,`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `fk_Blogger_has_Chatroom_Chatroom1_idx` (`Chatroom_id`),
  KEY `fk_Blogger_has_Chatroom_Blogger1_idx` (`Blogger_id`),
  CONSTRAINT `fk_Blogger_has_Chatroom_Blogger1` FOREIGN KEY (`Blogger_id`) REFERENCES `Blogger` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Blogger_has_Chatroom_Chatroom1` FOREIGN KEY (`Chatroom_id`) REFERENCES `Chatroom` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='博主参与表';

-- ----------------------------
--  Table structure for `BloggerReply`
-- ----------------------------
DROP TABLE IF EXISTS `BloggerReply`;
CREATE TABLE `BloggerReply` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '编号',
  `Blogger_id` int(10) unsigned NOT NULL COMMENT '博主编号',
  `Vistor_id` int(10) unsigned NOT NULL COMMENT '游客编号',
  `time` datetime NOT NULL COMMENT '回复时间',
  `content` varchar(500) NOT NULL COMMENT '回复内容',
  PRIMARY KEY (`id`,`Blogger_id`,`Vistor_id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `fk_Blogger_has_Vistor_Vistor1_idx` (`Vistor_id`),
  KEY `fk_Blogger_has_Vistor_Blogger1_idx` (`Blogger_id`),
  CONSTRAINT `fk_Blogger_has_Vistor_Blogger1` FOREIGN KEY (`Blogger_id`) REFERENCES `Blogger` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Blogger_has_Vistor_Vistor1` FOREIGN KEY (`Vistor_id`) REFERENCES `Vistor` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='博主回复表';

-- ----------------------------
--  Table structure for `Chatroom`
-- ----------------------------
DROP TABLE IF EXISTS `Chatroom`;
CREATE TABLE `Chatroom` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '编号',
  `type` bit(1) NOT NULL DEFAULT b'1' COMMENT '聊天室类别;\n0为多人，1为双人',
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8 COMMENT='聊天室表';

-- ----------------------------
--  Table structure for `Coding`
-- ----------------------------
DROP TABLE IF EXISTS `Coding`;
CREATE TABLE `Coding` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '作品编号',
  `title` varchar(100) NOT NULL COMMENT '标题',
  `picSrc` varchar(200) DEFAULT NULL COMMENT '封面图片地址',
  `github_url` varchar(200) NOT NULL COMMENT 'github上源码链接',
  `demo_url` varchar(200) NOT NULL COMMENT 'DEMO链接',
  `analysis_url` varchar(200) NOT NULL COMMENT '源码解析链接',
  `Blogger_id` int(10) unsigned NOT NULL COMMENT '博主编号',
  `pubtime` date NOT NULL COMMENT '编写开始日期',
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `fk_Coding_Blogger_idx` (`Blogger_id`),
  CONSTRAINT `fk_Coding_Blogger` FOREIGN KEY (`Blogger_id`) REFERENCES `Blogger` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='编写表';

-- ----------------------------
--  Table structure for `Message`
-- ----------------------------
DROP TABLE IF EXISTS `Message`;
CREATE TABLE `Message` (
  `id` int(10) unsigned NOT NULL COMMENT '编号',
  `Article_id` int(10) unsigned NOT NULL COMMENT '文章编号',
  `Vistor_id` int(10) unsigned NOT NULL COMMENT '游客编号',
  `time` datetime NOT NULL COMMENT '留言时间',
  `content` varchar(500) NOT NULL COMMENT '留言内容',
  PRIMARY KEY (`id`,`Article_id`,`Vistor_id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `fk_Article_has_Vistor_Vistor1_idx` (`Vistor_id`),
  KEY `fk_Article_has_Vistor_Article1_idx` (`Article_id`),
  CONSTRAINT `fk_Article_has_Vistor_Article1` FOREIGN KEY (`Article_id`) REFERENCES `Article` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Article_has_Vistor_Vistor1` FOREIGN KEY (`Vistor_id`) REFERENCES `Vistor` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='留言表';

-- ----------------------------
--  Table structure for `Street`
-- ----------------------------
DROP TABLE IF EXISTS `Street`;
CREATE TABLE `Street` (
  `text` varchar(30) COLLATE utf8_bin DEFAULT NULL COMMENT '街道名',
  `id` varchar(20) COLLATE utf8_bin DEFAULT NULL COMMENT '街道id'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='街道表';

-- ----------------------------
--  Table structure for `Vistor`
-- ----------------------------
DROP TABLE IF EXISTS `Vistor`;
CREATE TABLE `Vistor` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '编号',
  `email` varchar(50) NOT NULL COMMENT '邮箱',
  `name` varchar(30) NOT NULL COMMENT '姓名',
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8 COMMENT='游客表';

-- ----------------------------
--  Table structure for `VistorChat`
-- ----------------------------
DROP TABLE IF EXISTS `VistorChat`;
CREATE TABLE `VistorChat` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '编号',
  `Vistor_id` int(10) unsigned NOT NULL COMMENT '游客编号',
  `Chatroom_id` int(10) unsigned NOT NULL COMMENT '聊天室编号',
  `time` datetime NOT NULL COMMENT '发言时间',
  `content` varchar(500) NOT NULL COMMENT '发言内容',
  PRIMARY KEY (`id`,`Vistor_id`,`Chatroom_id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `fk_Chatroom_has_Vistor_Vistor1_idx` (`Vistor_id`),
  KEY `fk_Chatroom_has_Vistor_Chatroom1_idx` (`Chatroom_id`),
  CONSTRAINT `fk_Chatroom_has_Vistor_Chatroom1` FOREIGN KEY (`Chatroom_id`) REFERENCES `Chatroom` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Chatroom_has_Vistor_Vistor1` FOREIGN KEY (`Vistor_id`) REFERENCES `Vistor` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8 COMMENT=' 游客参与表';

-- ----------------------------
--  Table structure for `VistorReply`
-- ----------------------------
DROP TABLE IF EXISTS `VistorReply`;
CREATE TABLE `VistorReply` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '编号',
  `Vistor_id` int(10) unsigned NOT NULL COMMENT '回复者游客编号',
  `Vistor_id1` int(10) unsigned NOT NULL COMMENT '留言者游客编号',
  `time` datetime NOT NULL COMMENT '回复时间',
  `content` varchar(500) NOT NULL COMMENT '回复内容',
  PRIMARY KEY (`id`,`Vistor_id`,`Vistor_id1`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `fk_Vistor_has_Vistor_Vistor2_idx` (`Vistor_id1`),
  KEY `fk_Vistor_has_Vistor_Vistor1_idx` (`Vistor_id`),
  CONSTRAINT `fk_Vistor_has_Vistor_Vistor1` FOREIGN KEY (`Vistor_id`) REFERENCES `Vistor` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Vistor_has_Vistor_Vistor2` FOREIGN KEY (`Vistor_id1`) REFERENCES `Vistor` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='游客回复表';

SET FOREIGN_KEY_CHECKS = 1;
