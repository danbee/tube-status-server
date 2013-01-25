define(['backbone',
        'mustache',
        'collections/lines',
        'views/main',
        'views/line_list'],
function(Backbone, Mustache, LinesCollection, Main, LineList) {
  return {
    initialize: function() {

      lines = new LinesCollection;
      main = new Main({ collection: lines });
      lineList = new LineList({ collection: lines });
      lines.url = lines.urls.now;

      lines.fetch();
    }
  };
});
