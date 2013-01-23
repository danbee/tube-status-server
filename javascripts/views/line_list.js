define(['backbone',
        'text',
        'mustache',
        'models/line',
        'collections/lines',
        'text!templates/line.mustache'],
function(Backbone,
         Text,
         Mustache,
         Line,
         LineCollection,
         lineTemplate) {

  var LineList = Backbone.View.extend({
    initialize: function() {
      var view = this;
      this.collection.on("reset", function() {
        view.render();
      });
    },

    render: function() {
      var html = "";
      this.collection.models.forEach(function(model) {
        html += Mustache.render(lineTemplate, model.toJSON());
      });
      // render the HTML and refresh jQuery Mobile.
      this.$el.html(html).listview("refresh");
    },

    el: '#line-list'
  });

  return LineList;

});
