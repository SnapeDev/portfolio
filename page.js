const links = document.querySelectorAll("nav a");

// Highlight the active link based on the current page URL
links.forEach((link) => {
  if (window.location.pathname === link.getAttribute("href")) {
    link.classList.add("text-blue-700");
  }
});
