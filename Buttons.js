const buttonData=[
  {id:'home', distance:140, speed:0.2, stretchX:1.1, stretchY:0.9},
  {id:'shop', distance:180, speed:0.18, stretchX:1.1, stretchY:0.9},
  {id:'downloads', distance:220, speed:0.14, stretchX:1.08, stretchY:0.92},
  {id:'affiliate', distance:260, speed:0.12, stretchX:1.12, stretchY:0.88},
  {id:'membership', distance:300, speed:0.10, stretchX:1.05, stretchY:0.95},
  {id:'about', distance:340, speed:0.08, stretchX:1.15, stretchY:0.85}
];

// Initialize buttons with span and inner div for rotation
buttonData.forEach(data => {
  const btn = document.getElementById(data.id);
  let inner = document.createElement('div');
  inner.classList.add('planet-inner');
  let text = document.createElement('span');
  text.textContent = btn.textContent;
  inner.appendChild(text);
  btn.textContent = '';
  btn.appendChild(inner);

  // Setup data attributes for orbit
  let angle = Math.random() * 360;
  btn.dataset.angle = angle;
  btn.dataset.distance = data.distance;
  btn.dataset.speed = data.speed;
  btn.dataset.stretchX = data.stretchX;
  btn.dataset.stretchY = data.stretchY;
});

let paused = false;

// Orbit animation
function animateButtons() {
  buttonData.forEach(data => {
    const btn = document.getElementById(data.id);
    if(paused) return;

    let angle = parseFloat(btn.dataset.angle);
    const speed = parseFloat(btn.dataset.speed) * (0.95 + Math.random()*0.1);
    angle += speed;
    if(angle > 360) angle -= 360;
    btn.dataset.angle = angle;

    const rad = angle * Math.PI/180;
    const distance = parseFloat(btn.dataset.distance);
    const stretchX = parseFloat(btn.dataset.stretchX);
    const stretchY = parseFloat(btn.dataset.stretchY);
    const x = Math.cos(rad) * distance * stretchX;
    const y = Math.sin(rad) * distance * stretchY;

    btn.style.transform = `translate(${x}px, ${y}px)`;
  });
  requestAnimationFrame(animateButtons);
}
animateButtons();

// Donate + Pause
const donateBtn = document.getElementById('donate');
donateBtn.querySelector('.donate-half').addEventListener('click', () => {
  window.location.href='https://www.paypal.me/JohnBender612';
});

donateBtn.querySelector('.pause-half').addEventListener('click', () => {
  paused = !paused;
  if(paused) {
    buttonData.forEach((data, i) => {
      const btn = document.getElementById(data.id);
      btn.dataset.angle = (360/buttonData.length) * i;
    });
  }
});
