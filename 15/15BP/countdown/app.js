//Array of months
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
//Array of weekdays
const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
//Getting the components that exists in the html
const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');
//Temporary date to show functionality
let tempDate = new Date();
//The giveaway date
let futureDate = new Date(
  tempDate.getFullYear(),
  tempDate.getMonth(),
  tempDate.getDate() + 10,
  12,
  0,
  0
);
//Setted values of the future date
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const mins = futureDate.getMinutes();
const secs = futureDate.getSeconds();
const days = futureDate.getDate();
//Setted values with the arrays given
const daysName = weekdays[futureDate.getDay()];
const month = months[futureDate.getMonth()];
//Message displayed at the page
giveaway.textContent = `giveaway ends on ${daysName}, ${days} ${month} ${year} ${hours}:${mins}am`;
// future time in ms
const futureTime = futureDate.getTime();
//Function that sets the values left to complete the giveaway on the html
function getRemainingTime() {
  const today = new Date().getTime();
  //Calculate the time remaining between today and the giveaway date in miliseconds
  const t = futureTime - today;
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  const oneSecond = 1000;
  //calculate all values for the giveaway to end
  let days = Math.trunc(t / oneDay);
  let hours = Math.trunc((t % oneDay) / oneHour);
  let mins = Math.trunc(((t % oneDay) % oneHour) / oneMinute);
  let secs = Math.trunc((((t % oneDay) % oneHour) % oneMinute) / oneSecond);
  //set values array
  const values = [days, hours, mins, secs];
  //Formats the numbers that have one digit and adds them a 0 at the left
  function format(item) {
    return item < 10 ? `0${item}` : item;
  }
  //Iterates in the NodeList of html values and adds them their proper values
  items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });
  //If today passes the giveaway date send an expired message
  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">srry, this giveaway has expired</h4>`;
  }
}
//Every second the values refresh
let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();
