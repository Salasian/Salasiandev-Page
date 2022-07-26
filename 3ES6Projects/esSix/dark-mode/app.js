const section = document.querySelector('.articles');
const togle = document.querySelector('.btn');
const body = document.querySelector('body');

togle.addEventListener('click', () => {
  body.classList.toggle('dark-theme');
});

const articlesHTML = articles
  .map((article) => {
    const { title, date, length, snippet } = article;
    const formatDate = moment(date).format('MMM Do, YYYY');
    return `<article class="post">
          <h2>${title}</h2>
          <div class="post-info">
            <span>${formatDate}</span>
            <span>${length} min read</span>
          </div>
          <p>${snippet}</p>
        </article>`;
  })
  .join('');

section.innerHTML = articlesHTML;
