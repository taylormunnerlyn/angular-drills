angular.module('arrayApp').controller('arrayController', function($scope, mainService) {


  $scope.getData = mainService.data();



})
