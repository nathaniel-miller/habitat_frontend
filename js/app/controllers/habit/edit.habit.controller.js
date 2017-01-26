angular
  .module('app')
  .controller('EditHabitController', function(habitData, cuesData, rewardsData, formProcessor) {
    var vm = this;
    var habit = habitData.habit;

    vm.habit = habit;
    vm.habit.cue_attributes = habit.cue;
    vm.habit.reward_attributes = habit.reward;

    vm.cues = cuesData.cues;
    vm.rewards = rewardsData.rewards;

    vm.selectCue = function(cue){
      vm.habit.cue_attributes.name = cue.name;
      vm.habit.cue_attributes.nature = cue.nature;
    }

    vm.selectReward = function(reward){
      vm.habit.reward_attributes = {};
      vm.habit.reward_attributes.craving = reward.craving;
    }

    vm.submit = function(submission){
      formProcessor.processHabitUpdate(submission);
    }

  });
