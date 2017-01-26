function ShowHabitController($scope, habitData, experiments, currentExperiment, formProcessor, noteFactory) {
  var vm = this;

  vm.habit = habitData.habit;
  vm.email = $scope.$parent.$parent.currentUser.email;
  vm.experiments = experiments;
  vm.notePanel = false;

  checkForNotes();

  if (currentExperiment) {
    vm.experiment = currentExperiment.experiment;
    var reward = vm.experiment.substitute.craving;
  } else {
    var reward = 'something more inspiring';
  }

  if (vm.habit.activity) {
    vm.phrase = 'I will ' +
    vm.habit.activity.description +
    ' because it provides me with ' + reward;

    vm.plan = 'Replace ' + vm.habit.reward.craving +
    ' with ' + reward;
  }

  if(vm.habit.activity && vm.habit.activity.description != '') {
    vm.validActivity = true;
  }

  vm.delete = function(submission) {
    formProcessor.processHabitDelete(submission);
  }

  vm.deleteNote = function(note) {
    noteFactory.deleteNote(note).then(function(){
      note.displayed = false;

      vm.habit.notes.forEach(function(n, i, arr){
        if (note.id == n.id) {
          arr.splice(i, 1);
        }
      });

      checkForNotes();
    });
  }

  vm.habit.notes.forEach(function(note, i) {
    note.displayed = true;
  });

  function checkForNotes() {

    if (vm.habit.notes.length === 0) {
      vm.notePanel = false;
    } else {
      vm.notePanel = true;
    }
  }

}

angular
  .module('app')
  .controller('ShowHabitController', ShowHabitController);
