const xn = document.querySelector('.experience-nav');
const hn = document.querySelector('.home-nav');
const tn = document.querySelector('.technologies-nav');

const nav = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY < 20) {
    nav.classList.add('transparent');
    nav.classList.remove('bg-black');
  } else {
    nav.classList.remove('transparent');
    nav.classList.add('bg-black');
  }
});

xn.addEventListener('click', () => {
  window.scrollTo(0, 641);
});

hn.addEventListener('click', () => {
  window.scrollTo(0, 0);
});

tn.addEventListener('click', () => {
  window.scrollTo(0, 300);
});
