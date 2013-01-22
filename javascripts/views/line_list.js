require(['backbone',
        'text',
        'models/line',
        'collections/lines',
        'text!templates/line.mustache'],
function(Backbone,
         Text,
         Line,
         LineCollection,
         lineTemplate) {

  var LineList = Backbone.View.extend({
    el: '#line-list'
  });

});
