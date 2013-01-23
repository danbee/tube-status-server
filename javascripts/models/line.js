define(['backbone'], function(Backbone) {

  var Line = Backbone.Model.extend({
    initialize: function() {
      this.set_status();
      if (this.get("messages").length) {
        this.set("message_count", this.get("messages").length);
      }
    },

    set_status: function() {
      this.set("status_class", this.get("status").replace(', ', ',').replace(' ', '-').replace(',', ' '));
    }
  });

  return Line;

});
