
function validate() {
	console.log("Validation is now running");
	
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
	if (atPos < 1 || dotpos < (atPos + 2) || (periodPos + 2) >= email.length) {
		alert("Det er ikke en gyldig email-adresse.");
		return false;
	}
	
	// Validate phone number property
	var phone = document.forms["order_form"]["phone"].value;
	if (!/^[0-9]+$/.test(phone)) {
		alert("Det er ikke et gyldig telefonnummer.");
		return false;
	}
	
	return true;
}