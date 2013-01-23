define(['backbone'], function(Backbone) {

  var Line = Backbone.Model.extend({
    initialize: function() {
      this.set("status_class", this.get("status").replace(' ', '-'));
    }
  });

  return Line;

});
