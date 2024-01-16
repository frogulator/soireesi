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
loader.load('img/sign.gltf', function (gltf) {
    const scale = 0.8;
    gltf.scene.scale.set(scale, scale, scale); 

    gltf.scene.traverse((node) => {
        if (node.isMesh) {
            node.material = new THREE.MeshStandardMaterial({
                color: 0xff006a, 
                metalness: 0.4, 
                roughness: 0.1,
                envMapIntensity: 1, 
            });
        }
    });
    scene.add(gltf.scene);
}, undefined, function (error) {
    console.error(error);
});

loader.load('img/rsvp.gltf', function (gltf) {
    const scale = 0.8;
    gltf.scene.scale.set(scale, scale, scale);

    const greenGlassMaterial = new THREE.MeshPhysicalMaterial({
        color: 0x91ff00, 
        metalness: 0.2,
        roughness: 0.1,
        transmission: 0.9, 
        opacity: 0.95,
        transparent: true,
        reflectivity: 0.9
    });

    gltf.scene.traverse((node) => {
        if (node.isMesh) {
            node.material = greenGlassMaterial;
        }
    });

    scene.add(gltf.scene);
}, undefined, function (error) {
    console.error('An error happened with the second model:', error);
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


