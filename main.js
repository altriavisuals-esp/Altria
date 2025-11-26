// main.js - ligero y funcional
document.addEventListener('DOMContentLoaded', () => {
  // smooth scroll for anchors
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', (e)=>{
      const href = a.getAttribute('href');
      if (href.length > 1) {
        e.preventDefault();
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  });

  // IntersectionObserver fade-in
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting) {
        entry.target.classList.add('inview');
        io.unobserve(entry.target);
      }
    });
  }, {threshold: 0.12});
  document.querySelectorAll('.service-card, .tool, .pack, .gallery figure').forEach(el => io.observe(el));

  // Lightbox
  const lightbox = document.getElementById('lightbox');
  const lbImg = document.getElementById('lb-img');
  const lbClose = document.querySelector('.lb-close');

  document.querySelectorAll('.gallery img').forEach(img=>{
    img.addEventListener('click', () => {
      lbImg.src = img.src;
      lightbox.style.display = 'flex';
      lightbox.setAttribute('aria-hidden','false');
    });
  });

  lbClose.addEventListener('click', closeLB);
  lightbox.addEventListener('click', (e)=>{
    if(e.target === lightbox) closeLB();
  });

  function closeLB(){
    lightbox.style.display = 'none';
    lightbox.setAttribute('aria-hidden','true');
    lbImg.src = '';
  }

  // If video files missing, keep poster (no error)
  const hero = document.getElementById('heroVideo');
  if(hero){
    // handle autoplay policies - try to play
    hero.play().catch(()=>{ /* autoplay prevented, ok fallback to poster */ });
  }
});
