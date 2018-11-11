(function($){

	const RESTROOT = 'https://dwsdemo2.preludio.nl/wp-json';
	const $ENTRYTITLE = $('.post-title');
	const $LOGIN = $('#loginform');
	const $LOGOUT = $('#logout');
	// Get a new token, store it in sessionStorage:
	function getToken(username,password) {

		$.ajax({
				url: RESTROOT + '/jwt-auth/v1/token',
				method: 'POST',
				data:{
					'username': username,
					'password': password
				}
			})

			.done(function(response){
				sessionStorage.setItem('newToken',response.token);
				$LOGIN.toggle();
				$LOGOUT.toggle();

			})

			.fail(function(response){
				console.error("REST error.");
			})
	}


	$LOGIN.toggle();
	$('#login_button').click(function(e){
		e.preventDefault();
		let username = document.querySelector('#user_login').value;
		let password = document.querySelector('#user_pass').value;
		console.info("Username: " + username + " Password: " + password);
		getToken(username,password);
	});



	$('#logout').click(clearToken);


// Clear token from sessionStorage:
	function clearToken() {
		sessionStorage.removeItem('newToken');
		$LOGIN.toggle();
		$LOGOUT.toggle();
	}


})(jQuery);
