const pills = document.querySelectorAll(".topic-pill");
const sections = document.querySelectorAll(".topic-section");
const strip = document.getElementById("topicStrip");

pills.forEach(pill => {
  pill.addEventListener("click", () => {
    const target = pill.dataset.target;

    pills.forEach(p => p.classList.remove("active"));
    pill.classList.add("active");

    sections.forEach(sec => {
      sec.classList.toggle("active", sec.id === target);
    });
  });
});

/* Infinite scroll illusion */
strip.addEventListener("scroll", () => {
  if (strip.scrollLeft <= 0) {
    strip.scrollLeft = strip.scrollWidth / 2;
  } else if (
    strip.scrollLeft + strip.clientWidth >= strip.scrollWidth - 5
  ) {
    strip.scrollLeft = strip.scrollWidth / 2;
  }
});

/* Initial centering */
window.onload = () => {
  strip.scrollLeft = strip.scrollWidth / 4;
};
