function myFunction() {
	var x = document.getElementById("myTopnav");
	if (x.className === "topnav") {
	  x.className += " responsive";
	} else {
	  x.className = "topnav";
	}
  }

  let slideIndex = 0;
showSlides();

function showSlides() {
let i;
let slides = document.getElementsByClassName("mySlides")
for (i = 0; i < slides.length; i++) {
slides[i].style.display = "none";
}
slideIndex++;
if (slideIndex > slides.length)
{slideIndex = 1}
slides[slideIndex-1].style.display = "block";
setTimeout(showSlides,6000)
}

var popup = document.getElementById("popup");
var showPopupButton = document.getElementById("show-popup");
var closeButton = document.getElementById("close");

showPopupButton.addEventListener("click", function() {
popup.style.display = "block";
});

closeButton.addEventListener("click", function() {
popup.style.display = "none";
});

showPopupButton.addEventListener("click", function() {
if (!localStorage.getItem("popupShown")) {
popup.style.display = "block";
localStorage.setItem("popupShown", "true");
}
});
