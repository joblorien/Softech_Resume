const pills = document.querySelectorAll('.topic-pill');
const sections = document.querySelectorAll('.topic-section');
const strip = document.getElementById('topicStrip');
const leftArrow = document.getElementById('leftArrow');
const rightArrow = document.getElementById('rightArrow');

// Manage Arrow Visibility
function updateArrows() {
  leftArrow.classList.toggle('active', strip.scrollLeft > 20);
  rightArrow.classList.toggle(
    'active',
    strip.scrollLeft + strip.clientWidth < strip.scrollWidth - 20
  );
}

leftArrow.onclick = () => strip.scrollBy({ left: -200, behavior: 'smooth' });
rightArrow.onclick = () => strip.scrollBy({ left: 200, behavior: 'smooth' });

strip.addEventListener('scroll', updateArrows);
window.addEventListener('resize', updateArrows);
updateArrows();

// Pill Click Logic
pills.forEach(pill => {
  pill.addEventListener('click', () => {
    const targetId = pill.getAttribute('data-target');
    
    // 1. Update Active Pill
    pills.forEach(p => p.classList.remove('active'));
    pill.classList.add('active');

    // 2. Hide All Sections (Nuclear Reset)
    sections.forEach(s => {
      s.classList.remove('active');
      s.style.display = 'none'; 
      s.setAttribute('aria-hidden', 'true');
    });

    // 3. Show Target Section
    const activeSection = document.getElementById(targetId);
    if (activeSection) {
      activeSection.style.display = 'block';
      activeSection.setAttribute('aria-hidden', 'false');
      
      // Trigger animation frame
      requestAnimationFrame(() => {
        activeSection.classList.add('active');
      });
      
      // Optional: Scroll to content start on mobile
      if (window.innerWidth < 600) {
        const offset = strip.getBoundingClientRect().top + window.pageYOffset - 20;
        window.scrollTo({ top: offset, behavior: 'smooth' });
      }
    }
  });
});
