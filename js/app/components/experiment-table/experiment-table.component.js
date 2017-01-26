var ExperimentTable = {
  templateUrl: 'js/app/components/experiment-table/experiment-table.html',
  bindings: {
    rewards: '<',
    experiments: '<'
  },
  controller: function(formProcessor) {
    var vm = this;

    vm.delete = function(submission) {
      formProcessor.processExpDelete(submission);
    }

  },
  controllerAs: 'user'
}

angular
  .module('app')
  .component('hbExperimentTable', ExperimentTable)
