angular
  .module('app')
  .config(function ($stateProvider) {
  $stateProvider

    .state('user', {
      url: '/user',
      templateUrl: 'js/app/views/user.html',
      controller: 'UserController',
      resolve: {
        user: function($cookies){
          return $cookies.getObject('currentUser');
        },
        check: function($state, user){
          if(user === undefined){
            $state.go('root');
          }
        }
      }
    });

  });
