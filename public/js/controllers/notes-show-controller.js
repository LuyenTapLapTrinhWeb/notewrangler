angular.module('NoteWrangler')
    .controller('NotesShowController', function ($http, $routeParams) {
        var controller = this;
        $http({ method: "GET", url: '/notes/' + $routeParams.id }).then(function (success) {
            controller.note = success.data;
        });
    });