'use strict';

/**
* User is the model for users
* @param <String> name
* @param <String> surname
* @param <String> email
* @param <String> password
*/
var User = (function () {

  return function (name, surname, email, password) {

    /*<Object> userProto*/
    var userProto = new Object();

    /*<String> userProto.name*/
    userProto.name = name;

    /*<String> userProto.surname*/
    userProto.surname = surname;

    /*<String> userProto.email*/
    userProto.email = email;

    /*<String> userProto.password*/
    userProto.password = password;

    return {

      /**
      * getName is the getter method for name property
      */
      getName : function () {
        return userProto.name;
      },

      /**
      * getSurname is the getter method for surname property
      */
      getSurname : function () {
        return userProto.surname;
      },

      /**
      * getEmail is the getter method for email property
      */
      getEmail : function () {
        return userProto.email;
      },

      /**
      * getPassword is the getter method for password property
      */
      getPassword : function () {
        return userProto.password;
      },

      /**
      * setName is the setter method for name property
      */
      setName : function (name) {
        userProto.name = name;
      },

      /**
      * getSurname is the setter method for surname property
      */
      setSurname : function (surname) {
        userProto.surname = surname;
      },

      /**
      * setEmail is the setter method for email property
      */
      setEmail : function (email) {
        userProto.email = email;
      },

      /**
      * setPassword is the setter method for password property
      */
      setPassword : function (password) {
        userProto.password = password;
      }

    }

  };

})();
