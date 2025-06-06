// === Scroll Reveal Animation ===
const revealElements = document.querySelectorAll('section');

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;

  revealElements.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < triggerBottom) {
      section.style.opacity = '1';
      section.style.transform = 'translateY(0)';
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// === Typing Animation for Subtitle ===
const text = "Front-End Developer | React.js | JavaScript | UI/UX Enthusiast";
let index = 0;
const target = document.querySelector("header p");

function typeEffect() {
  if (index < text.length) {
    target.textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 60);
  }
}
window.addEventListener('load', () => {
  target.textContent = "";
  typeEffect();
});

// Grid project card toggle
const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach(card => {
  card.addEventListener("click", () => {
    card.classList.toggle("active");
  });
});

function showThankYou(event) {
  event.preventDefault();
  const form = event.target;
  const data = new FormData(form);

  fetch(form.action, {
    method: form.method,
    body: data,
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      form.reset();
      document.getElementById("thank-you").style.display = "block";
    }
  });
}
