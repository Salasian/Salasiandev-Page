let cardArray = ['dark-mode', 'filters', 'numbers'];

const section = document.querySelector('.card-section');
const nav = document.querySelector('.navbar');

function displayCards() {
  section.innerHTML = cardArray
    .map((element) => {
      return `
    <div class="col-3 mx-5 p-2 card transparent text-white b0 animate__swing">
          <img src="img/${element}.JPG" class="card-img" alt="..." />
          <div class="card-img-overlay text-center hidden">
            <a
              class="btn btn-primary center"
              href="esSix/${element}/index.html"
              >Go To Color ${
                element.charAt(0).toUpperCase() +
                element.substring(1, element.length)
              }</a>
          </div>
        </div>`;
    })
    .join('');
}

displayCards();

const listOfcards = document.querySelectorAll('.card');

listOfcards.forEach((element) => {
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
