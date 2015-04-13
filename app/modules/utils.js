'use strict';

/**
 * utils : This is the utils module
 *
 */
bagcilar.module('utils', function () {

	return {

		/**
		* doRequest is the a method to make ajax requests
		* @param <String> type
		* @param <String> url
		* @param <String> data
		* @param <String> dataType
		* @param <Function> done
		* @param <Function> fail
		* @param <Function> always
		*/
		doRequest : function (type, url, data, dataType, done, fail, always){
			$.ajax({
				type : type,
				url: url,
				data: data,
				dataType: dataType
			})
			.done(function() {
				done('success');
			})
			.fail(function() {
				fail('fail');
			})
			.always(function() {
				always('always');
			});
		},

		/**
		* isLocalStorageActive is a method to check if localStorage is available
		* @param N/A
		*/
		isLocalStorageActive : function(){
			return Modernizr.localstorage;
		},

		/**
		* setLocalItem is a method to set localStorage items
		* @param <String> name
		* @param <Object> obj
		*/
		setLocalItem : function(name, obj){
			if (this.isLocalStorageActive) {
				localStorage.setItem(name, JSON.stringify(obj));
			}
		},

		/**
		* getLocalItem is a method to get localStorage items
		* @param <String> name
		*/
		getLocalItem : function(name){
			if (this.isLocalStorageActive) {
				return JSON.parse(localStorage.getItem((name)));
			}
		},

		/**
		* setCookie is a method to set cookie values
		* @param <String> key
		* @param <String> val
		*/
		setCookie : function(key, val){
			$.cookie(key, val);
		},

		/**
		* getCookie is a method to get cookie values
		* @param <String> key
		*/
		getCookie : function (key) {
			return $.cookie(key);
		}

	}

}, false);
