(
  function () {
    'use strict';

    angular.module('MenuApp')
    .controller('CategoriesListController', CategoriesListController);

    CategoriesListController.$inject = ['categories'];
    function CategoriesListController(categories) {
      var categoriesListController = this;
      categoriesListController.categories = categories;
    }
  }
)();
