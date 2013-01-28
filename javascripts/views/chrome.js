define(['views/ios',
        'text!templates/header.html',
        'text!templates/footer.html'],
function(iOS, header, footer) {

  var Chrome = Backbone.View.extend({
    initialize: function() {
      if (phonegap && (device.platform == "iOS" || device.platform == "iPhone Simulator")) {
        new iOS({ collection: lines });
      }
      else if (phonegap && device.platform == "Android") {
        new Android();
      }
      else {
        // html5 app
        $('#page').prepend(header);
        $('#page').append(footer);
        $('body').addClass('html5');
      }
    }
  });

  return Chrome;

});
