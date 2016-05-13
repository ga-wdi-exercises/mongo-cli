## Seeds

To create and seed the database open up mongo with:
```
$ mongo
```
_*Note*_ this requires mongod to be running

Then run the following commands in the REPL:

```
use restaurant_db
db.restaurants.remove({});
db.restaurants.insert([
  {
    "name": "Cookies Corner",
    "address": {
      "street" : "1970 2nd St NW",
      "zipcode" : 20001
    },
    "yelp": "http://www.yelp.com/biz/cookies-corner-washington"
  },
  {
    "name": "The Blind Dog Cafe",
    "address": {
      "street": "944 Florida Ave",
      "zipcode": 20001
    },
    "yelp": "http://www.yelp.com/biz/the-blind-dog-cafe-washington-2?osq=cookies"
  },
  {
    "name": "Birch & Barley",
    "address": {
      "street": "1337 14th St NW",
      "zipcode": 20005
    },
    "yelp": "http://www.yelp.com/biz/birch-and-barley-washington?osq=Restaurants+cookies"
  },
  {
    "name": "Captain Cookie and the Milk Man",
    "address": {
      "street": "Dupont Circle",
      "zipcode": 20036
    },
    "yelp": "http://www.yelp.com/biz/captain-cookie-and-the-milk-man-washington-5"
  },
  {
    "name": "J's Cookies",
    "address": {
      "street": "1700 N Moore St",
      "zipcode": 22209
    },
    "yelp": "http://www.yelp.com/biz/js-cookies-arlington" }
])
```
