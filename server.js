var express = require("express");
var route = express();
var mongodb = require('mongodb')
var mongojs = require('mongojs')
 
mongodb.Db.connect('mongodb://localhost:27017/posible', 
	function (err, theDb) {
    	var db = mongojs(theDb, ['stocks'])
	}
);

route.use(express.static(__dirname + "/public"));

route.get("/stockList", function (req, res) {
	console.log("server.js received a get request")
	stock1 = {
		sku: 'OLA1',
		upc: 'UPC1',
		name: 'Cheese CupCake',
		size: 'regular',
		quantity: '10'
	}
	stock2 = {
		sku: 'OLA1',
		upc: 'UPC1',
		name: 'Cheese CupCake',
		size: 'regular',
		quantity: '10'
	}
	var stockList = [stock1, stock2];
	req.json(stockList);
});

route.listen(3000);
console.log("server is running on port 3000");
