(function(){
  var app = angular.module('store', ['ngRoute']);

// controller for stock photography items
  app.controller('StoreController',function() {
      this.products = photos;
  });

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

  });

  var photos = [
    {
      name: 'Coffee',
      price: 2.95,
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lobortis nibh eros, nec faucibus lorem scelerisque quis. Aliquam nec dolor accumsan, consectetur purus eu, accumsan turpis. ',
      canPurchase: true,
      soldOut: false,
      images: [
        {
          small: 'https://unsplash.it/300?image=1060',
          large:'https://unsplash.it/500/?image=1060'
        }
      ]
    },
    {
      name: "New York City",
      price: 5.95,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lobortis nibh eros, nec faucibus lorem scelerisque quis. Aliquam nec dolor accumsan, consectetur purus eu, accumsan turpis. ",
      canPurchase: true,
      soldOut: false,
      images: [
        {
          small: 'https://unsplash.it/300?image=862',
          large:'https://unsplash.it/500?image=862'
        }
      ]
    }
  ];

})();
