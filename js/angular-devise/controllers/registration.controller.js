angular
  .module('app')
  .controller('RegistrationController', function(Auth, $scope, $state, $cookies) {
      var vm = this;

      vm.submit = function(credentials){
        Auth.register(credentials).then(function(registeredUser) {
            // Registration succeeded...
        }, function(error) {
            // Registration failed...
            vm.hasEmailError = true;
            vm.emailError = error.config.data.user.email;
            vm.messageError = error.data.errors.email[0];
        });
      }

      $scope.$on('devise:new-registration', function(event, user) {
          $cookies.putObject('currentUser', user);
          $state.go('user.home');
      });
  });
