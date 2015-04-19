'use strict';

/**
 * bagcilar : A tiny modular application mediator project
 *
 */

/**
 * MODULES are the main wrapper object which keeps the modules
 * initialized with mediator.module method
 */
var MODULES = MODULES || {};

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
				MODULES[mainModule]['init'];
			}

	}

})();
