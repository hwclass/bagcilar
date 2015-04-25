'use strict';

/**
* User is the model for users
* @param <String> name
*/
bagcilar.module('app', function () {

  /**
  * bindEvents is a method to binding application-scale events to elements
  * @param N/A
  */
  var bindEvents = function(){

  $(MODULES['config'].el.registerButton).on('click', function(event) {
    event.preventDefault();
    MODULES['main']['setUserValues']();
    MODULES['main']['register']();
  });

  $(MODULES['config'].el.loginButton).on('click', function(event) {
    event.preventDefault();
    MODULES['main']['login']();
  });

  }

  /**
  * initCustomScripts is the main method to initialize some custom scripts
  * @param N/A
  */
  var initCustomScripts = function(){}

  return {
    bindEvents : bindEvents
  }

}, true);
