var mongo = require("mongodb").MongoClient
var url = "mongodb://localhost:27017/restaurant_db"

mongo.connect(url, function(err, db){
  var collection = db.collection('restaurants');
  collection.find().toArray(function(err, docs){
    console.log(docs);
  })
})
