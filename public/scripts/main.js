/*global require*/
'use strict';

var app = {};

require.config({
  paths: {
    template: '../templates',
    text:  '../bower_components/requirejs-text/text',
    jquery: '../bower_components/jquery/dist/jquery',
    backbone: '../bower_components/backbone/backbone',
    underscore: '../bower_components/underscore/underscore',
    Router: 'routes/router'
  },

  shim: {
    'backbone': ['underscore', 'jquery'],
    'AdminApp': ['backbone']

  }
});


require([
  'AdminApp'
], function(AdminApp) {
  AdminApp.initialize();
});