angular.module('MainCtrl', []).controller('MainController', function($scope,$http, $routeParams) {
	
	var col = 3;
	$scope.tagline = 'To the moon and back!';	
	$scope.isaddschool=false;
	$scope.issearchdata = false;
	$scope.schoollist = null;
	console.log("issearchdata : " + $scope.issearchdata );
	//$scope.loadHeader();
	$http({
		  method: 'GET',
		  url: 'http://localhost:4000/api/headers'
		}).then(function successCallback(response) {
			$scope.headerlist = response.data;
			var headertable = [];
			var headerrow = [];
			for(var i=0; i < $scope.headerlist.length ; i++)
			{
				if(i%col==0){
					headerrow = [];
					headertable.push(headerrow);
				}
				headerrow.push($scope.headerlist[i]);
				//console.log(JSON.stringify($scope.headerlist[i]));
			}
			console.log(headertable);
			$scope.headertable = headertable;
		  }, function errorCallback(response) {
			  $scope.response=response;
			  console.log("Please check erorr log or console : Header service error");
		  });
	
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
				  console.log("Please check erorr log or console :School Service");
			  });
	}
	
	$scope.onClickHome = function(){
		console.log('onClickHome');
		$scope.isaddschool=false;
		$scope.issearchdata = false;
		console.log("issearchdata : " + issearchdata );
	}
	
	$scope.loadHeader = function(){
		$http({
			  method: 'GET',
			  url: 'http://localhost:4000/api/headers'
			}).then(function successCallback(response) {
				$scope.headerlist = response.data;
				console.log(JSON.stringify($scope.headerlist));
			  }, function errorCallback(response) {
				  $scope.response=response;
				  console.log("Please check erorr log or console : Header service error");
			  });
	}
	
});