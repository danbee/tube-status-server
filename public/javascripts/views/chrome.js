define(['backbone',
        'text!templates/header.html',
        'text!templates/footer.html'],
function(Backbone, header, footer) {

  var Chrome = Backbone.View.extend({
    initialize: function() {
      // html5 app
      $('#page').prepend(header);
      $('#page').append(footer);
      $('body').addClass('html5');
    }
  });

  return Chrome;

});
