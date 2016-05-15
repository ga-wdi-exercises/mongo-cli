var mongo = require("mongodb").MongoClient
var url = "mongodb://localhost:27017/restaurant_db"
var prompt = require("prompt-sync")()

mongo.connect(url, function(err, db){
  var collection = db.collection('restaurants');
  var number = prompt("Type 1 and press enter to display all restaurants' names: ")
  collection.find().forEach(function(u) {
    var result = [];
    result.push(u.name)
    console.log(result)
  })
  }
)
