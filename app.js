var mongo = require("mongodb").MongoClient
var url = "mongodb://localhost:27017restaurant_db"
var prompt = require("prompt-sync")()

mongo.connect(url, function(err, db){
  var collection = db.collection('restaurants');
  var number = prompt("Type 1 and press enter to display all restaurants' names: ")
  if(number == "1"){
    collection.find().toArray(function(err, doc){
      console.log(doc)
    })
  }
})
