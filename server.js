const express = require("express");
const route = express();
const bodyParser= require('body-parser')
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
// var Server = mongodb.Server;
const mongojs = require('mongojs');

// Connect to the db
var db;
MongoClient.connect("mongodb://localhost:27017/posible", function(err, database) {
  if (err) return console.log(err)
  db = database
  // NodeJS listening to port 3000
  route.listen(3000, function() {
	console.log("server is running on port 3000");
  })
});

// Connect to the db
// var mongoclient = new MongoClient(new Server("localhost", 27017), {native_parser: true});
// mongoclient.open(function(err, mongoclient) {

//     // Get the first db 
//     var db = mongoclient.db("posible");
//     var stocks = db.collection('stocks').find({author:"Daniel"}).toArray(
//     	function(err, results) {
//     		// output all records
// 	    	console.log(results); 
// 		}
// 	);
     
// });

// Route to index.html that is inside the /public folder
route.use(express.static(__dirname + "/public"));

route.use(bodyParser.urlencoded({extended: true}))

route.post('/stocks', function(req, res) {
  console.log('Hellooooooooooooooooo! you called /stockInsert');
  console.log(req.body);
  db.collection('stocks').save(req.body, function(err, result) {
    if (err) return console.log(err)
    console.log('saved to database')
    res.redirect('/')
  })
});

route.get('/', function(req, res) {
  var cursor = db.collection('stocks').find()
  cursor.toArray(function(err, results) {
	  console.log(results)
	  // send HTML file populated with quotes here
	})
});

// route.get("/stockList", function(req, res) {
// 	console.log("server.js received a get request");
// 	stock1 = {
// 		sku: 'OLA1',
// 		upc: 'UPC1',
// 		name: 'Cheese CupCake',
// 		size: 'regular',
// 		quantity: '10'
// 	}
// 	stock2 = {
// 		sku: 'OLA1',
// 		upc: 'UPC1',
// 		name: 'Cheese CupCake',
// 		size: 'regular',
// 		quantity: '10'
// 	}
// 	var stockList = [stock1, stock2];
// 	// req.json(stockList);
// });
