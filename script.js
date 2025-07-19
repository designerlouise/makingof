const track = document.querySelector('.carousel-track');

track.addEventListener('mouseover', () => {
  track.style.animationPlayState = 'paused';
});

track.addEventListener('mouseout', () => {
  track.style.animationPlayState = 'running';
});
