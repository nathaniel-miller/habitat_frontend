angular
  .module('app')
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

    .state('root', {
      url: '/',
      templateUrl: 'js/app/views/welcome.html',
      controller: function($rootScope){
        $rootScope.outside = true;
        $rootScope.inside = false;
      },
      resolve: {
        user: function($cookies){
          return $cookies.getObject('currentUser');
        },
        check: function($state, user){
          if(user){
            $state.go('user.home');
          }
        }
      }

    })

    .state('login', {
      url: '/users/sign_in',
      templateUrl: 'js/angular-devise/views/login.html',
      controller: 'LoginController',
      controllerAs: 'login',
      resolve: {
        user: function($cookies){
          return $cookies.getObject('currentUser');
        },
        check: function($state, user){
          if(user){
            $state.go('user.home');
          }
        }
      }
    })

    .state('register', {
      url: '/users/sign_up',
      templateUrl: 'js/angular-devise/views/registration.html',
      controller: 'RegistrationController',
      controllerAs: 'register',
      resolve: {
        user: function($cookies){
          return $cookies.getObject('currentUser');
        },
        check: function($state, user){
          if(user){
            $state.go('user.home');
          }
        }
      }
    });

    $urlRouterProvider.otherwise('/');
  });
