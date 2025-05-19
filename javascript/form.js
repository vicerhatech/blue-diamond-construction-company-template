(function () {
  emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your EmailJS public key
})();

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const messageEl = document.getElementById("form-message");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    messageEl.style.color = "#333";
    messageEl.textContent = "Sending...";

    emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form).then(
      function () {
        messageEl.style.color = "green";
        messageEl.textContent =
          "✅ Your message has been sent successfully. We'll get back to you shortly.";
        form.reset();
      },
      function (error) {
        messageEl.style.color = "red";
        messageEl.textContent =
          "❌ There was a problem sending your message. Please try again or contact us directly.";
        console.error("EmailJS error:", error);
      }
    );
  });
});
