// JavaScript Document
$(document).ready(function(){

	// click on the button
	$("button#submit").click(function() {

	// set the input field values into a variables
	var enquiry = $('#enquiry').val();
	var firstname = $('#firstname').val();
	var lastname = $('#lastname').val();
	var email = $('#email').val();
	var company = $('#company').val();
	var phone = $('#phone').val();

	// validate the inputs
	if (enquiry == "") {
		$('textarea#enquiry').addClass('required');
		$("textarea#enquiry").focus();
	} else {
		$('textarea#enquiry').removeClass('required');

	if (firstname == "") {
		$('input#firstname').addClass('required');
		$("input#firstname").focus();
	} else {
		$('input#firstname').removeClass('required');
	
	if (lastname == "") {
		$('input#lastname').addClass('required');
		$("input#lastname").focus();
	} else {
		$('input#lastname').removeClass('required');

	if (email == "") {
		$('input#email').addClass('required');
		$("input#email").focus();
	} else {
		$('input#email').removeClass('required');

	if (company == "") {
		$('input#company').addClass('required');
		$("input#company").focus();
	} else {
		$('input#company').removeClass('required');
		
	if (phone == "") {
		$('input#phone').addClass('required');
		$("input#phone").focus();
	} else {
		$('input#phone').removeClass('required');

	// process the message
	$.ajax({
		type: "POST",
		url: "php/contact_process.php",
		data: ({
			enquiry : enquiry,
			firstname : firstname,
			lastname : lastname,
			email : email,
			company : company,
			phone : phone
		}), 
		success: function() {
			// tell me its finished by displaying a thankyou message
			$('#formWrap').html("<div id='message_thanks'></div>");
			$('#message_thanks').hide().html("<h1>Contact Form</h1><p class='thanks-form'>Thank you for your enquiry, we are very busy right now.<br />We will aim to get back to your enquiry within the working day.</p>").fadeIn();
		}
	});
	
	}
	}
	}
	}
	}
	}
	
});
});