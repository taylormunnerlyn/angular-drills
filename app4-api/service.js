angular.module('apiApp').service('mainService', function($http, $q){

  this.getData = function(){
    var deferred = $q.defer();
    $http({
      method: 'GET',
      url: 'http://smurfs.devmounta.in/smurfs/'
    }).then(function(result){
      deferred.resolve(result.data);
    })
    return deferred.promise;
  }


})
