var mongo = require("mongodb").MongoClient
var prompt = require("prompt-sync")();
var url = "mongodb://localhost:27017/restaurant_db"


mongo.connect(url, function(err, db){
  var collection = db.collection('restaurants');
  var option = prompt("Type 1 and press enter to display all restaurants' names. \n Type 2 and press enter to search restaurants' by state. ")
  if (option == "1"){
    collection.find().toArray(function(err, doc){
      console.log(doc)
    })
  }
  if (option == "2"){
    var state = prompt('Type State of the restaurant')
    collection.find({'state': state}).toArray(function(err, doc){
      console.log(doc)
    })
  }
})
