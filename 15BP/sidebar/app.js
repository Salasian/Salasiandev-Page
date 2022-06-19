const links = document.querySelector('links');
const closeBtn = document.querySelector('.close-btn');
const toggleBtn = document.querySelector('.sidebar-toggle');
const sidebar = document.querySelector('.sidebar');

toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('show-sidebar');
});

closeBtn.addEventListener('click', () => {
  sidebar.classList.toggle('show-sidebar');
});
