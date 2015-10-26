/*! angular-app - v1.0.0 - 2015-10-26
 * http://princekr.com
 * Copyright (c) 2015  Prince;
 * Licensed 
 */
var app = angular.module('app',[]);

app.controller('AppCtrl', function($scope){

  $scope.name = {
    firstName: "Prince",
    lastName: "Kumar",

  fullName: function(){
    var nameObject;
    nameObject = $scope.name;
    return nameObject.firstName + " " + nameObject.lastName;
  }
};
});
