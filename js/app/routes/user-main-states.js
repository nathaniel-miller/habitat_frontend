angular
  .module('app')
  .config(function ($stateProvider) {
    $stateProvider

    .state('user.home', {
      url: '/home',
      templateUrl: 'js/app/views/habits/home.html',
      controller: 'HomeController',
      controllerAs: 'user',
      resolve: {
        habitData: function(habitFactory){
          return habitFactory.getHabits();
        }
      }
    })

    .state('user.complete', {
      url: '/complete',
      templateUrl: 'js/app/views/habits/complete.html',
      controller: 'CompleteController',
      controllerAs: 'user',
      resolve: {
        completeHabitData: function(habitFactory){
          var params = 'complete=true';
          return habitFactory.getHabits(params);
        }
      }
    })

    .state('user.experiments', {
      url: '/experiments',
      templateUrl: 'js/app/views/experiments/experiments.html',
      controller: 'ExperimentController',
      controllerAs: 'user',
      resolve: {
        experimentData: function(experimentFactory){
          return experimentFactory.getExperiments();
        }
      }
    });

  });
