angular.module('NoteWrangler')
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: "../templates/pages/home/index.html",
            })
            .when('/notes', {
                templateUrl: "../templates/pages/notes/index.html",
                controller: "NotesIndexController",
                controllerAs: "indexController"
            })

            .when('/notes/:id', {
                templateUrl: '../templates/pages/notes/show.html',
                controller: "NotesShowController",
                controllerAs: "showController"
            })
            .when('/users', {
                templateUrl: "../templates/pages/users/index.html",
                controller: "UsersIndexController",
                controllerAs: "usersIndexCtrl"
            })
            .when('/users/:id', {
                templateUrl: "../templates/pages/users/show.html",
                controller: "UsersShowController",
                controllerAs: "usersShowCtrl"
            })
            .when('/404', {
                templateUrl: "../templates/pages/error/index.html",
            })
            .otherwise({ redirecTo: '/404' });
    });