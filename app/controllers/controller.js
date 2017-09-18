
app.controller('ctrl', ['$scope', '$http',
	
	function($scope, $http) {
		console.log("hello from controller.js");

		// $http.get('/stockList').then(successCallBack, failCallBack);

		// function successCallBack(res) {
		// 	console.log("Data received");
		// 	$scope.stockList = res.data;
		// }

		// function failCallBack(err) {
  // 			console.log(err.message);
 	// 	}
 	}
 	
]);