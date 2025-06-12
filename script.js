function isInView(element) {
  const { top, bottom } = element.getBoundingClientRect();
  return top >= 0 && bottom <= window.innerHeight;
}

function checkCode() {
  const input = document.getElementById('codeInput').value.trim();
  const redirect = new URLSearchParams(window.location.search).get('redirect');

  if (input === 'auh hell nah') {
    alert("Yep! You'll be redirected in a sec :)");
    window.location.href = redirect;
  } else {
    alert("Nope. That's not it :(");
  }
}

window.addEventListener('scroll', () => {
  const image = document.querySelector('.about-me-image img.slide-in-image');
  if (image && isInView(image)) image.classList.add('visible');
});

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('whyToggle')?.addEventListener('click', () => {
    document.getElementById('whyAnswer')?.classList.toggle('hidden');
  });

  // Create cursor element
  const cursor = Object.assign(document.createElement('div'), { className: 'cursor' });
  document.body.appendChild(cursor);

  document.addEventListener('mousemove', ({ clientY, clientX }) => {
    Object.assign(cursor.style, { top: `${clientY}px`, left: `${clientX}px` });
  });

  document.querySelectorAll('a').forEach(link => {
    link.addEventListener('mouseenter', () => cursor.classList.add('hover'));
    link.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
  });

  const header = document.querySelector("header");
  if (window.scrollY === 0) header?.classList.add("transparent");

  window.addEventListener("scroll", () => {
    header?.classList.toggle("transparent", window.scrollY <= 20);
    header?.classList.toggle("compress", window.scrollY > 20);
  });
});
