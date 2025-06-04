function isInView(element) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
}

function checkCode() {
  const input = document.getElementById('codeInput').value.trim();
  const urlParams = new URLSearchParams(window.location.search);
  const redirect = urlParams.get('redirect');
  if (input === 'JulyIsTheBest') {
    alert("Yep! You'll be redirected in a sec :)");
    window.location.href = redirect;
  } else {
    alert("Nope. That's not it :(");
  }
}

window.addEventListener('scroll', () => {
    const image = document.querySelector('.about-me-image img.slide-in-image');
    
    if (isInView(image)) {
      image.classList.add('visible');
    }
});

document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('whyToggle');
  const answer = document.getElementById('whyAnswer');

  toggle.addEventListener('click', () => {
    answer.classList.toggle('hidden');
  });
});

// Create the cursor element
const cursor = document.createElement('div');
cursor.classList.add('cursor');
document.body.appendChild(cursor);

// Move cursor with mouse
document.addEventListener('mousemove', e => {
  cursor.style.top = e.clientY + 'px';
  cursor.style.left = e.clientX + 'px';
});

// Hover effect for links
const addHoverEvents = () => {
  const links = document.querySelectorAll('a');

  links.forEach(link => {
    link.addEventListener('mouseenter', () => {
      cursor.classList.add('hover');
    });
    link.addEventListener('mouseleave', () => {
      cursor.classList.remove('hover');
    });
  });
};

// Run after DOM loads
document.addEventListener('DOMContentLoaded', addHoverEvents);


  
