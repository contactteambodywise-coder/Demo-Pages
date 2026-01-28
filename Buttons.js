// Single button data
const buttonData = [
  {id:'home', distance:140, speed:0.002, angle:0}
];

let paused = false;

// Orbit animation
function animate() {
  buttonData.forEach(btn => {
    if(!paused) btn.angle += btn.speed;
    const x = btn.distance * Math.cos(btn.angle);
    const y = btn.distance * Math.sin(btn.angle);
    document.getElementById(btn.id).style.transform = `translate(${x}px, ${y}px)`;
  });
  requestAnimationFrame(animate);
}

animate();

// Pause button toggle
document.querySelector('#donate .pause-half').addEventListener('click', () => {
  paused = !paused;
  document.querySelector('#donate .pause-half').textContent = paused ? '▶' : '⏸';
});

// Donate click
document.querySelector('#donate .donate-half').addEventListener('click', () => {
  window.open('https://www.paypal.com/donate', '_blank');
});