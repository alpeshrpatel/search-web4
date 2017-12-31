
angular.module('SchoolDetailsCtrl', []).controller('SchoolDetailsCtrl', function($scope,$http,$routeParams) {
	
	$scope.tagline = 'Nothing beats a pocket protector!';
	console.log($routeParams.id);
	var getschoolEndpoint='http://104.197.215.38:4000/api/schools/id/' +$routeParams.id
	console.log(getschoolEndpoint);
	$http({
		  method: 'GET',
		  url: getschoolEndpoint
		}).then(function successCallback(response) {
			$scope.school = response.data;
			console.log("Records :" + JSON.stringify($scope.school));
		  }, function errorCallback(response) {
			  $scope.response=response;
			  console.log("Please check erorr log or console");
		  });
	
	
	
	$scope.updateSchool = function(){
		//console.log('JSON :' + JSON.stringify($scope.school));
		var updateschoolEndpoint='http://104.197.215.38:4000/api/schools/' +$scope.school._id
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