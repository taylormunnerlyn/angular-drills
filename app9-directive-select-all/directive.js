angular.module('app').directive('mainDirective', function(){
  return {
    restrict: 'A',
    templateUrl: './tmpl.html',
    controller: function($scope){
      $scope.highlight = function(){
        ('$.text').css('background-color', 'lightblue');
      }
    }
  }
})
