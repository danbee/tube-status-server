define(['jquerymobile',
        'backbone',
        'mustache',
        'collections/lines',
        'views/line_list'],
function(a, Backbone, Mustache, LinesCollection, LineList) {
  return {
    initialize: function() {
      var refetch = function() {
        $.mobile.loading('show');
        lines.fetch({
          success: function() {
            $.mobile.loading('hide');
          }
        });
      }

      lines = new LinesCollection;
      lineList = new LineList({ collection: lines });
      lines.url = lines.urls.now;

      lines.fetch();

      $('#refresh').on("click", function() {
        refetch();
        return false;
      });

      $('footer a').on("click", function() {
        lines.url = lines.urls[this.id];
        refetch();
      });
    }
  };
});
