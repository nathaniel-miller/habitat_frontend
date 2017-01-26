angular
  .module('app')
  .config(function ($stateProvider) {
    $stateProvider

    .state('user.new', {
      abstract: true,
      url: '/new',
      template: '<ui-view></ui-view>'
    })

    .state('user.new.habit', {
      url: '/habit',
      templateUrl: 'js/app/views/habits/new.html',
      controller: 'NewHabitController',
      controllerAs: 'user',
      resolve: {
        cuesData: function(cueFactory){
          return cueFactory.getCues();
        },
        rewardsData: function(rewardFactory){
          return rewardFactory.getRewards();
        }
      }
    })

    .state('user.new.experiment', {
      url: '/experiment',
      templateUrl: 'js/app/views/experiments/new.html',
      controller: 'NewExperimentController',
      controllerAs: 'user',
      resolve: {
        rewardsData: function(rewardFactory){
          return rewardFactory.getRewards();
        },
        habitData: function(habitFactory){
          return habitFactory.getHabits();
        }
      }
    });

  });
