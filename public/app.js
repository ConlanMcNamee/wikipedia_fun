var app = angular.module('api', []);

app.controller('apiController', ['$http', '$scope', function($http, $scope) {
  var url = document.URL;
  $scope.query = function() {
    $http({
      url: 'https://en.wikipedia.org/w/api.php?action=query&titles=August%202&indexpageids=&prop=revisions&rvprop=content&format=json',
      method: "GET"
    })
    .then(function(response) {
      console.log(response.data.query);
      var page = response.data.query.pageids[0];
      console.log(page);
      var info = response.data.query.pages[page].revisions[0]["*"].split('*');
      info.shift();
      $scope.results = info;
    })
  }
}])
