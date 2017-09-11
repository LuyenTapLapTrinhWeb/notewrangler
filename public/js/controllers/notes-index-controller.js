angular.module('NoteWrangler')
    .controller('NotesIndexController', ['$http', function ($http) {
        var controller = this;
        // alert('vaoday');
        $http({ method: "GET", url: "/notes" }).then(function (success) {
            controller.notes = success.data;
        });
    }])
