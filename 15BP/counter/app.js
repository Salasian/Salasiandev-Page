let count = 0;

const decrease = document.querySelector('.decrease');
const increase = document.querySelector('.increase');
const reset = document.querySelector('.reset');
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

function colorNumber() {
  parseInt(value.textContent) < 0
    ? (value.style.color = 'red')
    : (value.style.color = 'hsl(209, 61%, 16%)');
}

btns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains('decrease')) {
      count--;
    } else if (styles.contains('increase')) {
      count++;
    } else {
      count = 0;
    }
    value.textContent = count;
    colorNumber();
  });
});
