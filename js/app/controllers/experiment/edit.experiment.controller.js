function EditExperimentController(experimentData, activityData, formProcessor) {
  var vm = this;
  var exp = experimentData.experiment;
  var habit = exp.habit;

  vm.experiment = exp;
  vm.experiment.substitute_attributes = exp.substitute;
  if (activityData) {
    vm.experiment.habit.activity_attributes = activityData.activity;
  }

  vm.submit = function(submission){
    formProcessor.processExpUpdate(submission, exp, habit);
  }
}

angular
  .module('app')
  .controller('EditExperimentController', EditExperimentController);
