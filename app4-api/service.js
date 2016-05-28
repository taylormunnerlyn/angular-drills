angular.module('apiApp').service('mainService', function($http, $q){

  this.getData = function(){
    var deferred = $q.defer();
    $http({
      method: 'GET',
      url: 'http://pokeapi.co/api/v2/pokemon/'
    }).then(function(result){
      deferred.resolve(result.data.results)
    })
    return deferred.promise
  }





})
