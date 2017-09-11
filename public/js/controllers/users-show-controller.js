angular.module('NoteWrangler')
    .controller("UsersShowController", function ($http, $routeParams) {
        var controller = this;
        $http({ method: "GET", url: "/users/" + $routeParams.id }).then(function (success) {
            controller.user = success.data;
        });
    });