angular
  .module('app')
  .controller('LogoutController', function(Auth, $scope, $state, $cookies) {
    var config = {
            headers: {
                'X-HTTP-Method-Override': 'DELETE'
            }
        };

        this.logout = function(){
          Auth.logout(config).then(function() {
              $state.go('root');
          }, function(error) {
            alert("An error occurred logging out.");
          });
        }


        $scope.$on('devise:logout', function(event, oldCurrentUser) {
          $cookies.remove('currentUser');
        });
  });
