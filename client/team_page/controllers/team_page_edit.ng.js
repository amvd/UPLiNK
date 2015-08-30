angular.module("uplink").controller("teamEditCtrl", function($scope, $meteor, $stateParams){

	$scope.teams = $meteor.collection(Teams);

	$scope.team = $meteor.object(Teams, $stateParams.teamId, false);

	$scope.locations = $meteor.collection(Locations);

	$scope.saveTeam = function(team){
		$scope.team.save().then(function(numberOfDocs){
			console.log("Save success doc affected ", numberOfDocs);
		}, function(error){
			console.log("save error ", error);
		});
	}

});