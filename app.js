(function(){
  var app = angular.module('store', ['store-products'] /*['ngRoute']*/);

// controller for stock photography items
  app.controller('StoreController',[ '$http', function($http) {
      // this.products = photos;
      var store = this;
      store.products = [];
      $http.get('/products.json').success(function(data) {
        store.products = data;
    });
  }]);

/*
// controller for panel tabs
// keps track of when value of tab changes
  app.controller('TabController',function() {
    // makes tab a propety of our controller
    // initializes tab property and sets value to 1
      this.tab = 1;

    // set tab equal to passed-in number
    // sets tab value when link inside tab clicked
    this.selectTab = function(setTab) {
      this.tab = setTab;
    };
    // check if current tab is equal to the tab we're checking
    //  accepts a value and returns whether that value matches this.tab
    // comparison function - will return either true or false
    this.isSelected = function(checkTab){
      // returns descriptions so that they display on page
      return this.tab === checkTab;
    };

  });*/

// Review Controller
app.controller('ReviewController', function() {
  this.review = {};
  this.addReview = function(product){
    product.reviews.push(this.review);
    // refresh submitted review
    this.review = {};
  };
});
})();
