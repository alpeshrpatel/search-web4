
angular.module('SchoolDetailsCtrl', []).controller('SchoolDetailsCtrl', function($scope,$http,$routeParams) {
	
	$scope.tagline = 'Nothing beats a pocket protector!';
	console.log($routeParams.id);
	var getschoolEndpoint='http://localhost:4000/api/schools/id/' +$routeParams.id
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
	
	

});