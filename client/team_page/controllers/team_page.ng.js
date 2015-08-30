angular.module("uplink").controller("teamPageCtrl", function($scope, $meteor, $stateParams){

	console.log("team page");

	$scope.team = $meteor.object(Teams, $stateParams.teamId);

	

});