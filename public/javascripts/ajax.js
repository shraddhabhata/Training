var app = angular.module('ngmy', []);

app.controller('MainCtrl', function($http) {
    $http.get('http://0.0.0.0:8080/myhtml1.html').
    then(function(response) {
        document.getElementById("myDiv1").innerHTML = response.data;
    }, function() {
        console.log('Error');
    });
});