angular.module("uplink").controller("teamPageCtrl", function($scope, $meteor){

	$scope.team = $meteor.object(Teams, $stateParams.teamId);

	

});