angular.module("uplink").controller("eventCreateCtrl", function($scope, $meteor, $state){

	$scope.events = $meteor.collection(Events);

	$scope.teams = $meteor.collection(Teams);

	$scope.saveEvent = function(event){
		$scope.events.save(event);
		alert("Event saved!");
		$state.go("home");
		return;
	}

	$scope.reset = function(){
		$scope.event = {};
	}

});

angular.module("uplink").controller("eventEditCtrl", function($scope, $meteor, $state){

	$scope.event = $meteor.object(Events, $stateParams.eventId);

	$scope.events = $meteor.collection(Events);

	$scope.teams = $meteor.collection(Teams);

	$scope.saveEvent = function(event){
		$scope.events.save(event);
		alert("Event saved!");
		$state.go("home");
		return;
	}

	$scope.reset = function(){
		$scope.event.reset();
	}

});