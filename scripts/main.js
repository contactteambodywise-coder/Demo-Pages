// 1. Create the room
const scene = new THREE.Scene();

// 2. Your eyes (camera)
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// 3. TV (renderer)
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 4. Light
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(5,5,5);
scene.add(light);

// 5. Array to hold all objects
const objects = [];

// 6. Render loop
function animate() {
  requestAnimationFrame(animate);

  // Rotate everything in the scene (optional)
  objects.forEach(obj => {
    obj.rotation.x += 0.01;
    obj.rotation.y += 0.01;
  });

  renderer.render(scene, camera);
}

animate();
