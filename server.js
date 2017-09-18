const express       = require('express');
const MongoClient   = require('mongodb').MongoClient;
const bodyParser    = require('body-parser');

const db            = require('./config/db');

const app           = express();

const port 			= 8000;

app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect(db.url, function (err, database) {
  if (err) return console.log(err)
  require('./app/routes')(app, database);

  app.listen(port, () => {
    console.log('We are live on ' + port);
  });               
})

// const express = require("express");
// const app = express();
// const port = 3000;
// const bodyParser= require('body-parser')
// const mongodb = require('mongodb');
// const db = require('./config/db');

// const MongoClient = mongodb.MongoClient;
// // var Server = mongodb.Server;
// const mongojs = require('mongojs');

// app.use(bodyParser.urlencoded({extended: true}))

// MongoClient.connect(db.url, function (err, database) {
//   if (err) return console.log(err)
//   require('./public/routes')(app, database);
//   app.listen(port, () => {
//     console.log('We are live on ' + port);
//   });               
// })
// Connect to the db
// var db;
// MongoClient.connect("mongodb://localhost:27017/posible", function(err, database) {
//   if (err) return console.log(err)
//   db = database
//   // NodeJS listening to port 3000
//   app.listen(port, function() {
//     console.log("server is running on port 3000");
//   })
// });

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
// app.use(express.static(__dirname + "/public"));

// app.use(bodyParser.json());

// route.post('/stocks', function(req, res) {
//   console.log('Hellooooooooooooooooo! you called /stockInsert');
//   console.log(req.body);
//   db.collection('stocks').save(req.body, function(err, result) {
//     if (err) return console.log(err)
//     console.log('saved to database')
//     res.redirect('/')
//   })
// });

// route.get('/', function(req, res) {
//   var cursor = db.collection('stocks').find()
//   cursor.toArray(function(err, results) {
// 	  console.log(results)
// 	  // send HTML file populated with quotes here
// 	})
// });

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
