'use strict';

/**
 * config : This is the config module
 *
 */
bagcilar.module('config', function () {
  
  return {
    
    /*Caching Wrapper Object For Elements*/
    el : {
      name : $("#name"),
      surName : $("#surname"),
      email : $("#email"),
      password : $("#password"),
      registerButton : $("#register"),
      loginEmail : $("#loginemail"),
      loginPassword : $("#loginpassword"),
      loginButton : $("#loginbutton"),
      loginAndRegisterModalButton : $("#userRegLogin"),
      loginModalHide : $(".login-modal"),
      welcomeUserInfo : $("#welcomeUserInfo")
    },

    /*Wrapper Object for Urls*/
    URLS : {
      sendUser : '/send/'
    },

    /*Wrapper Object for Ajax Methods*/
    AJAX : {
      METHODS : {
        post : 'POST'
      }
    },

    /*Wrapper Object for Data Types*/
    DATA_TYPES : {
      json : 'json'
    },

    /*Wrapper Object for String Messages*/
    MESSAGES : {
      LOGIN_SUCCESS : 'Success : You logged in!',
      LOGIN_ERROR : 'Error : Please check your authentication cridentals.'
    }

  }

}, true);
