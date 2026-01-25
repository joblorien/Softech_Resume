const blur = document.getElementById('cursor-blur');

document.addEventListener('mousemove', (e) => {
    // Moves a glowing blue light behind the glass container
    blur.style.transform = `translate(${e.clientX - 150}px, ${e.clientY - 150}px)`;
});

// Add a typing effect for your profile summary
const profileText = "Detail-oriented Technical Writer with 2+ years of experience..."; [span_9](start_span)//[span_9](end_span)

