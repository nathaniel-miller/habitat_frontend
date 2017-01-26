function HomeController($scope, habitData) {
  var vm = this;

  vm.email = $scope.$parent.currentUser.email;
  vm.habits = habitData.habits
}

angular
  .module('app')
  .controller('HomeController', HomeController);
