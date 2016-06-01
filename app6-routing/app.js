angular.module('routerApp', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider
      .otherwise('/');
    $stateProvider
      .state('home', {
        url: '/home',
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
