const nav = document.querySelector('.navbar');
const cols = document.querySelectorAll('.col');

cols.forEach((element) => {
  element.addEventListener('mouseover', (e) => {
    e.currentTarget.children[1].classList.remove('hidden');
    e.currentTarget.children[1].classList.add('blackish');
  });
  element.addEventListener('mouseout', (e) => {
    e.currentTarget.children[1].classList.add('hidden');
    e.currentTarget.children[1].classList.remove('blackish');
  });
});

window.addEventListener('scroll', () => {
  if (window.scrollY < 20) {
    nav.classList.add('transparent');
    nav.classList.remove('bg-black');
  } else {
    nav.classList.remove('transparent');
    nav.classList.add('bg-black');
  }
});
