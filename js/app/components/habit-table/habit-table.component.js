var HabitTable = {
  scope: {},
  bindings: {
    habits: '<'
  },
  templateUrl: 'js/app/components/habit-table/habit-table.html',
  controller: function(formProcessor, habitFactory, $timeout){
    var vm = this;

    vm.habits.forEach(function(habit, i){
      habit.noteDisplayed = false;
      habit.message = '';
    });

    vm.noteClick = function(habit) {
      if (habit.noteDisplayed != true) {
        habit.noteDisplayed = true;
      } else {
        habit.noteDisplayed = false;
      }
    }

    vm.saveHabit = function(habit){
      habitFactory.updateHabit(habit.id, { habit: habit }).then(function(){
        habit.message = 'Your note has been saved.'
        habit.note = '';

        $timeout(function(){
          habit.message = '';
        }, 5000);
      });

    }

    vm.increment = function(habit){
      habit.likes += 1;
      vm.saveHabit(habit);
    }

    vm.decrement = function(habit){
      habit.likes -= 1;
      vm.saveHabit(habit);
    }


    vm.delete = function(submission) {
      formProcessor.processHabitDelete(submission);
    }
  },
  controllerAs: 'user'
}

angular
  .module('app')
  .component('hbHabitTable', HabitTable);
