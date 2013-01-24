define(['backbone', 'models/line'], function(Backbone, Line) {

  var MySync = function (method, collection, options) {
    options.timeout = 10000; // required, or the application won't pick up on 404 responses
    options.dataType = "jsonp";
    return Backbone.sync(method, collection, options);
  };

  var LinesCollection = Backbone.Collection.extend({
    // url: "http://api.tubeupdates.com/?method=get.status",
    urls: {
      now: "http://tubefeed.herokuapp.com/now.json",
      tomorrow: "http://tubefeed.herokuapp.com/tomorrow.json",
      weekend: "http://tubefeed.herokuapp.com/weekend.json"
    },

    model: Line,

    sync: MySync,

    parse: function(data) {
      return data.response.lines;
    }
  });

  return LinesCollection;

});
