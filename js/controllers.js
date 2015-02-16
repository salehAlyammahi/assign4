angular.module('starter.controllers', [])

    .controller('toolsCtrl', function($scope) {
    })

.controller('HOMECtrl', function($scope) {
})


    .controller('About_UsCtrl', function($scope,$http) {


        $scope.author = {name:" Instructor",department:" course"};

        $scope.myFun = function()
        {
            var successFunction = function(data)
            {
                $scope.author = data;
            }
            var errorFunction = function(error)
            {
                console.log("Error");
            }

            $http.get("js/name.json").success(successFunction).error(errorFunction);



        }
    })


    .controller('ShoppingCtrl',function($scope,$http){



        var successFunction = function(data)
        {
            $scope.Malls_Details = data;
        }
        var errorFunction = function(error)
        {
            console.log("Error");
        }

        $http.get("js/data.json").success(successFunction).error(errorFunction);





        })

    .controller('HotelsCtrl',function($scope){
        console.log("first view");
    })

    .controller('AttractionsCtrl',function($scope){
        console.log("first view");
    })



    .controller('emergency_linksCtrl',function($scope){

    })

    .controller('SurveyCtrl',function($scope){

    })


;

