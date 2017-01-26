function habitFactory($http, $cookies, baseFactory) {

  return {
    getHabits: getHabits,
    getHabit: getHabit,
    createHabit: createHabit,
    updateHabit: updateHabit,
    deleteHabit: deleteHabit
  };

  function getHabits(params) {
    var user = $cookies.getObject('currentUser');
    params ? ps = '?' + params : ps = '';
    var url = baseFactory.url + '/user/' + user.id + '/habits' + ps
    return $http.get(url).then(returnData);
  }

  function getHabit(id) {
    return $http.get(baseFactory.url + '/habits/' + id).then(returnData);
  }

  function createHabit(data) {
    return $http.post(baseFactory.url + '/habits', data).then(returnData);
  }

  function updateHabit(id, data) {
    return $http.patch(baseFactory.url + '/habits/' + id, data).then(returnData);
  }

  function deleteHabit(id) {
    return $http.delete(baseFactory.url + '/habits/' + id);
  }

  function returnData(response){
    return response.data;
  }

}

angular
  .module('app')
  .factory('habitFactory', habitFactory)
