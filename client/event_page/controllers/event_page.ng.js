angular.module("uplink").controller("eventPageCtrl", function($scope, $meteor, $stateParams){

	console.log("event page");


	$scope.event = $meteor.object(Events, $stateParams.eventId);

	console.log("Event scope:",$scope.event);

});