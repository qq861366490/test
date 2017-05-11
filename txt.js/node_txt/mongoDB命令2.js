db //显示当前数据库

show dbs //显示已存在的数据库列表

use 数据库名字 //切换当前使用的数据库(如果数据库不存在,则创建数据库)

db.getName() //显示当前数据库

db.dropDatabase() //删除当前数据库

db.createCollection(name,obj) //name 为字符串  聚集集合的名字   聚集集合的相关属性  size

db.getCollectionNames()//显示所有聚集集合的列表

db.printCollectionStats()//显示集合信息

db.集合名.save({数据})//聚集集合数据插入
db.集合名.insert({数据})//同上
db.集合名.insertMany([])//同时插入多条数据,参数为数组  数组元素为需要插入的文档
db.集合名.update({},{$set:{
    name : "aaa"
}})//更新数据,参数1为条件 参数2的$set对象用来设置需要更新的属性值
db.集合名.updateMany({},{$set:{}})//同时操作多条数据
db.集合名.remove({})//必须添加参数,即使是空对象,  对象有值的时候 为删除指定数据

db.集合名.find()//查询聚集集合数据
