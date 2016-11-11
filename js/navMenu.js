
// Creates the HTML for the navigation bar
document.getElementById("navMenu").innerHTML =
	"<img id='header-img' src='img/header-img.png' />" +
	"<div id='navbar'>" +
		"<ul>" +
			"<li><a href='homepage.html' id='homenav'>Hjem</a></li>" +
			"<li onmouseover='toggleDropdown()' onmouseout='toggleDropdown()' class='dropdownMenu'>" +
				"<a class='dropdownButton' href='products.html' id='productsnav'>Produkter</a>" +
				"<div id='dropdownContent' class='dropdownContent'>" +
					"<a href='necklacesProducts.html'>Smykker</a>" +
					"<a href='accessoriesProducts.html'>Tilbehør</a>" +
					"<a href='homeDecorProducts.html'>Dekorasjoner</a>" +
				"</div>" +
			"</li>" +
			"<li><a href='about.html' id='aboutnav'>Om Kunstneren</a></li>" +
			"<li><a href='ordering.html' id='ordernav'>Bestilling</a></li>" +
			"<li><a href='contact.html' id='contactnav'>Kontakt</a></li>" +
		"</ul>" +
	"</div>";

// Toggle dropdown menu
function toggleDropdown() {
	document.getElementById("dropdownContent").classList.toggle("show");
}
