function onClick(element) { /*Sets the caption in the modal and sets the modal 
	image to the source and displays as block*/
	document.getElementById("caption").innerHTML = element.alt;
	document.getElementById("img01").src = element.src;
	document.getElementById("pop").style.display = "block";
}
