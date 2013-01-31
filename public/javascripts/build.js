({
  name: 'main',
  out: 'main_compiled.js',
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
})
