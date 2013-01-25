define(['backbone'],
function(Backbone) {

  var MainView = Backbone.View.extend({

    el: 'body',

    events: {
      "click #refresh": "refresh",
      "click footer a": "changeView"
    },

    initialize: function() {
      this.collection.on("request", function() {
        // $.mobile.loading('show');
      }).on("reset", function() {
        // $.mobile.loading('hide');
      });
    },

    refresh: function(e) {
      e.preventDefault();
      this.collection.fetch();
    },

    changeView: function(e) {
      e.preventDefault();
      this.collection.url = this.collection.urls[e.currentTarget.id];
      $('footer a').removeClass("selected");
      $(e.currentTarget).addClass("selected");
      this.collection.fetch();
    }

  });

  return MainView;

});
