'use strict';

 /*!
 * bagcilar.js. A tiny modular application mediator project
 *
 * Copyright (c) 2015 Barış Güler
 * http://hwclass.in
 *
 * Licensed under MIT
 * http://www.opensource.org/licenses/mit-license.php
 *
 *
 * Launch  : April 2015
 * Version : 0.1.0
 * Released: April 1st, 2015
 *
 *
 * manages the view states and other functionalities in applications
 */

/**
 * MODULES are the main wrapper object which keeps the modules
 * initialized with mediator.module method
 */
var MODULES = MODULES || {};

var TOPICS = TOPICS || {};

/**
 * mediator main module creation object
 *
 * @param <Function> IIFE
 */
var bagcilar = (function () {

	var mainModule = 'main';

	return {

    /**
    * module() is a module creation method
    *
    * @param <String> name
    * @param <Function> fn
    * @param <Boolean> initOnLoad
    */
    module : function (name, fn, initOnLoad) {
      MODULES[name] = new fn();
      if (name === mainModule) {
        this.init(mainModule);
      } else {
        if (initOnLoad) {
          this.start(name);
        }
      }
    },

    /**
    * start() is a module initializing method
    * that makes modules starting to work
    *
    * @param <String> name
    */
    start : function (name) {
      for(var key in MODULES[name]) {
        if (MODULES[name][key] instanceof Function) {
          MODULES[name][key]();
        }
      }
    },

    /**
    * init() is a main module initializing method
    * that makes modules starting to work
    *
    * @param <String> mainModule
    */
    init : function(mainModule){
      MODULES[mainModule]['init']();
    },

    /**
    * subscribe() is a subscribing method to listen publishing events
    *
    * @param <String> topic
    * @param <Function> listener
    */
    subscribe : function (topic, listener) {
      if(!TOPICS[topic]) TOPICS[topic] = { queue: [] };
      var index = TOPICS[topic].queue.push(listener);
      return (function(index) {
        return {
          remove: function() {
            delete TOPICS[index];
          }
        }
      })(index);
    },

    /**
    * publish() is a sending data method to subscriptions listening publishing events
    *
    * @param <String> topic
    * @param <Object> info
    */
    publish : function (topic, info) {
      if(!TOPICS[topic] || !TOPICS[topic].queue.length) return;
      var items = TOPICS[topic].queue;
      for(var x = 0; x < items.length; x++) {
        items[x](info || {});
      }
    }
    
  }

})();