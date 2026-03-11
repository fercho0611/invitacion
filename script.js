const weddingDate = new Date('March 14, 2026 19:00:00').getTime();

setInterval(() => {
const now = new Date().getTime();
const distance = weddingDate - now;

if (distance <= 0) return;

document.getElementById('days').textContent =
Math.floor(distance / (1000 * 60 * 60 * 24));

document.getElementById('hours').textContent =
Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

document.getElementById('minutes').textContent =
Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

document.getElementById('seconds').textContent =
Math.floor((distance % (1000 * 60)) / 1000);
}, 1000);


const music = document.getElementById('bg-music');
const musicBtn = document.getElementById('musicBtn');

let isPlaying = false;

musicBtn.addEventListener('click', () => {
  if (!isPlaying) {
    music.play();
    musicBtn.textContent = 'â¸ Pausar';
    isPlaying = true;
  } else {
    music.pause();
    musicBtn.textContent = 'â–¶ continuar canciÃ³n';
    isPlaying = false;
  }
});