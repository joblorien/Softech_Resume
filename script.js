document.querySelectorAll(".accordion-btn").forEach(button => {
  button.addEventListener("click", () => {
    const accordion = button.parentElement;

    document.querySelectorAll(".accordion").forEach(item => {
      if (item !== accordion) {
        item.classList.remove("open");
      }
    });

    accordion.classList.toggle("open");
  });
});
