/**
 * Created by sohel on 3/30/15.
 */


define([
  'views/home',
  'views/dashboard',
  'views/contact'
], function (HomeView, DashboardView, ContactView) {
  'use strict';

  var AdminRouter = Backbone.Router.extend({

    currentView: null,

    routes: {
      "home" :          "home",         // #home
      "dashboard" :     "dashboard",    // #dashboard
      "contact" :       "contact"       // #contact
    },

    /**
     * renders the current view and closes the existing one
     * @param view, the view instance
     * @param isRender, true/false
     */
    changeView: function (view, isRender) {
      if (this.currentView != null) {
        this.currentView.close();
      }
      this.currentView = view;

      if (isRender) {
        this.currentView.render();
      }
    },

    home: function(){
      this.changeView(new HomeView(), true);
    },

    dashboard: function() {
      this.changeView(new DashboardView(), true);
    },

    contact: function() {
      this.changeView(new ContactView(), true);
    }
  });

  return new AdminRouter();
});
