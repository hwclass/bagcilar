'use strict';

/**
* User is the model for users
* @param <String> name
* @param <String> surname
* @param <String> email
* @param <String> password
*/
var User = function(name, surname, email, password){
	this.name = name;
	this.surname = surname;
	this.email = email;
	this.password = password;
}
