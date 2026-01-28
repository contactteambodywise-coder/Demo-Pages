const buttonData = [
  {id:'home', distance:140, speed:0.2, angle:0},
  {id:'shop', distance:180, speed:0.18, angle:0},
  {id:'downloads', distance:220, speed:0.14, angle:0},
  {id:'affiliate', distance:260, speed:0.12, angle:0},
  {id:'membership', distance:300, speed:0.10, angle:0},
  {id:'about', distance:340, speed:0.08, angle:0}
];

let paused = false;

function animate() {
  buttonData.forEach(btn => {
    if(!paused) btn.angle += btn.speed;
    const x = btn.distance * Math.cos(btn.angle);
    const y = btn.distance * Math.sin(btn.angle);
    const el = document.getElementById(btn.id);
    el.style.transform = `translate(${x}px, ${y}px)`;
  });
  requestAnimationFrame(animate);
}

animate();

/* ===== Pause / Resume ===== */
document.querySelector('#donate .pause').addEventListener('click', () => {
  paused = !paused;
  document.querySelector('#donate .pause').textContent = paused ? '▶' : '⏸';
});

/* ===== Donate button click ===== */
document.querySelector('#donate .donate').addEventListener('click', () => {
  window.open('https://www.paypal.com/donate', '_blank');
});