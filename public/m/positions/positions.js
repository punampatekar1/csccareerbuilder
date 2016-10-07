
angular.module('positions', ['ngRoute'])

.run(function ($rootScope, $location, $http) {
	$http.get('/token')
		.success(function (user, status) {
		if (user) {
			$rootScope.user = user;
		}
    else {
			// user not found, ask to login
    }
	});
})

.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
  
  .when('/positions', {
    templateUrl: '/public/m/positions/tile.html',
    controller: 'positionsCtrl'
  })
  
   .when('/positions/:id/candidates', {
    templateUrl: '/public/m/positions/candidates.html',
    controller: 'positionCtrl'
  })
  
  .when('/createpos', {
    templateUrl: '/public/m/positions/createPositions.html',
    controller: 'positionsCtrl'
  })

  .when('/positions/:id/edit', {
    templateUrl: '/public/m/positions/createPositions.html',
    controller: 'positionsCtrl'
  })
  
  .when('/positions/:id/:candidateId/feedback', {
    templateUrl: '/public/m/positions/feedbackTemplate.html',
    controller: 'positionFeedbackCtrl'
  })

   .when('/positions/panel', {
    templateUrl: '/public/m/positions/openPositions.html',
    controller: 'positionsCtrl'
  }) 
  
  // if none of the above states are matched, use this as the fallback
  $routeProvider.otherwise('/positions');

}]);