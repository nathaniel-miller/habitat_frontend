angular
  .module('app')
  .controller('CompleteController', function($scope, completeHabitData) {
    var vm = this;

    vm.email = $scope.$parent.currentUser.email;
    vm.habits = completeHabitData.habits;

  });
