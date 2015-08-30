angular.module("uplink").controller("profileCtrl", function($scope, $meteor, $stateParams, $rootScope){

	var userId = $stateParams.userId;

	console.log("User Id:", userId);

	console.log("Root User:", $rootScope.currentUser);

	$scope.user = Meteor.users.findOne({_id: $stateParams.userId});

})  