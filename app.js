var mongo = require("mongodb").MongoClient
var prompt = require("prompt-sync")();

var url = "mongodb://localhost:27017/restaurant_db";

mongo.connect(url, function(err, db){
  var collection = db.collection('restaurants');
  var number = prompt("Type 1 to view all restaurants or 2 to view Yelp: ")
  if(number == "1"){
    collection.find().toArray(function(err, doc){
      console.log(err);
    });
  }else if(number == "2"){
    collection.find().toArray(function(err, doc){
      for(var i = 0; i < 4; i++){
        console.log(doc[i].yelp);
      }
    })
};
});
