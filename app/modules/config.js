'use strict';

/**
 * config : This is the config module
 *
 */
bagcilar.module('config', function () {
	return {
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
		URLS : {
			sendUser : '/send/'
		},
		AJAX : {
			METHODS : {
				post : 'POST'
			}
		},
		DATA_TYPES : {
			json : 'json'
		},
		MESSAGES : {
			LOGIN_SUCCESS : 'Success : You logged in!',
			LOGIN_ERROR : 'Error : Please check your authentication cridentals.'
		}
	}
}, true);
