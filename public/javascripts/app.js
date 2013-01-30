define(['backbone',
        'mustache',
        'collections/lines',
        'views/chrome',
        'views/main',
        'views/line_list'],
function(Backbone, Mustache, LinesCollection, Chrome, Main, LineList) {
  return {
    initialize: function() {

      window.phonegap = (document.URL.indexOf("http://") == -1);
      if (window.phonegap) {
        $.getScript("/javascripts/libs/cordova-2.2.0.js");
      }

      lines = new LinesCollection;

      // initialise chrome. this will render appropriate navbar and tabbar for the platform.
      chrome = new Chrome({ collection: lines });

      main = new Main({ collection: lines });
      lineList = new LineList({ collection: lines });
      //lines.url = lines.urls.now;

      lines.fetch();
    }
  };
});
