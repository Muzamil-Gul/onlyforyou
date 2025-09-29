// Typing effect message
const typingText = `Happy Birthday, my sweetest Shaila.
Every moment with you is a chapter I treasure — your smile, your voice, and your kind heart. Today is your day; I hope it sparkles as much as you do. ❤`;

function startTyping() {
  const el = document.getElementById('typing');
  let i = 0;
  function step() {
    if (i < typingText.length) {
      el.textContent += typingText.charAt(i++);
      setTimeout(step, 30);
    }
  }
  el.textContent = '';
  step();
}

// Gallery lightbox
function setupGallery() {
  const items = document.querySelectorAll('.gallery-item');
  const lightbox = document.getElementById('lightbox');
  const lbImg = document.getElementById('lightboxImg');
  const lbClose = document.getElementById('lightboxClose');

  items.forEach(img => img.addEventListener('click', () => {
    lbImg.src = img.src; // fixed: show clicked image
    lightbox.style.display = 'flex';
  }));
  lbClose.addEventListener('click', () => lightbox.style.display = 'none');
  lightbox.addEventListener('click', e => { if (e.target === lightbox) lightbox.style.display = 'none'; });
}

// Timeline animation
function setupTimeline() {
  const items = document.querySelectorAll('.timeline-item');
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.15 });
  items.forEach(i => io.observe(i));
}

// Particles
function spawnParticles() {
  const container = document.getElementById('particles');
  const colors = ['#ff7aa2','#b89cff','#ffd77a','#ffd1ea'];

  function make() {
    const el = document.createElement('div');
    el.className = 'particle';
    el.innerHTML = '❤';
    el.style.position = 'absolute';
    el.style.left = Math.random() * 100 + '%';
    el.style.top = '-10%';
    el.style.fontSize = (Math.random() * 14 + 12) + 'px';
    el.style.color = colors[Math.floor(Math.random() * colors.length)];
    container.appendChild(el);

    el.animate([
      { transform: 'translateY(0)', opacity: 1 },
      { transform: `translateY(${window.innerHeight + 200}px)`, opacity: 0 }
    ], { duration: Math.random() * 4000 + 4000, easing: 'ease-out' }).onfinish = () => el.remove();
  }
  setInterval(make, 500);
}

// Music controls
function musicControls() {
  const audio = document.getElementById('bgMusic');
  const btn = document.getElementById('playBtn');
  let playing = false;

  btn.addEventListener('click', () => {
    if (!playing) {
      audio.play().catch(() => {});
      btn.textContent = 'Pause Music ⏸';
    } else {
      audio.pause();
      btn.textContent = 'Play Music ▶';
    }
    playing = !playing;
  });
}

// Init
document.addEventListener('DOMContentLoaded', () => {
  startTyping();
  setupGallery();
  setupTimeline();
  spawnParticles();
  musicControls();
});
