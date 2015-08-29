angular.module("uplink").config(function($urlRouterProvider, $stateProvider, $locationProvider){

	$locationProvider.html5Mode(true);

	$stateProvider
		.state("start", {
			url:"/",
			templateUrl: "client/start_screen/views/start_screen.ng.html",
			controller: "startCtrl"
		})


})