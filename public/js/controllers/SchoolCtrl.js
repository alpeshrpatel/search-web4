
angular.module('SchoolCtrl', []).controller('SchoolController', function($scope,$http) {

	$scope.tagline = 'Nothing beats a pocket protector!';
	$scope.isaddschool=true;
	
	$scope.addSchool = function(){
		console.log("API endpoint :" + config.endpoint.apiurl);
		console.log('JSON :' + JSON.stringify($scope.school));
		$http({
			  method: 'POST',
			  url: 'http://localhost:4000/schools/',
			  data: $scope.school
			}).then(function successCallback(response) {
				$scope.response=response;
				$scope.message = "Data inserted successfully";
				console.log("Record is Created successfully");
			  }, function errorCallback(response) {
				  $scope.response=response;
				  console.log("Please check erorr log or console");
			  });
	}
	
	
	
	

});