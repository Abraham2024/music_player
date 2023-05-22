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


// Declare and initialize the cart count and total price variables
let cartCount = 0;
let totalPrice = 0;

// Select all the buttons and add a click event listener to each one
document.querySelectorAll('.product-item button').forEach(button => {
	button.addEventListener('click', () => {
		// Get the price of the clicked product and add it to the total price
		const price = parseFloat(button.getAttribute('data-price'));
		totalPrice += price;
		
		// Increment the cart count and display an alert message with the updated cart count and total price
		cartCount++;
		alert(`Item added to cart. Call 09054525949 to order
		 Cart count: ${cartCount}. Total price: #${totalPrice.toFixed(2)
		}`);
	});
});

// for more popup
var popup1 = document.getElementById("popup1");
var showPopupButton1 = document.getElementById("show-popup1");
var closeButton1 = document.getElementById("close1");

showPopupButton1.addEventListener("click", function() {
popup1.style.display = "block";
});

closeButton1.addEventListener("click", function() {
popup1.style.display = "none";
});

showPopupButton1.addEventListener("click", function() {
if (!localStorage.getItem("popupShown")) {
popup1.style.display = "block";
localStorage.setItem("popupShown", "true");
}
});

// for more popup
var popup2 = document.getElementById("popup2");
var showPopupButton2 = document.getElementById("show-popup2");
var closeButton2 = document.getElementById("close2");

showPopupButton2.addEventListener("click", function() {
popup2.style.display = "block";
});

closeButton2.addEventListener("click", function() {
popup2.style.display = "none";
});

showPopupButton2.addEventListener("click", function() {
if (!localStorage.getItem("popupShown")) {
popup2.style.display = "block";
localStorage.setItem("popupShown", "true");
}
});