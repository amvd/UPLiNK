angular.module("uplink").controller("profileCreateCtrl", function($scope, $meteor, $stateParams){

	var userId = $stateParams.userId;

	$scope.user = Meteor.users.findOne({_id: $stateParams.userId});

	

	console.log("User Id:", userId);


	

	console.log("Scope user:", $scope.user);

	$scope.saveUser = function(){
		Meteor.users.update(userId, {$set:{profile: $scope.user.profile}});
	}
});