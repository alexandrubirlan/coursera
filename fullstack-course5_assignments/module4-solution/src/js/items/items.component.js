(
  function () {
    'use strict';

    angular.module('MenuApp')
    .component('items', {
      templateUrl: 'src/templates/items/items.template.html',
      controller: ItemsController,
      bindings: {
        items: '<'
      }
    });

    function ItemsController() {
      var ctrl = this;

      ctrl.getItems = function () {
        return ctrl.items;
      };
    }
  }
)();
