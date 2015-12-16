var app = angular.module("SearchOMDB");

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'templates/search.html',
      controller: 'SearchController'
  });
});
