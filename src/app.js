angular.module('app', ['ngResource']).factory('Users', function($resource) {
  return $resource('/users/:userId', { userId: '@id' });
});
