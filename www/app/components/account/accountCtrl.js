angular.module('app.controllers')
.controller('AccountCtrl', function($scope) {
  $scope.submitAccount = function() {
    console.log($scope.user);
  };
});
