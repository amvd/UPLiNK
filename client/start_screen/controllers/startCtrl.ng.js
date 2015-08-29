angular.module("uplink").controller("startCtrl", function($scope, $meteor, $timeout, $state){

	Accounts.onLogin( function(){
		$timeout(function() {
			$state.go("home");
		}, 0);
	});


});