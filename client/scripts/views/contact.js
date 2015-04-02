/**
 * Created by sohel on 3/30/15.
 */

define([
  'text!template/contact.html'
], function (ContactTemplate) {
  'use strict';

  var ContactView = Backbone.View.extend({

    el: '#page-content',

    template: _.template(ContactTemplate),

    tagName: 'div',

    id: '',

    className: '',

    events: {},

    initialize: function () {
    },

    render: function () {
      this.$el.html(this.template());
    }
  });
  return ContactView;
});
