// Initialize EmailJS with your public key
(function() {
  emailjs.init("cRCZbdyMRRzyoyIyz"); // Replace with your actual Public Key from EmailJS
})();

const form = document.getElementById("contact-form");  // Your form ID
const successPopup = document.getElementById("success-popup");
const popupOverlay = document.getElementById("popup-overlay");
const closePopupBtn = document.getElementById("close-popup");

// Show Popup Function
function showPopup() {
  successPopup.style.display = "block";
  popupOverlay.style.display = "block";
  setTimeout(() => {
    successPopup.classList.add("show");
  }, 10);
}

// Hide Popup Function
function hidePopup() {
  successPopup.classList.remove("show");
  setTimeout(() => {
    successPopup.style.display = "none";
    popupOverlay.style.display = "none";
  }, 300);
}

// Close popup when clicking the close button or the overlay
closePopupBtn.addEventListener("click", hidePopup);
popupOverlay.addEventListener("click", hidePopup);

// Handle form submit
form.addEventListener("submit", (event) => {
  event.preventDefault();  // Prevent the default form submission behavior

  // Disable the submit button to prevent multiple submissions
  form.querySelector("button[type='submit']").disabled = true;

  // Sending the form data to EmailJS
  emailjs.sendForm("service_ppfo81u", "template_1xcw28x", form)
    .then(function(response) {
      console.log("SUCCESS!", response.status, response.text);

      // Show the success popup after successful submission
      showPopup();
      form.reset();  // Clear the form
      form.querySelector("button[type='submit']").disabled = false;  // Enable the submit button
    }, function(error) {
      console.log("FAILED...", error);
      alert("Oops! Something went wrong. Please try again.");
      form.querySelector("button[type='submit']").disabled = false;  // Enable the submit button again
    });
});
