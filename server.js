var express = require("express");
var route = express();

route.use(express.static(__dirname + "/public"));

route.listen(3000);
console.log("server is running on port 3000");
