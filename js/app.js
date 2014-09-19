// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var application = angular.module('ionicApp', ['ionic'])

application.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'home.html',
    controller: 'HomeCtrl'
  })
  .state('info', {
    url: '/info',
    templateUrl: 'info.html',
  controller: 'InfoCtrl'
  })
  .state('friend', {
    url: '/friend',
    templateUrl: 'friend.html',
   controller: 'FriendCtrl'
  })
  
  
  .state('groups', {
    url: '/groups',
    templateUrl: 'groups.html',
  // controller: 'HomeCtrl'
  }) 
  
  .state('set', {
    url: '/set',
    templateUrl: 'set.html',
    controller: 'seteCtrl'
  }) 
  
  $urlRouterProvider.otherwise("/");

})
application.controller('HomeCtrl', function($scope) {
  console.log('HomeCtrl');
});



 function ContentController($scope, $ionicSideMenuDelegate) {
  $scope.toggleLeft = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };
}
 
function InfoCtrl($scope, $ionicSideMenuDelegate) {
  $scope.toggleLeft = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };
} 