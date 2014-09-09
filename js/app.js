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
 
  $urlRouterProvider.otherwise("/");

})
application.controller('InfoCtrl', function($scope) {
  console.log('InfoCtrl');
});
   
   
   function ContentController($scope, $ionicSideMenuDelegate) {
  $scope.toggleLeft = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };
}
 
application.directive('fadeBar', function($timeout) {
  return {
    restrict: 'E',
    template: '<div class="fade-bar"></div>',
    replace: true,
    link: function($scope, $element, $attr) {
      // Run in the next scope digest
      $timeout(function() {
        // Watch for changes to the openRatio which is a value between 0 and 1 that says how "open" the side menu is
        $scope.$watch('sideMenuController.getOpenRatio()', function(ratio) {
          // Set the transparency of the fade bar
          $element[0].style.opacity = Math.abs(ratio);
        });
      });
    }
  }
});
 
 
