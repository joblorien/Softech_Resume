const pills = document.querySelectorAll('.topic-pill');
const sections = document.querySelectorAll('.topic-section');
const strip = document.getElementById('topicStrip');
const leftArrow = document.getElementById('leftArrow');
const rightArrow = document.getElementById('rightArrow');

function updateArrows() {
  leftArrow.classList.toggle('active', strip.scrollLeft > 10);
  rightArrow.classList.toggle(
    'active',
    strip.scrollLeft + strip.clientWidth < strip.scrollWidth - 10
  );
}

leftArrow.onclick = () => strip.scrollBy({ left: -200, behavior: 'smooth' });
rightArrow.onclick = () => strip.scrollBy({ left: 200, behavior: 'smooth' });

strip.addEventListener('scroll', updateArrows);
window.addEventListener('resize', updateArrows);
updateArrows();

pills.forEach(pill => {
  pill.addEventListener('click', () => {
    // 1. Update pills
    pills.forEach(p => p.classList.remove('active'));
    pill.classList.add('active');

    // 2. Update sections
    const targetId = pill.getAttribute('data-target');
    sections.forEach(s => {
      s.classList.remove('active');
      // Force display none to prevent mobile ghosting
      s.style.display = 'none'; 
    });

    const activeSection = document.getElementById(targetId);
    activeSection.style.display = 'block';
    // Small timeout to allow display:block to register before adding animation class
    setTimeout(() => {
        activeSection.classList.add('active');
    }, 10);
  });
});
