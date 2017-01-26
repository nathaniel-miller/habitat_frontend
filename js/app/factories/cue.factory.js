function cueFactory($http, baseFactory) {

  var factory = {
    getCues: getCues
  }

  return factory;

  function getCues(){
    return $http.get(baseFactory.url + '/cues').then(returnData);
  }

  function returnData(response){
    return response.data;
  }

}

angular
  .module('app')
  .factory('cueFactory', cueFactory)
