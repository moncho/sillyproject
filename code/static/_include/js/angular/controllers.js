
var v24App = angular.module('v24App', []);


v24App.controller('workersCtrl', function ($scope, $http) {
  $http.get('data/data.json').success(function(data) {
    $scope.workers = data;
  }).
  error(function(data, status, headers, config) {
    alert("error")
  });
  $scope.getNumber = function(num) {
	  return new Array(num);   
  };
  $scope.vote = function(id,score){
  	 

     $http.get('/vote/rate/'+id+'/'+score+'/').
  success(function(data, status, headers, config) {
   console.log("exito: "+data);
  }).
  error(function(data, status, headers, config) {
    console.log("error: "+data);
  });
  }
});