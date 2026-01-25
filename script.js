const pills = document.querySelectorAll('.topic-pill');
const sections = document.querySelectorAll('.topic-section');
const strip = document.getElementById('topicStrip');
const leftArrow = document.getElementById('leftArrow');
const rightArrow = document.getElementById('rightArrow');

function updateArrows() {
  leftArrow.classList.toggle('active', strip.scrollLeft > 0);
  rightArrow.classList.toggle(
    'active',
    strip.scrollLeft + strip.clientWidth < strip.scrollWidth
  );
}

leftArrow.onclick = () => strip.scrollBy({ left: -150, behavior: 'smooth' });
rightArrow.onclick = () => strip.scrollBy({ left: 150, behavior: 'smooth' });

strip.addEventListener('scroll', updateArrows);
updateArrows();

pills.forEach(pill => {
  pill.addEventListener('click', () => {
    pills.forEach(p => p.classList.remove('active'));
    sections.forEach(s => s.classList.remove('active'));

    pill.classList.add('active');
    document.getElementById(pill.dataset.target).classList.add('active');
  });
});
