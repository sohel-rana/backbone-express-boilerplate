/**
 * Created by sohel on 3/30/15.
 */

define([
  'Router'
], function (Router) {

  var initialize = function () {
    runApplication();
  };

  var runApplication = function () {

    app.Router = Router;

    var hash = "home";

    //load the same page if window is reloaded
    if (window.location.hash) {
      hash = window.location.hash.substr(1, window.location.hash.length);
    }
    window.location.hash = hash;
    //activate the  menu
    $('a[href="#' + hash + '"]').parent().addClass('active');
    Backbone.history.start();

    /**
     * add close method to backbone view
     * unload events and resource uses
     */
    Backbone.View.prototype.close = function () {
      this.$el.children().remove();
      this.unbind();
      this.undelegateEvents();
      this.stopListening();
    };

    //set active class for menu
    $('.nav-sidebar li').click(function(e) {
      $('.nav-sidebar li.active').removeClass('active');
      var $this = $(this);
      if (!$this.hasClass('active')) {
        $this.addClass('active');
      }
    });
  };

  /**
   * return the object with initialize method
   */
  return {
    initialize: initialize
  };

});