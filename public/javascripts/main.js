require.config({
  paths: {
    zepto: 'libs/zepto.min',
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
      deps: ["underscore", "zepto"],
      exports: "Backbone"
    }
  }
});

require(['app'], function(App) {
  App.initialize();
});
