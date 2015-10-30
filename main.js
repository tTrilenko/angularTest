angular.module('appMain', ['ngRoute'])
    .config(function ($routeProvider) {
        var routeConfig = {
            controller: 'ClientsListController',
            templateUrl: 'views/ClientsList/clients.html'
        };

        $routeProvider
            .when('/', {
                controller: 'ClientsListController',
                templateUrl: 'views/ClientsList/clients.html'
            })
            /*.when('/addContact', {
                controller: 'AddUserController',
                templateUrl: 'views/addUser.html'
            })*/
           // .when('/clients', routeConfig)
            .otherwise({
                redirectTo: '/'
            });
    });