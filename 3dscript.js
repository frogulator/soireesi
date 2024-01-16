import * as THREE from 'three';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('threejs-container').appendChild(renderer.domElement);

const ambientLight = new THREE.AmbientLight(0xffffff, 2); 
scene.add(ambientLight);
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
scene.add(directionalLight);
const directionalLight2 = new THREE.DirectionalLight(0xffffff, 4);
directionalLight.position.set(1, 1, 1);
scene.add(directionalLight2);

const loader = new GLTFLoader();
loader.load('img/rsvp.gltf', function (gltf) {
    const scale = .7;
    gltf.scene.scale.set(scale, scale, scale); 

    gltf.scene.traverse((node) => {
        if (node.isMesh) {
            node.material = new THREE.MeshStandardMaterial({
                color: 0xC0C0C0, // Silver color
                metalness: 0.9, // Adjust for more or less metallic look
                roughness: 0.3, // Lower roughness for a smoother surface
                envMapIntensity: 1.0, // Adjust for environment map intensity
            });
        }
    });
    scene.add(gltf.scene);
}, undefined, function (error) {
    console.error(error);
});

camera.position.z = 5;

const animate = function () {
    requestAnimationFrame(animate);

    scene.rotation.y += 0.002;


    renderer.render(scene, camera);
};

animate();

function updateDimensions() {
    var width = window.innerWidth;
    var height = window.innerHeight;

    document.getElementById('width').textContent = width;
    document.getElementById('height').textContent = height;
}


window.onresize = updateDimensions;


updateDimensions();


