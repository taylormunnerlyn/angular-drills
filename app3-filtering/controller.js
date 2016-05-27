angular.module('app').controller('mainCtrl', function($scope, mainService){

  $scope.getData = mainService.data();

})
