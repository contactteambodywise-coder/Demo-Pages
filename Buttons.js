let paused = false;

// Pause button toggle
document.querySelector('#donate .pause-half').addEventListener('click', () => {
  paused = !paused;
  document.querySelector('#donate .pause-half').textContent = paused ? '▶' : '⏸';
});

// Donate button click
document.querySelector('#donate .donate-half').addEventListener('click', () => {
  window.open('https://www.paypal.com/donate', '_blank');
});