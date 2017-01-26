function UserController($state, $scope, $rootScope, user) {
  $scope.currentUser = user;
  $rootScope.outside = false;
  $rootScope.inside = true;
}

angular
  .module('app')
  .controller('UserController', UserController);
