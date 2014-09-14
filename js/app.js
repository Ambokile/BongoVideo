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
   // controller: 'HomeCtrl'
  })
  .state('info', {
    url: '/info',
    templateUrl: 'info.html',
  controller: 'HomeCtrl'
  })
  .state('friend', {
    url: '/friend',
    templateUrl: 'friend.html',
  // controller: 'HomeCtrl'
  })
  
  
  .state('groups', {
    url: '/groups',
    templateUrl: 'groups.html',
  // controller: 'HomeCtrl'
  }) 
  
  .state('set', {
    url: '/set',
    templateUrl: 'set.html',
  // controller: 'HomeCtrl'
  }) 
  
  $urlRouterProvider.otherwise("/");

})
application.controller('HomeCtrl', function($scope) {
  console.log('HomeCtrl');
});

application.controller('PopupCtrl',function($scope, $ionicPopup, $timeout) {

 
   $scope.showAlert = function() {
     var alertPopup = $ionicPopup.alert({
       title: 'download video',
       template: 'download successfully'
     });
     alertPopup.then(function(res) {
       console.log('download');
     });
   };
});

 function ContentController($scope, $ionicSideMenuDelegate) {
  $scope.toggleLeft = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };
}
 
 