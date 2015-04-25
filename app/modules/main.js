'use strict';

/**
 * main : This is the main module
 *
 */
bagcilar.module('main', function () {

  var self = this;

  var config = MODULES.config;
  var utils = MODULES.utils;

  var newUser = null;

  /**
  * setUserValues is a method to set values getting an instance of User model
  * @param N/A
  */
  var setUserValues = function(){
    return new User(config.el.name.val(), config.el.surName.val(), config.el.email.val(), config.el.password.val());
  }

  /**
  * initCustomScripts is a method to make a user registered to the application
  * @param N/A
  */
  var register = function(){
    utils.doRequest(config.AJAX.METHODS.post, config.URLS.register, {user : newUser}, config.DATA_TYPES.json, function (message) {
      console.log(message);
      utils.setLocalItem('newUser', newUser);
    }, function (message) {
      console.log(message);
      utils.setLocalItem('newUser', newUser);
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
    var userLoginEmail = config.el.loginEmail.val();
    var userLoginPassword = config.el.loginPassword.val();
    var localUser = utils.getLocalItem('newUser');
    if (localUser.email === userLoginEmail && localUser.password === userLoginPassword) {
      utils.setCookie('userLoginEmail', userLoginEmail);
      utils.setCookie('userLoginPassword', userLoginPassword);
      console.log(config.MESSAGES.LOGIN_SUCCESS);
      self.hideRegisterAndLoginButton();
    } else {
      console.error(config.MESSAGES.LOGIN_ERROR);
    }
  };

  /**
  * hideRegisterAndLoginButton is a method to make register button dissappear
  * @param N/A
  */
  var hideRegisterAndLoginButton = function(){
    $(config.el.loginAndRegisterModalButton).hide();
    $(config.el.loginModalHide).modal('toggle');
  }

  /**
  * emptyWelcomeUserInfo is a method to make the user info empitied
  * @param N/A
  */
  var emptyWelcomeUserInfo = function(){
    $(config.el.welcomeUserInfo).html("");
  }

  /**
  * hideLoginModalButton is a method to make login button dissappear
  * @param N/A
  */
  var hideLoginModalButton = function(){
    $(config.el.loginModalButton).hide();
  }

  /**
  * hideRegisterModalButton is a method to make register button dissappear
  * @param N/A
  */
  var hideRegisterModalButton = function(){
    $(config.el.registerModalButton).hide();
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
