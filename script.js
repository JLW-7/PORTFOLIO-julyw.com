function isInView(element) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
}

function checkCode() {
  const input = document.getElementById('codeInput').value.trim();
  const urlParams = new URLSearchParams(window.location.search);
  const redirect = urlParams.get('redirect');
  if (input === 'auh hell nah') {
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

document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("header");

  // Set initial transparency
  if (window.scrollY === 0) {
    header.classList.add("transparent");
  }

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      header.classList.remove("transparent");
      header.classList.add("compress")
    } else {
      header.classList.add("transparent");
      header.classList.remove("compress")
    }
  });
});


  
