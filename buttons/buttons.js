// Canvas setup
const canvas = document.getElementById("space");
const ctx = canvas.getContext("2d");
let w, h;
function resize(){ w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight; }
window.addEventListener("resize", resize);
resize();

// Stars
const stars = Array.from({length:300}, () => ({
  x: Math.random()*w,
  y: Math.random()*h,
  r: Math.random()*2+1,
  a: Math.random()
}));

// Draw stars
function drawStars() {
  ctx.clearRect(0, 0, w, h);
  stars.forEach(s => {
    ctx.globalAlpha = s.a;
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI*2);
    ctx.fillStyle = "white";
    ctx.fill();
  });
}

// Orbiting buttons setup
const buttonData = [
  {id:'home', distance:140, speed:0.2},
  {id:'shop', distance:180, speed:0.18},
  {id:'downloads', distance:220, speed:0.14},
  {id:'affiliate', distance:260, speed:0.12},
  {id:'membership', distance:300, speed:0.1},
  {id:'about', distance:340, speed:0.08},
  {id:'donate', distance:380, speed:0.06}
];

buttonData.forEach(b => {
  const btn = document.getElementById(b.id);
  b.angle = Math.random()*360;
  btn.dataset.angle = b.angle;
  btn.dataset.distance = b.distance;
  btn.dataset.speed = b.speed;
});

// Animate buttons orbit
function animateButtons() {
  buttonData.forEach(b => {
    const btn = document.getElementById(b.id);
    b.angle += b.speed;
    if (b.angle > 360) b.angle -= 360;
    const rad = b.angle*Math.PI/180;
    const x = Math.cos(rad)*b.distance;
    const y = Math.sin(rad)*b.distance;
    btn.style.transform = `translate(${x}px, ${y}px) rotate(${b.angle*2}deg)`;
  });
  drawStars();
  requestAnimationFrame(animateButtons);
}
animateButtons();