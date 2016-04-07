// Random http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC
  var app = angular.module('gipherator', []);
  app.controller('gifControl', function($scope, $http){
    $scope.gif = {};

    $scope.gipherateRandom = function(){
      $http.get('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=animal&rating=pg-13').then(function(response){
        $scope.gifWindow = true;
        $scope.gifMessage = true;
        $scope.gif = response.data.data;
        console.log("gif = ");
        console.log($scope.gif);

      });
    };

  $scope.clearGif = function(){
    $scope.gifWindow = false;
    $scope.gifMessage = false;
  };


});
