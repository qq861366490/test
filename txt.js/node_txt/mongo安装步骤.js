1 安装 (...)
2.创建数据库存储目录  //d:/MongoDB/data
3,进入mongo安装目录中的bin目录  打开终端  输入命令  mongod --dbpath d:\MongoDB\data   (启动服务)

4,(倘若觉得每次进入bin目录麻烦的话,可将bin目录配如环境变量)
(
    1,进入mongodb安装目录的bin目录,并复制路径
    2,打开环境变量  计算机右键--->属性---->高级系统设置---->环境变量--->选中PATH--->编辑------->将光标移到行尾------>添加;并粘贴路径
    3,点击确定*3
)

5,数据库使用   输入命令  mongo  即可开始使用