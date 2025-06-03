function isInView(element) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  }

window.addEventListener('scroll', () => {
    const image = document.querySelector('.about-me-image img.slide-in-image');
    
    if (isInView(image)) {
      image.classList.add('visible');
    }
});
  
