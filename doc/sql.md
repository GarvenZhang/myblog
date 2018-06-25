# sql学习笔记

## 1.建表

```

CREATE TABLE 表名(
    列名1 数据类型 列级约束 NULL值 DEFAULT 值,
    列名1 数据类型 列级约束 NULL值,
    ...
);

```

### 1.1 数据类型:

### 1.2 列级约束:

1.2.1 `PRIMARY KEY`: 主关键字约束

1.2.2 `UNIQUE`: 唯一性约束

1.2.3 `FOREIGN KEY REFERENCE`: 外部关键字约束, 用来说明表之间的参照关系

`ON DELETE/UPDATE {NO ACTION|CASCADE|SET NULL|SET DEFAULT}`:

NO ACTION: 禁止删除或更新被参照记录

CASCADE: 进行级联处理

SET NULL： 将参照记录的对应字段设置为空值

SET DEFAULT: 将参照记录的对应字段设置为默认值

1.2.4 `CHECK`: 域完整性约束, 用来说明该列的取值范围, 如`sex INT(1) CHECK (sex = 0 OR sex = 1);`, 如`status CHAR(4) (status IN '正常', '失败'');`

### 1.3 NULL:

+ 只有 NOT NULL 列可作为主键

+ 不写默认为 NULL

### 1.4 DEFAULT:

+ 插入时不给出值则采用默认值

## 2.更新表

```

ALTER TABLE 表名
ADD 列名 列定义...；

```

## 3.删除表

```

DROP TABLE 表名;

```

