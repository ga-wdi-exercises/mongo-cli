var mongo = require("mongodb").MongoClient
var url = "mongodb://localhost:27017/restaurant_db"
var prompt = require("prompt-sync")()

mongo.connect(url, function(err, db){
  var collection = db.collection('restaurants');
  var number = prompt("Type 1 and press enter to display all restaurants' names: " )
  if(number == "1"){
    collection.find().forEach(function(u) {
      var result = [];
      result.push(u.name)
      console.log(result)
    })
  }
})

mongo.connect(url, function(err, db){
  var collection = db.collection('restaurants');
  var display = prompt("Type the name of a restaurant to view more info: ")
  if(display){
    collection.find({name: display}).forEach(function(u){
      var result = []
      result.push(u)
      console.log(result)

    })
  };
})
