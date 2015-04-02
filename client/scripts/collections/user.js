define([
  'models/user'
], function (UserModel) {
  'use strict';

  var UserCollection = Backbone.Collection.extend({
    url: '/users',
    model: UserModel
  });

  return UserCollection;
});
