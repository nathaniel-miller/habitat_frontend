angular
  .module('app')
  .config(function ($stateProvider) {
    $stateProvider

    .state('user.show', {
      abstract: true,
      url: '/show',
      template: '<ui-view></ui-view>'
    })

    .state('user.show.habit', {
      url: '/habit/:id',
      templateUrl: 'js/app/views/habits/show.html',
      controller: 'ShowHabitController',
      controllerAs: 'user',
      resolve: {
        habitData: function($stateParams, habitFactory){
          return habitFactory.getHabit($stateParams.id);
        },
        experiments: function(habitData, experimentFactory){
          var exps = [];

          habitData.habit.experiments.forEach(function(exp, i){
            experimentFactory.getExperiment(exp.id).then(function(response){
              exps.push(response.experiment);
            });
          });

          return exps;
        },
        currentExperiment: function(habitData, experimentFactory){
          if (habitData.habit.current_exp_id) {
            return experimentFactory.getExperiment(habitData.habit.current_exp_id);
          }
        }
      }
    })

    .state('user.show.experiment', {
      url: '/experiment/:id',
      templateUrl: 'js/app/views/experiments/show.html',
      controller: 'ShowExperimentController',
      controllerAs: 'user',
      resolve: {
        experimentData: function($stateParams, experimentFactory){
          return experimentFactory.getExperiment($stateParams.id);
        },
        activityData: function(experimentData, activityFactory){
          var id = experimentData.experiment.habit.activity_id;
          if (id) return activityFactory.getActivity(id);
        }

      }
    });

  });
