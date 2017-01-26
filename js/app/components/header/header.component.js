var Header = {
  templateUrl: 'js/app/components/header/header.html',
  controller: 'LogoutController',
  controllerAs: 'user'
};


angular
  .module('app')
  .component('hbHeader', Header);
