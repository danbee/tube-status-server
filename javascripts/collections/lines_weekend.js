define(['backbone', 'models/line'], function(Backbone, Line) {

  var LinesWeekendCollection = Backbone.Collection.extend({
    // added callback=? to force jsonp
    url: "http://api.tubeupdates.com/?method=get.status&callback=?",

    model: Line,

    parse: function(data) {
      return data.response.lines;
    }
  });

  return LinesWeekendCollection;

});
