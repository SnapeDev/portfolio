document.addEventListener("DOMContentLoaded", () => {
  const burgerMenu = document.getElementById("burger-menu");
  const dropdownMenu = document.getElementById("dropdown-menu");

  if (burgerMenu && dropdownMenu) {
    burgerMenu.addEventListener("click", () => {
      dropdownMenu.classList.toggle("hidden");
    });
  }
});
