(
  function () {
    'use strict';

    angular.module('data')
    .constant('API_PATHS', {
      BASE_API: 'https://davids-restaurant.herokuapp.com',
      CATEGORIES: '/categories.json',
      ITEMS: '/menu_items.json?category='
    });

  }
)();
