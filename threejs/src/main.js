import * as THREE from "three"
import "./style.css"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"
const canvas = document.getElementById("canvas");

//Scene creation
const scene = new THREE.Scene()
scene.background = new THREE.Color('#000')

//add camera
const camera = new THREE.PerspectiveCamera(50, window.innerWidth/window.innerHeight, 0.1, 1000);
camera.position.z = 50;

//add object
const geometry = new THREE.DodecahedronGeometry(5,0);
const material = new THREE.MeshStandardMaterial({
  color:'#f85',
});
const doDeck = new THREE.Mesh(geometry, material);
doDeck.position.set(0, 0, 0);

const tGeometry = new THREE. TorusGeometry(10, 4, 15, 100);
const tMaterial = new THREE.MeshStandardMaterial({
  color: "#00ff83",
})
const doughtNut = new THREE.Mesh(tGeometry, tMaterial);
doughtNut.position.y = 3;
doughtNut.position.z = -10;

const cgeometry = new THREE.CapsuleGeometry( 5, 12, 10, 7 );
const cmaterial = new THREE.MeshStandardMaterial( {
  color: "#00ff00"
} );
const capsule = new THREE.Mesh( cgeometry, cmaterial );
const cap2 = new THREE.Mesh( cgeometry, cmaterial );
capsule.position.x = 20;
cap2.position.x = -20;
const fGeometry = new THREE.BoxGeometry( 30,0.5,27);
const fMaterial = new THREE.MeshStandardMaterial( {
  color: "#00ffdf"
} );

const table = new THREE.Mesh(fGeometry, fMaterial);
table.position.y = -10;


scene.add(doDeck);
scene.add(doughtNut);
scene.add( capsule );
scene.add( table );
scene.add( cap2 );

//Add light
const light = new THREE.SpotLight(0xffffff, 250);
light.position.set(0, 10, 20)
scene.add(light)

let velocity = 0;
let gravity = -0.03;
let bounceFactor = 0.8;
let bounceJump = 0.5;



//Render
const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls( camera, renderer.domElement );


function animate(){
  requestAnimationFrame(animate)
  velocity += gravity;
  doDeck.position.y += velocity;

  if (doDeck.position.y <= -5) {
    doDeck.position.y = -5;
    velocity = -velocity * bounceFactor; // Reverse velocity with damping
}

  doDeck.rotation.y += -.02;
  renderer.render(scene,camera);
}
window.addEventListener('click', () => {
  velocity = bounceJump; // Apply upward force on click
});
window.addEventListener("resize", () =>{
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix ();
  renderer.setSize(window.innerWidth, window.innerHeight);
} );
animate();