angular.module('application')
.controller('ResourceController', ResourceController)
;
ResourceController.$inject = ['$scope', '$stateParams', '$state', '$controller'];
function ResourceController($scope, $stateParams, $state, $controller) {
angular.extend(this, $controller('DefaultController', {$scope: $scope, $stateParams: $stateParams, $state: $state}));

$scope.username = 'Matt';

	$scope.id = $stateParams.id;

	$scope.resources = [
		{ id: 1, name: 'Next Lesson', previewText: 'blah blah blah' },
		{ id: 2, name: '21C', previewText: 'blah blah blah' },
		{ id: 3, name: 'Brebeuf', previewText: 'blah blah blah' }
	];
}