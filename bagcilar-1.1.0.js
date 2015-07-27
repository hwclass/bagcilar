/**
* Booklet : The main application wrapper object
* @param <String> name
* @param <Object> options
*/
var Booklet = function (name, options) {
	
	this.name = name;

	this.defaults = (typeof options !== 'undefined' ? options : {});

	var booklet = this;

	/**
	* Page : The View-Model Object to Bind Values and Events
	* @noparam
	*/
	var Page = function () {
		
		var self = this;

		this.booklet = booklet;

		var modules = [];

		this.register = function (moduleName, context) {
			modules.push({name : moduleName, fn : context, started : false});
		};

		this.detach = function (moduleName) {
			var selectedModuleToDetach = self.getModule(moduleName, true);
			try {
				modules.splice(selectedModuleToDetach.index, 1);
			} catch (err) {
				console.log(err);
			};
		};

		this.start = function (moduleName) {
			var selectedModuleToStart = self.getModule(moduleName);
			if (!!selectedModuleToStart.fn) {
				selectedModuleToStart.fn.init();
				selectedModuleToStart.started = true;
			}
		};

		this.startAll = function () {
			for (var modulesCounter = 0, len = modules.length; modulesCounter < len; modulesCounter++) {
				if (!modules[modulesCounter].started) {
					self.start(modules[modulesCounter].name);
				} else {
				}
			}
		};

		this.stop = function (moduleName) {
			var selectedModuleToStop = self.getModule(moduleName);
			selectedModuleToStop = null;
		};

		this.getModule = function (moduleName, withIndex) {
			var selectedModule,
					indexOfTheModule,
					builtModuleObj;
			for (var modulesCounter = 0, len = modules.length; modulesCounter < len; modulesCounter++) {
				if (modules[modulesCounter]['name'] === moduleName) {
					selectedModule = modules[modulesCounter];
					indexOfTheModule = modulesCounter;
				}
			};
			if (withIndex) {
				selectedModule = builtModuleObj = {
					selectedModule : selectedModule,
					index : indexOfTheModule
				} 
			}
			return selectedModule;
		};

		this.get = function (moduleName) {
			var selectedModule;
			for (var modulesCounter = 0, len = modules.length; modulesCounter < len; modulesCounter++) {
				if (modules[modulesCounter]['name'] === moduleName) {
					selectedModule = modules[modulesCounter];
				}
			};
			return selectedModule;
		};

		this.getConfig = function () {
			return booklet.config;
		}

		this.getUtility = function () {
			return booklet.utility;
		}

	};

	this.createPage = function (options) {
		self.defaults = (typeof options !== 'undefined' ? options : {});
		return new Page();
	}

}






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
 * Version : 1.1.0
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
 */
var bagcilar = (function () {

	return {

    /**
    * module() is a module creation method
    *
    * @param {String} name
    * @param {Function} fn
    * @param {Boolean} initOnLoad
    */
    module : function (name, fn, initOnLoad) {
      var mainModule = new String('main');
      name = new String(name);
      MODULES[name] = new fn();
      if (typeof name !== 'undefined' && typeof name !== null) {
        if (name === mainModule) {
          this.init(mainModule);
        } else {
          if (initOnLoad) {
            this.start(name);
          }
        }
      } else {
        console.log('Please, specify a module name and try again.');
      }
    },

    /**
    * start() is a module initializing method
    * that makes modules starting to work
    *
    * @param {String} name
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
    * @param {String} mainModule
    */
    init : function(mainModule){
      MODULES[mainModule]['init']();
    },

    /**
    * subscribe() is a subscribing method to listen publishing events
    *
    * @param {String} topic
    * @param {Function} listener
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
    * @param {String} topic
    * @param {Object} info
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