// Initialize Three.js scene
let scene, camera, renderer, cube, texture;

function init() {
  // Create the scene
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xf0f0f0); // Light grey background

  // Set up camera
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 5;

  // Set up the renderer
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById('hero-3d').appendChild(renderer.domElement);

  // Load an image as texture for the cube
  const textureLoader = new THREE.TextureLoader();
  texture = textureLoader.load("https://t4.ftcdn.net/jpg/07/31/77/47/240_F_731774797_23AnLkcRtGex3ihrE4uggeTtoXm3kcuV.jpg"); // Replace with your image URL

  // Create the cube with the loaded texture
  let geometry = new THREE.BoxGeometry(4,4,4);  // Cube size
  let material = new THREE.MeshBasicMaterial({ map: texture }); // Apply the texture to the cube material
  cube = new THREE.Mesh(geometry, material);

  scene.add(cube);

  // Start the animation loop
  animate();
}

function animate() {
  requestAnimationFrame(animate);

  // Rotate the cube
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  // Render the scene
  renderer.render(scene, camera);
}

window.onload = init;

  