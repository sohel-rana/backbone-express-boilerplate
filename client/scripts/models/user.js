/*global define*/

define([
], function () {
  'use strict';

  var UserModel = Backbone.Model.extend({
    url: '/users',

    initialize: function() {
    },

    defaults: {
    },

    validate: function(attrs, options) {
    },

    parse: function(response, options)  {
      return response;
    }
  });

  return UserModel;
});
