var ExperimentPanel = {
  scope: {},
  bindings: {
    experiment: '<'
  },
  templateUrl: 'js/app/components/experiment-panel/experiment-panel.html',
  controllerAs: 'user'
}

angular
  .module('app')
  .component('hbExperimentPanel', ExperimentPanel);
