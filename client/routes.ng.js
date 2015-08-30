angular.module("uplink").config(function($urlRouterProvider, $stateProvider, $locationProvider){

	$locationProvider.html5Mode(true);

	$stateProvider
		.state("start", {
			url:"/",
			templateUrl: "client/start_screen/views/start_screen.ng.html",
			controller: "startCtrl"
		})
		.state("home", {
			url:"/home",
			templateUrl: "client/home_feed/views/home_feed.ng.html",
			controller: "homeCtrl"
		})
		.state("profile_edit", {
			url:"/profile/:userId/edit",
			templateUrl: "client/user_profile/views/profile_create.ng.html",
			controller: "profileCreateCtrl"
		})
		.state("profile",{
			url:"/profile/:userId",
			templateUrl: "client/user_profile/views/user_profile.ng.html",
			controller: "profileCtrl"
		})
		.state("team_create", {
			url:"/team/create",
			templateUrl: "client/team_page/views/team_page_create.ng.html",
			controller: "teamCreateCtrl"
		})
		.state("team_edit", {
			url: "/team/:teamId/edit",
			templateUrl: "client/team_page/views/team_page_create.ng.html",
			controller: "teamEditCtrl"
		})
		.state("team_page", {
			url: "/team/:teamId",
			templateUrl: "client/team_page/views/team_page.ng.html",
			controller: "teamPageCtrl"
		
		})
		.state("event_edit", {
			url: "/event/:eventId/edit",
			templateUrl: "client/event_page/views/event_create.ng.html",
			controller: "eventEditCtrl"
		})
		.state("event_create", {
			url: "/event/create",
			templateUrl: "client/event_page/views/event_create.ng.html",
			controller: "eventCreateCtrl"
		})
		.state("event_page", {
			url: "/event/:eventId",
			templateUrl: "client/event_page/views/event_page.ng.html",
			controller: "eventPageCtrl"
		})
		.state("data_dash", {
			url: "/data/dashboard",
			templateUrl: "client/datacenter/views/data-dash.ng.html",
			controller: "dataCtrl"
		})
		


})