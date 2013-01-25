require.config({
  paths: {
    jquery: 'libs/jquery.min',
    underscore: 'libs/underscore',
    backbone: 'libs/backbone',
    mustache: 'libs/mustache',
    text: 'libs/text'
  },
  shim: {
    underscore: {
      exports: '_'
    },
    backbone: {
      deps: ["underscore", "jquery"],
      exports: "Backbone"
    }
  }
});

require(['app'], function(App) {
  App.initialize();
});
