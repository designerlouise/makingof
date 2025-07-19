// PAUSA O CARROSSEL AO PASSAR O MOUSE
const track = document.querySelector('.carousel-track');

track.addEventListener('mouseover', () => {
  track.style.animationPlayState = 'paused';
});

track.addEventListener('mouseout', () => {
  track.style.animationPlayState = 'running';
});

// EXPANDE/RETRAI FAQ
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
  const question = item.querySelector(".faq-question");
  question.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});
