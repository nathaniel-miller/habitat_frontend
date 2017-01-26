angular
  .module('app')
  .controller('ExperimentController', function($scope, experimentData) {
    var vm = this;

    vm.email = $scope.$parent.currentUser.email;
    vm.experiments = experimentData.experiments;

  });
