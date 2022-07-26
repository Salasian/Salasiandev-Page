const items = [...document.querySelectorAll('.number')];

const updateCount = (e) => {
  const value = parseInt(e.dataset.value);
  const increment = Math.ceil(value / 1000);
  console.log(increment);
  let initialValue = 0;

  const increaseCount = setInterval(() => {
    initialValue += increment;
    if (initialValue > value) {
      e.textContent = `${value}+`;
      clearInterval(increaseCount);
      return;
    }
    e.textContent = `${initialValue}+`;
  }, 1);
};

items.forEach((e) => {
  updateCount(e);
});
