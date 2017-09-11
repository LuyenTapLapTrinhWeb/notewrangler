angular.module('NoteWrangler').controller("UsersIndexController",['$http',function($http){
    var controller = this;
    // alert('vaoday');
    $http({ method: "GET", url: "/users" }).then(function (success) {
        controller.users = success.data;
    });
}])