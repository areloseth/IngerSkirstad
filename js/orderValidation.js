/*
FILE NAME: js/orderValidation.js
WRITTEN BY: Andreas Øium
WHEN: November 2016
PURPOSE: Client-side validation of the order page through Javascript
*/

// Returns true if validation is successful
function validate() {
	console.log("JS validation is now running");
	
	// Validate name property
	var name = document.forms["order_form"]["name"].value;
	if (name == null || name == "") {
		alert("Fyll ut navn, takk.");
		return false;
	}
	
	// Validate email property
	var email = document.forms["order_form"]["email"].value;
	var atPos = email.indexOf("@");
	var periodPos = email.lastIndexOf(".");
	if (atPos < 1 || periodPos < (atPos + 2)) {
		alert("Det er ikke en gyldig email-adresse.");
		return false;
	}
	
	// Validate phone number property
	var phone = document.forms["order_form"]["phone"].value;
	if (!/^[0-9]+$/.test(phone)) {
		alert("Det er ikke et gyldig telefonnummer.");
		return false;
	}
	
	// Validate products property
	var products = document.forms["order_form"]["products"].value;
	if (products == null || products == "") {
		alert("Du må nesten skrive inn et produkt, takk.");
		return false;
	}
	
	// Send user to order completed page
	header('Location: orderCompleted.html');
	
	return true;
}
