/*global require*/
'use strict';

var app = {};

require.config({

  //set the paths
  paths: {
    template: '../templates',
    text:  '../bower_components/requirejs-text/text',
    jquery: '../bower_components/jquery/dist/jquery',
    backbone: '../bower_components/backbone/backbone',
    underscore: '../bower_components/underscore/underscore',
    Router: 'routes/router'
  },

  //define the dependencies
  shim: {
    'backbone': ['underscore', 'jquery'],
    'App': ['backbone']
  }
});


require([
  'App'
], function(App) {
  App.initialize(); //initialize
});