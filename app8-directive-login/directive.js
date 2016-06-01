angular.module('app').directive('mainDirective', function(){
  return {
    restrict: 'E',
    templateUrl: './tmpl.html',

    controller: function($scope) {
      $scope.alert = function(){
        alert('YOU SHALL NOT PASS!')
      }
    }
  }
})
