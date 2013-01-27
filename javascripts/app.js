define(['backbone',
        'mustache',
        'collections/lines_now',
        'views/main',
        'views/line_list'],
function(Backbone, Mustache, LinesNowCollection, Main, LineList) {
  return {
    initialize: function() {

      lines = new LinesNowCollection;
      main = new Main({ collection: lines });
      lineList = new LineList({ collection: lines });
      //lines.url = lines.urls.now;

      lines.fetch();
    }
  };
});
