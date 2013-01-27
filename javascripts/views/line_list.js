define(['backbone',
        'text',
        'mustache',
        'models/line',
        'text!templates/message.mustache',
        'text!templates/line.mustache'],
function(Backbone,
         Text,
         Mustache,
         Line,
         messageTemplate,
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
        var messages_html = "";
        model.attributes.messages.forEach(function(message) {
          messages_html += Mustache.render(messageTemplate, { message: message });
        });
        model.set("messages_html", messages_html);
        html += Mustache.render(lineTemplate, model.attributes);
      });
      // render the HTML and refresh jQuery Mobile.
      this.$el.html(html);
    },

    el: '#line-list'
  });

  return LineList;

});
