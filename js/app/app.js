angular
  .module('app', ['Devise', 'ui.router', 'ngMessages', 'ngCookies'])
  .config(function(AuthProvider){
    AuthProvider.baseUrl('http://localhost:3000');
  })
  .run(function($rootScope){
    $rootScope.$on('$stateChangeSuccess', function() {
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    });
  });
