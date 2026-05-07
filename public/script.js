const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}

const cookieNotice = document.getElementById("cookieNotice");

if (cookieNotice) {
  const acceptedCookies = localStorage.getItem("acceptedCookies");

  if (acceptedCookies === "true") {
    cookieNotice.classList.add("hidden");
  }

  cookieNotice.addEventListener("click", () => {
    localStorage.setItem("acceptedCookies", "true");
    cookieNotice.classList.add("hidden");
  });
}

const contactForm = document.querySelector(".contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Thank you! Your message has been received.");
    contactForm.reset();
  });
}