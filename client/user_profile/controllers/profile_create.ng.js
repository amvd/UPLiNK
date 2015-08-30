angular.module("uplink").controller("profileCreateCtrl", function($scope, $meteor, $stateParams, $state){

	userId = $stateParams.userId;

	$scope.user = Meteor.users.findOne({_id: $stateParams.userId});

	$scope.teams = $meteor.collection(Teams);

	console.log("User Id:", userId);

	console.log("Scope user:", $scope.user);

	$scope.saveUser = function(){
		Meteor.users.update(userId, {$set:{profile: $scope.user.profile}});
		alert("User profile saved!");
		$state.go("profile", {userId: $scope.user._id});
	}
});