// listen for when the user clicks on the hamburger icon
	//when user clicks on hamburger, we pass in an anon function
$('.hamburger').on('click', function () {
	// if menu is closed, slide down
	// if menu is open, slide up
$('.main-nav').toggleClass('open');

});