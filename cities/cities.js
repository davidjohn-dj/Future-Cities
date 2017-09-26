'use strict';

angular.module('myApp.cities', ['ngRoute'])

	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/cities', {
			templateUrl: 'cities/cities_landing.html',
			controller: 'CitiesCtrl'
		});
}])

	.controller('CitiesCtrl', [function () {

}]);
