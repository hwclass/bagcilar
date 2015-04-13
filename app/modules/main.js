'use strict';

/**
 * main : This is the main module
 *
 */
bagcilar.module('main', function () {

	var newUser = null;

	/**
	* setUserValues is a method to set values getting an instance of User model
	* @param N/A
	*/
	var setUserValues = function(){
		var userName = MODULES['config'].el.name.val();
		var userSurName = MODULES['config'].el.surName.val();
		var userEmail = MODULES['config'].el.email.val();
		var userPassword = MODULES['config'].el.password.val();
		newUser = new User(userName, userSurName, userEmail, userPassword);
	}

	/**
	* initCustomScripts is a method to make a user registered to the application
	* @param N/A
	*/
	var register = function(){
		MODULES['utils']['doRequest'](MODULES['config'].AJAX.METHODS.post, MODULES['config'].URLS.register, {user : newUser}, MODULES['config'].DATA_TYPES.json, function (message) {
			console.log(message);
			MODULES.utils.setLocalItem('newUser', newUser);
		}, function (message) {
			console.log(message);
			MODULES.utils.setLocalItem('newUser', newUser);
		}, function (message) {
			console.log(message);
		});
	};

	/**
	* login is the a method to make a user login
	* @param <String> email
	* @param <String> password
	*/
	var login = function(email, password){
		var userLoginEmail = MODULES['config'].el.loginEmail.val();
		var userLoginPassword = MODULES['config'].el.loginPassword.val();
		var localUser = MODULES.utils.getLocalItem('newUser');
		if (localUser.email === userLoginEmail && localUser.password === userLoginPassword) {
			MODULES.utils.setCookie('userLoginEmail', userLoginEmail);
			MODULES.utils.setCookie('userLoginPassword', userLoginPassword);
			console.log(MODULES.config.MESSAGES.LOGIN_SUCCESS);
			MODULES.main.hideRegisterAndLoginButton();
		} else {
			console.error(MODULES.config.MESSAGES.LOGIN_ERROR);
		}
	};

	/**
	* hideRegisterAndLoginButton is a method to make register button dissappear
	* @param N/A
	*/
	var hideRegisterAndLoginButton = function(){
		$(MODULES.config.el.loginAndRegisterModalButton).hide();
		$(MODULES.config.el.loginModalHide).modal('toggle');
	}

	/**
	* emptyWelcomeUserInfo is a method to make the user info empitied
	* @param N/A
	*/
	var emptyWelcomeUserInfo = function(){
		$(MODULES.config.el.welcomeUserInfo).html("");
	}

	/**
	* hideLoginModalButton is a method to make login button dissappear
	* @param N/A
	*/
	var hideLoginModalButton = function(){
		$(MODULES.config.el.loginModalButton).hide();
	}

	/**
	* hideRegisterModalButton is a method to make register button dissappear
	* @param N/A
	*/
	var hideRegisterModalButton = function(){
		$(MODULES.config.el.registerModalButton).hide();
	}

	/**
	* init is a method to initialize scripts of this module
	* @param <String> name
	*/
	var init = function (){
		var newUser = null;
		app.bindEvents();
	};

	return (function () {
		return {
			setUserValues : setUserValues,
			register : register,
			login : login,
			hideRegisterAndLoginButton : hideRegisterAndLoginButton,
			welcomeUserInfo : welcomeUserInfo,
			init : init
		}
	})();

}, false);
