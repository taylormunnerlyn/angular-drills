angular.module('apiApp').controller('mainCtrl', function($scope, mainService){

  mainService.getData().then(function(result){
    $scope.pokiData = result;
  })



})
