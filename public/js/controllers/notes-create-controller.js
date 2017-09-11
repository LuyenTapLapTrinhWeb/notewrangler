angular.module('NoteWrangler')
    .controller("NoteCreateController", function ($http, $routeParams) {
        var controller = this;
        this.saveNote = function(note){
            controller.errors = null;
            $http({method:"POST",url:"/notes",data:note})
            .catch(function(catches){
                controller.errors = catches.data.error;
            })
        }
    });