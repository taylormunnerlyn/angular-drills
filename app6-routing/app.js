angular.module('routingApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider
    .otherwise('/');
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: './home-tmpl.html'
    })
    .state('details', {
      url: '/details',
      templateUrl: './details-tmpl.html'
    })
    .state('signup', {
      url: '/signup',
      templateUrl: './signup-tmpl.html'
    })
})
