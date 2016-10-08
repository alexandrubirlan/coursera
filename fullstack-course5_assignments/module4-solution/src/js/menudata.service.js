(
    function() {
        'use strict';

        angular.module('data')
            .service('MenuDataService', MenuDataService);

        MenuDataService.$inject = ['$http', '$q', 'API_PATHS'];

        function MenuDataService($http, $q, API_PATHS) {
            var menuService = this;

            menuService.getAllCategories = function() {
                console.log('getAllCategories.enter;');
                var request = {
                    url: API_PATHS.BASE_API + API_PATHS.CATEGORIES,
                    method: 'GET'
                };

                return $http(request).then(
                    function(result) {
                        console.log('http resolved;');
                        var categories = result.data;
                        return categories;
                    },
                    function(error) {
                        console.log(error);
                });
            };

            menuService.getItemsForCategory = function(categoryShortName) {
                console.log('getItemsForCategory.enter;');
                var request = {
                    url: API_PATHS.BASE_API + API_PATHS.ITEMS + categoryShortName,
                    method: 'GET'
                };

                return $http(request).then(
                    function(result) {
                        console.log('http resolved;');
                        var items = {
                            menuItems: result.data.menu_items,
                            categoryName: result.data.category.name
                        };
                        console.log(items);
                        return items;
                    },
                    function(error) {
                        console.log(error);
                });
            };

        }

    }
)();
