var mongo = require("mongodb").MongoClient
var prompt = require('prompt-sync')();
var url = "mongodb://localhost:27017/restaurant_db"


mongo.connect(url, function(err, db){
  var collection = db.collection('restaurants');
  var input = prompt('Type 1 and press enter to display all names of restaurants. \nType 2 and press enter to search restaurants by name. \nType 3 to add a restaurant: ')
    if(input == "1"){
      collection.find().toArray(function(err, doc){
        console.log(doc)
      })
    }
    if(input == "2"){
      var name = prompt('Type Restaurant Name: ')
      collection.find({"name": name}).toArray(function(err, doc){
        console.log(doc)
      })
    }
    if(input == "3"){
      var newName = prompt('Create a restaurant \nType the name: ')
      collection.insert({"name": newName})

      var newAddress = prompt('Create a restaurant \nType the street address: ')
      collection.update(
        {"name": newName},
        {$set: {"address.street": newAddress}});

      var zipcode = prompt('Create a restaurant \nType the zipcode: ')
      collection.update(
        {"name": newName},
        {$set: {"address.zipcode": zipcode}});

      collection.find({"name": newName}).toArray(function(err, doc){
        console.log(doc)
      })
  }
});
