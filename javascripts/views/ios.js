define(['backbone'],
function(Backbone) {

  var iOSView = Backbone.View.extend({

    initialize: function() {

      var view = this;

      var navBar = plugins.navigationBar;
      var tabBar = plugins.tabBar;

      // Initializating TabBar and NavigationBar
      navBar.init();
      tabBar.init();

      navBar.create();
      tabBar.create();

      navBar.hideLeftButton();
      navBar.hideRightButton();

      navBar.setTitle("Tube Status");

      ["Now", "Weekend"].forEach(function(label) {
        tabBar.createItem(label.toLowerCase(), label, "/www/images/ios/"+label.toLowerCase()+".png", {
          onSelect: function() {
            view.collection.url = view.collection.urls[label.toLowerCase()];
            view.collection.fetch();
          }
        });
      });

      navBar.showRightButton();

      navBar.setupRightButton(
        null,
        "barButton:Refresh",
        function() {
          view.collection.fetch();
        }
      )

      navBar.show();
      tabBar.show();
      tabBar.showItems("now", "tomorrow", "weekend");
    }
  });

  return iOSView;

});
