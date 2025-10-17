document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (name && email && message) {
    alert(`Thanks, ${name}! Your message has been sent.`);
    e.target.reset();
  } else {
    alert("Please fill in all fields before submitting.");
  }
});

  // Apply background images dynamically from data-image attributes
document.querySelectorAll('.project-card').forEach(card => {
  const img = card.getAttribute('data-image');
  if (img) {
    card.style.backgroundImage = `url(${img})`;
  }
});

// Scroll reveal animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target); // Animate only once
    }
  });
}, {
  threshold: 0.2 // triggers when 20% of section is visible
});

// Stagger animation inside each section
document.querySelectorAll('.hidden').forEach((section, index) => {
  observer.observe(section);
  section.style.transitionDelay = `${index * 0.15}s`; // delay each slightly
});

document.querySelectorAll('.project-btn').forEach((btn, index) => {
  btn.style.transitionDelay = `${index * 0.2}s`;
});
