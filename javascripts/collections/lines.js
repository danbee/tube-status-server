define(['backbone', 'models/line'], function(Backbone, Line) {

  var LinesCollection = Backbone.Collection.extend({
    // added callback=? to force jsonp
    //url: "http://api.tubeupdates.com/?method=get.status&callback=?",
    url: "http://tubefeed.herokuapp.com/now.json?callback=?",
    urls: {
      now: "http://tubefeed.herokuapp.com/now.json?callback=?",
      weekend: "http://tubefeed.herokuapp.com/weekend.json?callback=?"
    },

    model: Line,

    parse: function(data) {
      return data.response.lines;
    }
  });

  return LinesCollection;

});
