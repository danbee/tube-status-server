define(['jquerymobile',
        'backbone',
        'mustache',
        'collections/lines',
        'views/line_list'],
function(a, Backbone, Mustache, LinesCollection, LineList) {
  return {
    initialize: function() {
      lines = new LinesCollection;
      lineList = new LineList({ collection: lines });

      lines.fetch();
    }
  };
});
