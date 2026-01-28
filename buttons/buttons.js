const buttonContainer = document.getElementById("button-container");

// List of buttons with IDs, labels, sizes, and links
const buttons = [
  {id:'home', label:'Home', size:120, link:'index.html'},
  {id:'shop', label:'Shop', size:120, link:'shop.html'},
  {id:'downloads', label:'Downloads', size:140, link:'downloads.html'},
  {id:'affiliate', label:'Affiliate Links', size:160, link:'affiliate.html'},
  {id:'membership', label:'Membership', size:150, link:'membership.html'},
  {id:'about', label:'About Us', size:130, link:'about.html'},
  {id:'donate', label:'Donate', size:120, special:true} // special for split button
];

// Generate buttons dynamically
buttons.forEach(btnData => {
  const btn = document.createElement("div");
  btn.className = "cosmic-btn";
  btn.id = btnData.id;
  btn.style.width = btn.style.height = btnData.size + "px";
  
  if(btnData.special){ // Donate split button
    btn.innerHTML = `<div class="pause-half">⏸</div><div class="donate-half">Donate</div>`;
  } else {
    btn.textContent = btnData.label;
    btn.dataset.link = btnData.link;
  }
  
  buttonContainer.appendChild(btn);
});