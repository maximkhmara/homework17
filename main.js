$('.button').on('click', function () {
	$('.overlay').addClass('show');
	$('.modal').addClass('show');
});

$('.overlay, .modal-close').on('click', function () {
	$('.overlay').removeClass('show');
	$('.modal').removeClass('show');
});
