angular.module('positions')

.controller('positionsCtrl', function($scope, $routeParams, $http) {
	console.log("All positions controller running");
	$http.get('/api/v1/secure/positions',{
		cache: true
	}).success(function(response) {
		console.log(response);
		$scope.positionList = response;
		//console.log($scope.visitBunches);
	});
})

.controller('positionCtrl', function($scope, $routeParams, $http) {
    console.log("SECONDDDDDD");
    console.log($routeParams.id);
	$http.get('/api/v1/secure/positions/'+$routeParams.id,{
		cache: true
	}).success(function(response) {
		console.log("hreeeeeeeee" + response);
		$scope.candidateList = response;
	})
    
})
