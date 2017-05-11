var mongo = require('mongodb').MongoClient;
var event = require('../events/events.js');
const DB_CONN_STR = 'mongodb://localhost:27017/store';

var dbObj = {
    insert: function (data) {
        mongo.connect(DB_CONN_STR, function (err, db) {
            if (err) {
                event.emit('DB_CONNECT_ERROR', err);
            } else {
                var us = db.collection('goods');
                us.insert(data, function (err, data2) {
                    if (err) {
                        event.emit('DB_INSERT_ERROR', err);
                    } else {
                        event.emit('DB_INSERT_SUCCESS', data2);
                        db.close();
                    }
                })
            }
        })
    },
    find0: function (data) {
        mongo.connect(DB_CONN_STR, function (err, db) {
            if (err) {
                event.emit('DB_CONNECT_ERROR', err);
            } else {
                var us = db.collection('goods');
                us.find({goodsName: data}).toArray(function (err, data2) {
                    if (err) {
                        event.emit('DB_FIND_ERROR', err);
                    } else {
                    	
                        event.emit('DB_FIND_SUCCESS', data2);
                        db.close();
                    }
                });
            }
        })
    },
    find: function (data) {
        mongo.connect(DB_CONN_STR, function (err, db) {
            if (err) {
                event.emit('DB_CONNECT_ERROR', err);
            } else {
                var us = db.collection('goods');
                us.find().toArray(function (err, data2) {
                    if (err) {
                        event.emit('DB_FIND_ERROR', err);
                    } else {
                    	var data3;
                    	for(var i=0; i<data2.length; i++){
                    		if(data2[i]._id == data){
                    			data3 = data2[i];
                    		};
                    	};
                        event.emit('DB_FIND_SUCCESS', data3);
                        db.close();
                    }
                });
            }
        })
    },
    list: function () {
        mongo.connect(DB_CONN_STR, function (err, db) {
            if (err) {
                event.emit('DB_CONNECT_ERROR', err);
            } else {
                var us = db.collection('goods');
                us.find({},{_id:1,goodsName:1}).toArray(function (err, data2) {
                    if (err) {
                        event.emit('DB_FIND_ERROR', err);
                    } else {
                        event.emit('DB_FIND_SUCCESS', data2);
                        db.close();
                    }
                });
            }
        })
    }
}

module.exports = dbObj;