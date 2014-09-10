// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var application = angular.module('ionicApp', ['ionic'])

application.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
  .state('filamu', {
    url: '/',
    templateUrl: 'filamu.html',
   // controller: 'InfoCtrl'
  })
 
 .state('video', {
    url: '/video',
    templateUrl: 'video.html',
   
  })
  
  
  $urlRouterProvider.otherwise("/");

})

application.controller('InfoCtrl', function($scope, $ionicModal) {
  $ionicModal.fromTemplateUrl('video.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });
  $scope.openModal = function() {
    $scope.modal.show();
  };
  $scope.closeModal = function() {
    $scope.modal.hide();
  };
  //Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
  // Execute action on hide modal
  $scope.$on('modal.hidden', function() {
    // Execute action
  });
  // Execute action on remove modal
  $scope.$on('modal.removed', function() {
    // Execute action
  });
});




 function ContentController($scope, $ionicSideMenuDelegate) {
  $scope.toggleLeft = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };
}
 
 