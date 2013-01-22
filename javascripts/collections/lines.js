require(['backbone', 'models/line'], function(Backbone, Line) {

  var LinesCollection = Backbone.Collection.extend({
    url: "http://api.tubeupdates.com/?method=get.status",

    parse: function(data) {
      return data.response.lines;
    }
  });

});
