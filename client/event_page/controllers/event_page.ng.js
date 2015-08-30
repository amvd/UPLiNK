angular.module("uplink").controller("eventPageCtrl", function($scope, $meteor){

	console.log("event page");

	$scope.event = $meteor.object(Events, $stateParams.eventId);

});