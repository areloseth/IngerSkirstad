/*
FILE NAME: js/navMenu.js
WRITTEN BY: Are Løseth (Navigation bar HTML), Andreas Øium (Javascript implementation)
WHEN: November 2016
PURPOSE: Handle the loading and dropdown menu of the navigation bar
*/

// Creates the HTML for the navigation bar
document.getElementById("navMenu").innerHTML =
	"<div class='header-img'>" +
		"<a href='homepage.html'><img src='img/header-img.jpg'></a>" +
		"<p>Inger Skirstad<br />Former i glass</p>" +
	"</div>" +
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
			"<li><a href='order.html' id='ordernav'>Bestill</a></li>" +
			"<li><a href='contact.html' id='contactnav'>Kontakt</a></li>" +
		"</ul>" +
	"</div>";

// Toggle dropdown menu
function toggleDropdown() {
	document.getElementById("dropdownContent").classList.toggle("show");
}
