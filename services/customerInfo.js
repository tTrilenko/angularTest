angular.module('appMain')
    .service('customerInfo', function ($http, $q) {
        this.getCustomersList = function () {
            var url = 'data.json',
                deferred = $q.defer();

            var users;

            $http.get(url)
                .success(function (data) {
                    deferred.resolve(data);
                })
                .error(function (data) {
                    deferred.reject(data);
                });

            return deferred.promise;
        };
    });