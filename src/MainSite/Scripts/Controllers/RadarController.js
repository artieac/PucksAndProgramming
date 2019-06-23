theApp.controller('RadarController', function ($scope, $resource, $http, $sce, $q) {
	$scope.waitingForData = false;
	$scope.mostRecentTechRadar = {};
	$scope.mostRecentDisneyRadar = {};

	$scope.getMostRecentTechRadar = function (urlRoot) {
		$scope.waitingForData = true;
		$http.get(urlRoot + '/public/embeddable/user/1/radartype/1/radars?mostrecent=true')
			.then(function (result) {
				$scope.mostRecentTechRadar = result.data;
				$scope.waitingForData = false;
			})
			.catch(function (response) {
				$scope.waitingForData = false;
				console.error('GetMostRecent error', response.status, response.data);
			});
	};

	$scope.getMostRecentDisneyRadar = function (urlRoot) {
		$scope.waitingForData = true;
		$http.get(urlRoot + '/public/embeddable/user/1/radartype/2/radars?mostrecent=true')
			.then(function (result) {
				$scope.mostRecentDisneyRadar = result.data;
				$scope.waitingForData = false;
			})
			.catch(function (response) {
				$scope.waitingForData = false;
				console.error('GetMostRecent error', response.status, response.data);
			});
	};
});