angular.module('MainCtrl', []).controller('MainController', function($scope,$http, $routeParams) {

	$scope.tagline = 'To the moon and back!';	
	$scope.isaddschool=false;
	$scope.issearchdata = false;
	$scope.schoollist = null;
	console.log("issearchdata : " + $scope.issearchdata );
	
	
	$scope.onClickGo = function(){
		console.log('On Click Go');
//		console.log($scope.pincode);
//		console.log($scope.cityname);
		$http({
			  method: 'GET',
			  url: 'http://localhost:4000/api/schools/'
			}).then(function successCallback(response) {
				$scope.schoollist = response.data;
				$scope.isaddschool=true;
				$scope.issearchdata = true;
				console.log("issearchdata : " + $scope.issearchdata );
				
				//console.log("Records :" + JSON.stringify($scope.schoollist));
			  }, function errorCallback(response) {
				  $scope.response=response;
				  console.log("Please check erorr log or console");
			  });
	}
	
	$scope.onClickHome = function(){
		console.log('onClickHome');
		$scope.isaddschool=false;
		$scope.issearchdata = false;
		console.log("issearchdata : " + issearchdata );
	}
	
});