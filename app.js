var mongo = require("mongodb").MongoClient
var prompt = require('prompt-sync')();
var url = "mongodb://localhost:27017/restaurant_db"


mongo.connect(url, function(err, db){
  var collection = db.collection('restaurants');
  var input = prompt('Type 1 and press enter to display all names of restaurants. Type restaurant name and press enter to display a single restaurant: ');
  if(input == "1"){
    collection.find().toArray(function(err, doc){
      console.log(doc)
    })
  }
  else{
    collection.find({"name": input}).toArray(function(err, doc){
      console.log(doc)
    })
  };
});
