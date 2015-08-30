angular.module("uplink").controller("profileCreateCtrl", function($scope, $meteor, $stateParams){

	$scope.user = Meteor.users.find({_id: userId});

	var userId = $stateParams.userId;

	console.log("User Id:", userId);


	

	console.log("Scope user:", $scope.user);

	$scope.saveUser = function(){
		Meteor.users.update(userId, {$set:{profile: $scope.user.profile}});
	}
});