angular.module('appMain')
    .controller('ClientsListController', ['$scope', 'customerInfo', function ($scope, customerInfo) {

    this.resizeMainContainer = function () {
        $scope.clientsListWrapClass = $scope.selectedClient ? 'col-sm-8' : 'col-sm-12';
    };

    $scope.$on('customerAdded', function (event, customer) {
        $scope.clientsList.data.push(customer);
    });

    $scope.reverseTable = function () {
        $scope.reverse = !$scope.reverse;
        $scope.arrowClass = $scope.reverse ? '' : 'arrow-up';
    };

    $scope.editClient = function (data) {
        $scope.selectedClient = data;
        $scope.isInfoHidden = !$scope.isInfoHidden;
        this.resizeMainContainer();
    }.bind(this);

    $scope.hideInfo = function () {
        $scope.selectedClient = null;
        $scope.isInfoHidden = false;
        this.resizeMainContainer();
    }.bind(this);

    this.init = function () {
        var promise = customerInfo.getCustomersList();

        promise.then(function (data) {
            $scope.clientsList = data;
        });

        this.resizeMainContainer();
    };

    this.init();
}]);