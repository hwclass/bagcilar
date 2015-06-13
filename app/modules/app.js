'use strict';

/**
* module method for initializing app module
* @param <String> name
* @param <Function> callback
*/
bagcilar.module('app', function () {

  var self = this;

  var config = MODULES.config;
  var utils = MODULES.utils;

  /**
  * bindEvents is a method to binding application-scale events to elements
  * @param N/A
  */
  var bindEvents = function(){

    $(config.el.registerButton).on('click', function(event) {
      event.preventDefault();
      main.setUserValues();
      main.register();
    });

    $(config.el.loginButton).on('click', function(event) {
      event.preventDefault();
      main.login();
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
