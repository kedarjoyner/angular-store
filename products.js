(function(){
var app = angular.module('store-products',[]);

  // Custom Directives
  app.directive('productTitle', function(){
    return {
      // element directive
      restrict: 'E',
      // URL of template
      templateUrl: 'product-title.html'
    };
  });

  app.directive('productPanels', function(){
    return {
      restrict: 'E',
      templateUrl: 'product-panels.html',
      controller:function(){
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
      },
      controllerAs: 'panel'
    };
  });
})();
