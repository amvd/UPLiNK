angular.module("uplink").controller("teamCreateCtrl", function($scope, $meteor){

	$scope.teams = $meteor.collection(Teams);

	$scope.locations = $meteor.collection(Locations);

	$scope.saveTeam = function(team){
		$scope.teams.save(team);
	}

});
