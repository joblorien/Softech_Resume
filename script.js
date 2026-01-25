const contentData = {
  experience: `
    <div class="card animate">
      <strong>Technical Writer – Associate II</strong><br>
      <span>Capgemini | Nov 2023 – Present</span>
      <ul>
        <li>Authored 350+ XML-based documents (DITA).</li>
        <li>Managed end-to-end documentation lifecycle.</li>
        <li>Primary peer reviewer for zero-defect delivery.</li>
      </ul>
    </div>`,
  internships: `
    <div class="card animate">
      <ul>
        <li><strong>Technical Writer – Capgemini</strong> (2023)</li>
        <li><strong>Sunali’s Classes</strong> (2021)</li>
      </ul>
    </div>`,
  education: `
    <div class="card animate">
      <strong>B.E. Aeronautical Engineering</strong><br>
      KCG College of Technology – Anna University<br>
      2019 – 2023 | Chennai
    </div>`,
  skills: `
    <div class="chip-grid animate">
      <span>DITA XML</span><span>Markdown</span><span>HTML</span><span>Git</span>
      <span>Oxygen XML</span><span>FrameMaker</span><span>Agile</span>
    </div>`,
  portfolio: `
    <div class="card animate">
      <strong>Salesforce CRM Docs</strong>
      <p>High-level documentation and SaaS user guides.</p>
    </div>`,
  courses: `
    <div class="card animate">
      <ul>
        <li>Version Control – Meta</li>
        <li>English Upper Advanced (C2) – EF SOLO</li>
      </ul>
    </div>`
};

const dynamicContent = document.getElementById('dynamicContent');
const pills = document.querySelectorAll('.topic-pill');
const strip = document.getElementById('topicStrip');

function updateContent(target) {
  dynamicContent.innerHTML = contentData[target];
  // Small delay to trigger CSS animation
  setTimeout(() => {
    const card = dynamicContent.querySelector('.animate');
    if(card) card.style.opacity = "1";
  }, 10);
}

// Set default content
updateContent('experience');

pills.forEach(pill => {
  pill.addEventListener('click', () => {
    pills.forEach(p => p.classList.remove('active'));
    pill.classList.add('active');
    updateContent(pill.dataset.target);
  });
});

// Horizontal Scroll Arrows
document.getElementById('leftArrow').onclick = () => strip.scrollBy({ left: -150, behavior: 'smooth' });
document.getElementById('rightArrow').onclick = () => strip.scrollBy({ left: 150, behavior: 'smooth' });
