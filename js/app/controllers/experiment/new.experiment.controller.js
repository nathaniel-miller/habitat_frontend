angular
  .module('app')
  .controller('NewExperimentController', function(rewardsData, habitData, experimentFactory, formProcessor) {
    var vm = this;

    var habits = habitData.habits;
    if (habits) {

      var lastHabit = habits[habits.length - 1];

      vm.habits = habits;
      vm.lastHabit = lastHabit;
      vm.experiment = {};

      vm.habitName = lastHabit.name;
      vm.experiment.habit_id = lastHabit.id;
      vm.currentReward = lastHabit.reward.craving;

      vm.rewards = rewardsData.rewards;

      vm.selectHabit = function(habit){
        console.log(habit);
        vm.currentReward = habit.reward.craving;
        vm.searchHabit.name = habit.name;
        vm.habitName = habit.name;
        vm.experiment.habit_id = habit.id;
      }

      vm.selectReward = function(reward){
        vm.experiment.substitute_attributes = reward;
      }

      vm.submit = function(submission){
        formProcessor.processExpCreate(submission);
      }

    }

  });
