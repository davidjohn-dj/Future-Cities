'use strict';

angular.module('myApp.home', ['ngRoute'])

	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/home', {
			templateUrl: 'home/landing.html',
			controller: 'LandingCtrl'
		});
}])

	.controller('LandingCtrl', ['$scope', function ($scope) {
		$scope.page = 'home';
		$scope.stuff = 'dsdsd';
}]);
