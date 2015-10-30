angular.module('appMain')
    .controller('addCustomerCtrl', ['$rootScope','$scope' ,function ($rootScope, $scope) {
        $scope.newCustomer = {};

        $scope.closePopUp = function () {
            $scope.newCustomer = {};
            $rootScope.$broadcast('closeDialog');
        };

        $scope.addCustomer = function () {
            $scope.newCustomer.smallImgSrc = 'icon-blue';
            $rootScope.$broadcast('customerAdded', $scope.newCustomer);
            $scope.closePopUp();
        };
    }]);