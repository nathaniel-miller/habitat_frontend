function ShowExperimentController(experimentData, activityData, formProcessor) {
  var vm = this;

  vm.experiment = experimentData.experiment
  if (activityData) vm.activity = activityData.activity

  vm.delete = function(submission) {
    formProcessor.processExpDelete(submission);
  }
}

angular
  .module('app')
  .controller('ShowExperimentController', ShowExperimentController);
