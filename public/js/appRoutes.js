angular.module('appRoutes', []).config([ '$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider
		// home page
		.when('/', {
			templateUrl : 'views/home.html',
			controller : 'MainController'
		})
		.when('/home', {
			templateUrl : 'views/home.html',
			controller : 'MainController'
		})

		.when('/nerds', {
			templateUrl : 'views/nerd.html',
			controller : 'NerdController'
		})

		.when('/geeks', {
			templateUrl : 'views/geek.html',
			controller : 'GeekController'
		})

		.when('/addschool', {
			templateUrl: 'views/school/add.school.html',
			controller: 'SchoolController'
		})
		.when('/editschool/:id', {
			templateUrl: 'views/school/add.school.html',
			controller: 'SchoolDetailsCtrl'
		})
	;

	$locationProvider.html5Mode(true);

} ]);