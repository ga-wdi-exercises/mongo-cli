var mongo = require("mongodb").MongoClient
var prompt = require("prompt-sync")()
var url = "mongodb://localhost:27017/restaurant_db"

mongo.connect(url, function(err, db){
  var collection = db.collection('restaurants');
  var number = prompt("Type 1 and press enter to display all restaurants' names: ")
  if(number == "1"){
    collection.find().toArray(function(err, doc){
      console.log(doc)
    })
    var name = prompt("Enter the name of the restaurant you would like to look at: ")
    if(name){
      collection.find({name: name}).toArray(function(err, doc){
        console.log(doc)
      })
    }
  }
})
