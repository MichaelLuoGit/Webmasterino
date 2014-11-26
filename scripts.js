var removeBanner = function() {
	image = document.getElementById('image');
	button.onclick = function(){
		if (image.style.visibility == "visible")
		{
			image.style.visibility = "hidden";
		}
		else
		{
			image.style.visibility = "visible"
		}
	};
	//bttn.
	console.log("hi");
}

window.onload = removeBanner;