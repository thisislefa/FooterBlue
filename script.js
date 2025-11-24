// Animation on scroll
  document.addEventListener('DOMContentLoaded', function() {
    const fadeElements = document.querySelectorAll('.rb-fade-in');
    
    const fadeInObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, 100 + (Array.from(fadeElements).indexOf(entry.target) * 100));
        }
      });
    }, { threshold: 0.1 });
    
    fadeElements.forEach(element => {
      fadeInObserver.observe(element);
    });
  });