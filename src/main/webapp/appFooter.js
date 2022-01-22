const footer = document.querySelector("footer");
console.log("footer");
window.addEventListener("scroll", () => {
  footer.style.transition = "0.2s ease";
  console.log("test");
  if (window.scrollY > 120) {
    footer.style.bottom = "-150px";
  } else {
    footer.style.bottom = "0";
  }
});