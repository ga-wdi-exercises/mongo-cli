var mongo = require("mongodb").MongoClient
var url = "mongodb://localhost:27017/restaurant_db"
var prompt = require("prompt-sync")()

mongo.connect(url, function(err, db){
  var collection = db.collection('restaurants');
  var number = prompt("Type 1 and press enter to display all restaurants' names: ")
  if(number == "1"){
    collection.find().toArray(function(err, doc){
      console.log(doc.name);
    })
  }
    else if(number == "2"){
      var name = prompt("Enter the restaurant's name to see more info: ")
      collection.find(name).toArray(function(err, doc){
        console.log(doc);
      });
    };

});
