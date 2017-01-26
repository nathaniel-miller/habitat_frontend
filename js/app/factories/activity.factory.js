function activityFactory($http, baseFactory) {

  return {
    getActivities: getActivities,
    getActivity: getActivity,
  };

  function getActivities(user) {
    var url = baseFactory.url + '/user/' + user.id + '/activities'
    return $http.get(url).then(returnData);
  }

  function getActivity(id) {
    return $http.get(baseFactory.url + '/activities/' + id).then(returnData);

  }

  function returnData(response) {
    return response.data;
  }

}

angular
  .module('app')
  .factory('activityFactory', activityFactory)
