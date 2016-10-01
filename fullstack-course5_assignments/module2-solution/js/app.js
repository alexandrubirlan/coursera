(function () {
  'use strict'

  angular.module('shoppingList', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var buyCtrl = this;

    buyCtrl.buyItem = function (index) {
      ShoppingListCheckOffService.buyItem(index);
    }

    buyCtrl.getItems = function () {
      return ShoppingListCheckOffService.getToBuyItems();
    }
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var boughtCtrl = this;

    boughtCtrl.getItems = function () {
      return ShoppingListCheckOffService.getBoughtItems();
    }
  }



  function ShoppingListCheckOffService() {

    var service = this;

    var toBuyList = [
      {name: 'cookies', quantity:'10 bags'},
      {name: 'milk', quantity:'2 liters'},
      {name: 'coffee', quantity:'1 bag'},
      {name: 'eggs', quantity:'12'},
      {name: 'carrots', quantity:'1 kg'}
    ];
    var boughtList = [];

    service.addItem = function(itemname, itemquantity) {
      var item = {
        name: itemname,
        quantity: itemquantity
      }
    }

    service.buyItem = function (index) {
      var item = toBuyList[index];
      boughtList.push(item);
      toBuyList.splice(index, 1);
    }

    service.getToBuyItems = function() {
      return toBuyList;
    }

    service.getBoughtItems = function () {
      return boughtList;
    }

  }


})();
