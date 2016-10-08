(
  function () {
    'use strict';

    angular.module('MenuApp')
    .controller('ItemsListController', ItemsListController);

    ItemsListController.$inject = ['items'];
    function ItemsListController(items) {
      var itemsListController = this;
      itemsListController.items = items.menuItems;
      itemsListController.categoryName = items.categoryName;
    }
  }
)();
