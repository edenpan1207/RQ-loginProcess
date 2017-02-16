$(document).ready(function() {
	var form = $('.form');
	fastFeedback(form);

$('.form').submit(function(event) {
	var name = $('#number').val();
	validName(name, event);
});



function fastFeedback(element) {
  var nameInput = element.find('#number');

  nameInput.blur(function(event) {
  	var name = $(this).val();
  	validName(name, event);

  	if(!isValidName(name)){
  		$(this).css({'box-shadow':'0 0 4px red','border':'1px solid red'});
  	} else {
  		$(this).css({'box-shadow':'0 0 4px green','border':'1px solid green'});
  	}
  });
}

// validation of input name
	function validName(name, event) {
		if(!isValidName(name)) {
			$('.name-feedback').text(' 請輸入您的配速');
			event.preventDefault();
		} else {
			$('.name-feedback').text('');
		}
	}

	function isValidName(name) {
		return name.length >= 1;
	}
});