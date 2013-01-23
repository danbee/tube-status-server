define(['backbone', 'models/line'], function(Backbone, Line) {

  var MySync = function (method, collection, options) {
    options.timeout = 10000; // required, or the application won't pick up on 404 responses
    options.dataType = "jsonp";
    return Backbone.sync(method, collection, options);
  };

  var LinesCollection = Backbone.Collection.extend({
    // url: "http://api.tubeupdates.com/?method=get.status",
    urls: {
      now: "/test-data/now.json",
      tomorrow: "/test-data/tomorrow.json",
      weekend: "/test-data/weekend.json"
    },

    model: Line,

    // sync: MySync,

    parse: function(data) {
      return data.response.lines;
    }
  });

  return LinesCollection;

});
