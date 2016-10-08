(
    function() {
        'use strict';

        angular.module('MenuApp')
            .config(RoutesConfig);

        RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

        function RoutesConfig($stateProvider, $urlRouterProvider) {
            var homeState = {
                name: 'home',
                url: '/',
                templateUrl: 'src/templates/home.template.html'
            };

            var categoriesState = {
                name: 'categories',
                url: '/categories',
                templateUrl: 'src/templates/categories/categories-list.template.html',
                controller: 'CategoriesListController as categoriesListController',
                resolve: {
                    categories: ['MenuDataService', function(MenuDataService) {
                        return MenuDataService.getAllCategories();
                    }]
                }
            };

            var itemsState = {
                name: 'items',
                url: '/items/{shortName}',
                templateUrl: 'src/templates/items/items-list.template.html',
                controller: 'ItemsListController as itemsListController',
                resolve: {
                    items: ['$stateParams', 'MenuDataService', function($stateParams, MenuDataService) {
                        return MenuDataService.getItemsForCategory($stateParams.shortName);
                    }]
                }
            };

            $stateProvider.state(homeState);
            $stateProvider.state(categoriesState);
            $stateProvider.state(itemsState);

            $urlRouterProvider.otherwise('/');
        }
    }
)();
