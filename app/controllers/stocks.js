app.controller('stocksController', 
	function($scope) {
	    function(req, res) {
		  	var cursor = db.collection('stocks').find()
		  	cursor.toArray(
				function(err, results) {
					  console.log(results)
					  $scope.stocks = results;
				}
			)	
		}
	}
);