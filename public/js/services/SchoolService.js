angular.module('SchoolService', []).factory('School', ['$http', function($http) {
		
	var addSchool = function(school){
		console.log(school);
		$http.post('/api/schools/', school).success(function(response){
			window.location.href='#/schools';
		});
	}
	

}]);