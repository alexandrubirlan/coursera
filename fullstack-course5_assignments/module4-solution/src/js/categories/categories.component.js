(
  function () {
    'use strict';

    angular.module('MenuApp')
    .component('categories', {
      templateUrl: 'src/templates/categories/categories.template.html',
      controller: CategoriesController,
      bindings: {
        categories: '<'
      }
    });


    function CategoriesController() {
      var ctrl = this;

      ctrl.getAllCategories = function () {
        return ctrl.categories;
      };
    }

  }
)();
