
angular.module('LoginCtrl', []).controller('LoginCtrl', function($scope,$http,$routeParams) {
	console.log($scope.username);
	console.log($scope.password);
	var getUserEndpoint='http://localhost:4000/api/user/' +$routeParams.username
	console.log(getschoolEndpoint);
	$http({
		  method: 'GET',
		  url: getUserEndpoint
		}).then(function successCallback(response) {
			$scope.school = response.data;
			console.log("Records :" + JSON.stringify($scope.school));
		  }, function errorCallback(response) {
			  $scope.response=response;
			  console.log("Please check erorr log or console");
		  });
	
	
	
	$scope.updateSchool = function(){
		//console.log('JSON :' + JSON.stringify($scope.school));
		var updateschoolEndpoint='http://localhost:4000/api/schools/' +$scope.school._id
		console.log()
		$http({
			  method: 'PUT',
			  url: updateschoolEndpoint,
			  data: $scope.school
			}).then(function successCallback(response) {
				$scope.response=response;
				$scope.message = "Data updated successfully";
				console.log("Data updated successfully");
			  }, function errorCallback(response) {
				  $scope.response=response;
				  console.log("Please check erorr log or console");
			  });
	}

});