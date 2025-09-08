document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // prevent page reload

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();
  let status = document.getElementById("formStatus");

  if (name.length < 3) {
    status.textContent = "Name must be at least 3 characters long.";
    status.style.color = "red";
  } else if (!email.includes("@")) {
    status.textContent = "Enter a valid email address.";
    status.style.color = "red";
  } else if (message.length < 5) {
    status.textContent = "Message should be at least 5 characters long.";
    status.style.color = "red";
  } else {
    status.textContent = "✅ Thank you! Your message has been sent.";
    status.style.color = "green";
    document.getElementById("contactForm").reset();
  }
});
