const toggleBtn = document.querySelector(".theme__toggle_btn");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
