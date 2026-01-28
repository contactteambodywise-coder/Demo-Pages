// ===== ORBITING PLANETS =====
const buttonData = [
  {id:'home', distance:140, speed:0.002, angle:0},
  {id:'shop', distance:180, speed:0.0018, angle:0},
  {id:'downloads', distance:220, speed:0.0014, angle:0},
  {id:'affiliate', distance:260, speed:0.0012, angle:0},
  {id:'membership', distance:300, speed:0.001, angle:0},
  {id:'about', distance:340, speed:0.0008, angle:0}
];

let paused = false;

function animate() {
  buttonData.forEach(btn => {
    if (!paused) btn.angle += btn.speed;
    const x = btn.distance * Math.cos(btn.angle);
    const y = btn.distance * Math.sin(btn.angle);
    const el = document.getElementById(btn.id);
    el.style.transform = `translate(${x}px, ${y}px)`;
  });
  requestAnimationFrame(animate);
}

animate();

// ===== PAUSE / RESUME =====
document.querySelector('#donate .pause-half').addEventListener('click', () => {
  paused = !paused;
  document.querySelector('#donate .pause-half').textContent = paused ? '▶' : '⏸';
});

// ===== DONATE BUTTON =====
document.querySelector('#donate .donate-half').addEventListener('click', () => {
  window.open('https://www.paypal.com/donate', '_blank');
});