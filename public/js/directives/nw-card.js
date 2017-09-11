angular.module('NoteWrangler')
    .directive("nwCard", function nwCardDirective() {
        var num = 1;
        return {
            restrict: "E",
            templateUrl: "../../templates/directives/nw-card.html",
            scope: {
                header: "=",
                icon: "="
            },
            controller: function ($scope) {
                // this.header = "Note Title" + num++;
                // $scope.header = "Note Title" + num++;
                // $scope.icon = "icon here";
            },
            link: function (scope, element,attrs) {
                element.on("click", function () {
                    element("div.card p").toggleClass("hidden")
                });
                console.log(attrs.header);
            }
        }
    })