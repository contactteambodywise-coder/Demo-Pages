const buttonContainer = document.getElementById("button-container");

// Button definitions
const buttons = [
  {id:'home', label:'Home', size:120, link:'index.html'},
  {id:'shop', label:'Shop', size:120, link:'shop.html'},
  {id:'downloads', label:'Downloads', size:140, link:'downloads.html'},
  {id:'affiliate', label:'Affiliate Links', size:160, link:'affiliate.html'},
  {id:'membership', label:'Membership', size:150, link:'membership.html'},
  {id:'about', label:'About Us', size:130, link:'about.html'},
  {id:'donate', label:'Donate', size:120, special:true} // split button
];

// Generate buttons
buttons.forEach(btnData => {
  const btn = document.createElement("div");
  btn.className = "cosmic-btn";
  btn.id = btnData.id;
  btn.style.width = btn.style.height = btnData.size + "px";
  
  if(btnData.special){
    btn.innerHTML = `<div class="pause-half">⏸</div><div class="donate-half">Donate</div>`;
  } else {
    btn.textContent = btnData.label;
    btn.dataset.link = btnData.link;
  }
  
  buttonContainer.appendChild(btn);
});

/* ===== PLANETS ORBITS ===== */
const buttonData = buttons
  .filter(b => !b.special)
  .map((b,i)=>({
    id: b.id,
    distance: 140 + i*40, // spacing
    speed: 0.2 - i*0.02,
    stretchX: 1 + Math.random()*0.15,
    stretchY: 0.9 + Math.random()*0.1
  }));

// Assign initial angles and data
buttonData.forEach(data => {
  const btn = document.getElementById(data.id);
  let angle = Math.random()*360;
  btn.dataset.angle = angle;
  btn.dataset.distance = data.distance;
  btn.dataset.speed = data.speed;
  btn.dataset.stretchX = data.stretchX;
  btn.dataset.stretchY = data.stretchY;
});

let paused = false;

// Animate orbit
function animateButtons(){
  buttonData.forEach(data => {
    const btn = document.getElementById(data.id);
    if(paused) return;
    let angle = parseFloat(btn.dataset.angle);
    const speed = parseFloat(btn.dataset.speed)*(0.95+Math.random()*0.1);
    angle += speed;
    if(angle>360) angle -=360;
    btn.dataset.angle = angle;
    
    const rad = angle*Math.PI/180;
    const distance = parseFloat(btn.dataset.distance);
    const stretchX = parseFloat(btn.dataset.stretchX);
    const stretchY = parseFloat(btn.dataset.stretchY);
    const x = Math.cos(rad)*distance*stretchX;
    const y = Math.sin(rad)*distance*stretchY;
    btn.style.transform = `translate(${x}px, ${y}px)`;
  });
  requestAnimationFrame(animateButtons);
}
animateButtons();

/* ===== BUTTON CLICK EVENTS ===== */
document.querySelectorAll('.cosmic-btn').forEach(btn=>{
  if(btn.id==='donate') return;
  btn.addEventListener('click', ()=> {
    window.location.href = btn.dataset.link;
  });
});

// Donate split button
const donateBtn = document.getElementById('donate');
donateBtn.querySelector('.donate-half').addEventListener('click', ()=>{
  window.open('https://www.paypal.me/JohnBender612', '_blank');
});
donateBtn.querySelector('.pause-half').addEventListener('click', ()=>{
  paused = !paused;
  if(paused){
    // freeze evenly spaced when paused
    buttonData.forEach((data,i)=>{
      const btn = document.getElementById(data.id);
      btn.dataset.angle = (360/buttonData.length)*i;
    });
  }
});