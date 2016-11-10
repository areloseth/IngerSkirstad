<?php

	// Script for sending email after submitting the order form

	$name = $_POST['name'];
	$buyer_email = $_POST['email'];
	$phone = $_POST['phone'];
	$products = $_POST['products'];
	$comments = $_POST['comments'];
	
	$email_from = 'test@test.com';
	$email_subject = "Ny bestilling";
	$email_body = "Du har fått en ny bestilling fra $name.\n".
			"Telefonnummer: $phone\n".
			"Produkter - antall: $products\n".
			"Kommentar: $comments";
	
	$to = "test@test.com";	
	$headers = "From: $email_from \r\n";
	$headers .= "Reply-To: $buyer_email \r\n";
	
	mail($to, $email_subject, $email_body, $headers);
?>
