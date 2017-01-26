function noteFactory($http, baseFactory) {
  return {
    deleteNote: deleteNote
  }

  function deleteNote(note) {
    return $http.delete(baseFactory.url + '/notes/' + note.id);
  }

}

angular
  .module('app')
  .factory('noteFactory', noteFactory)
