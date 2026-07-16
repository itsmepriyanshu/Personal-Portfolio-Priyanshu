document.querySelectorAll('.nav a').forEach((link) => {
  link.addEventListener('click', () => document.querySelector('.nav .active')?.classList.remove('active'));
  link.addEventListener('click', () => link.classList.add('active'));
});

document.querySelectorAll('.accordion details').forEach((item) => {
  item.addEventListener('toggle', () => {
    if (!item.open) return;
    document.querySelectorAll('.accordion details').forEach((other) => {
      if (other !== item) other.removeAttribute('open');
    });
  });
});
