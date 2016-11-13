function onClick(element) {
	document.getElementById("caption").innerHTML = element.alt;
	document.getElementById("img01").src = element.src;
	document.getElementById("pop").style.display = "block";
}
