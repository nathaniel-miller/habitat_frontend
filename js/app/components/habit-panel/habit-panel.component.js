var HabitPanel = {
  templateUrl: 'js/app/components/habit-panel/habit-panel.html',
  scope: {},
  bindings: {
    habit: '='
  },
  controllerAs: 'user'
}

angular
  .module('app')
  .component('hbHabitPanel', HabitPanel);
