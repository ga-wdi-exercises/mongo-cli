var mongo = require("mongodb").MongoClient
var url = "mongodb://localhost:27017/restaurant_db"
var prompt = require("prompt-sync")()

mongo.connect(url, function(err, db){
  var collection = db.collection('restaurants');
  var number = prompt("Type 1 and press enter to display all restaurants' names: ")
  if(number == "1"){
    collection.find().toArray(function(err, doc){
        console.log(doc.length);
        for (var i=0; i<doc.length; ++i){
            console.log(doc[i].name);
        }
    })
  }
    else if(number == "2"){
      var name = prompt("Enter the restaurant's name to see more info: ")
      collection.find(name).toArray(function(err, doc){
        console.log(doc);
      });
    };

});


// var result = objArray.map(function(a) {return a.foo;});
// function getFields(input, field) {
//     var output = [];
//     for (var i=0; i < input.length ; ++i)
//         output.push(input[i][field]);
//     return output;
// }

// var result = getFields(objArray, "foo"); // returns [ 1, 3, 5 ]
