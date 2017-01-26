function baseFactory($cookies, $state) {
  return {
    url: 'http://localhost:3000',
    redirectIfLoggedIn: redirectIfLoggedIn
  }

  function redirectIfLoggedIn() {
    if ($cookies.getObject('currentUser')) $state.go('user.home');
  }

}

angular
  .module('app')
  .factory('baseFactory', baseFactory)
