const buttons = [
  { id: "home", distance: 140, speed: 0.25 },
  { id: "shop", distance: 180, speed: 0.20 },
  { id: "downloads", distance: 220, speed: 0.16 },
  { id: "affiliate", distance: 260, speed: 0.14 },
  { id: "membership", distance: 300, speed: 0.12 },
  { id: "about", distance: 340, speed: 0.10 }
];

let paused = false;

// initialize angles
buttons.forEach(btn => {
  btn.angle = Math.random() * 360;
});

function animateButtons() {
  buttons.forEach(btn => {
    const el = document.getElementById(btn.id);
    if (!el) return;

    if (!paused) {
      btn.angle += btn.speed;
      if (btn.angle > 360) btn.angle -= 360;
    }

    const rad = btn.angle * Math.PI / 180;
    const x = Math.cos(rad) * btn.distance;
    const y = Math.sin(rad) * btn.distance;

    el.style.transform = `translate(${x}px, ${y}px)`;
  });

  requestAnimationFrame(animateButtons);
}

animateButtons();

/* Donate button logic */
const donate = document.getElementById("donate");
donate.querySelector(".pause-half").onclick = () => {
  paused = !paused;
};

donate.querySelector(".donate-half").onclick = () => {
  window.open("https://www.paypal.me/JohnBender612", "_blank");
};
