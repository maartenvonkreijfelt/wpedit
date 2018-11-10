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
				console.info(response);
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



})(jQuery);
