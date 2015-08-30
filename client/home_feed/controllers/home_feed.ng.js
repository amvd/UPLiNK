angular.module("uplink").controller("homeCtrl", function($scope, $meteor, $rootScope){

	console.log("Root User:", $rootScope.currentUser);

	$scope.teams = $meteor.collection(Teams);

});