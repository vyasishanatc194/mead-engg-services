<?php 
	$to = "sales@mead.co.uk";
	$subject = "mead.co.uk - Enquiry / Contact Form";
	$enquiry = $_POST['enquiry'];
	$firstname = $_POST['firstname'];
	$lastname = $_POST['lastname'];
	$email = $_POST['email'];
	$company = $_POST['company'];
	$phone = $_POST['phone'];
	
	$intro = "You have recived an E-mail through the Enquiry / Contact Form on the mead.co.uk website.";
	$mailcontent = "$intro\n\n\n $firstname $lastname from $company (company), has the following Query and would like some help / advice; \n$enquiry\n\n They left their Phone Number: $phone and Email Address: $email for you to use to get back in touch with them.";
	$from = $email;
	$headers = "From:" . $from;
	mail($to, $subject, $mailcontent, $headers);
?>