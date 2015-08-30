angular.module("uplink").controller("dataCtrl", function($scope, $meteor){

    $scope.map = {
    	center: {
    		latitude: 45,
    		longitude: -73
    	},
    	zoom: 8,
    	events: {
        	click: function (mapModel, eventName, originalEventArgs) {
		        if (!$scope.party)
		            return;
		 
		        if (!$scope.party.location)
		            $scope.party.location = {};
		 
				$scope.party.location.latitude = originalEventArgs[0].latLng.lat();
				$scope.party.location.longitude = originalEventArgs[0].latLng.lng();
				//scope apply required because this event handler is outside of the angular domain
				$scope.$apply();
		    }
		},
		    marker: {
		        options: { draggable: true },
		        events: {
		          dragend: function (marker, eventName, args) {
		            if (!$scope.party.location)
		              $scope.party.location = {};
		 
		            $scope.party.location.latitude = marker.getPosition().lat();
		            $scope.party.location.longitude = marker.getPosition().lng();
		          }
		        }
		      }
    };


});