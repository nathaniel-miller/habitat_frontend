var PlanPanel = {
  templateUrl: 'js/app/components/plan-panel/plan-panel.html',
  bindings: {
    habit: '<',
    email: '<',
    phrase: '<',
    plan: '<'
  },
  controller: function(){
    // how do I access 'habit' in here?
  },
  controllerAs: 'user'
}

angular
  .module('app')
  .component('hbPlanPanel', PlanPanel);
