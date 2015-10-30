angular.module('appMain')
    .controller('navCtrl', ['$rootScope','$scope' ,function ($rootScope, $scope) {
        $scope.popUpVisible = false;

        $scope.addContacts = function () {
            $scope.popUpVisible = true;
        };

        $scope.$on('closeDialog', function () {
            $scope.popUpVisible = false;
        });
    }]);