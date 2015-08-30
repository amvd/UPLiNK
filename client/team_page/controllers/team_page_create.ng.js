angular.module("uplink").controller("teamCreateCtrl", function($scope, $meteor, $state){

	$scope.teams = $meteor.collection(Teams);

	$scope.locations = $meteor.collection(Locations);

	$scope.Math = window.Math;

	$scope.saveTeam = function(team){
		$scope.teams.save(team);
		alert("Team Saved!");
		$state.go("home");
		return;
	}

	$scope.reset = function(){
		$scope.team = {};
	}

});


angular.module("uplink").controller("teamEditCtrl", function($scope, $meteor, $stateParams, $state, $location){

	$scope.teams = $meteor.collection(Teams);

	$scope.team = $meteor.object(Teams, $stateParams.teamId, false);

	$scope.locations = $meteor.collection(Locations);

	$scope.Math = window.Math;

	$scope.reset = function(){
		$scope.team.reset();
	}

	$scope.saveTeam = function(team){
		$scope.team.save();
		alert("Team Saved!");
		$state.go("home");
		return;
	}

});