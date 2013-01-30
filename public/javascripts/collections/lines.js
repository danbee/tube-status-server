define(['backbone', 'models/line'], function(Backbone, Line) {

  var LinesCollection = Backbone.Collection.extend({
    url: "/now.json",
    urls: {
      now: "/now.json",
      weekend: "/weekend.json"
    },

    model: Line,
  });

  return LinesCollection;

});
