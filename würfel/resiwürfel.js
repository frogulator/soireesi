const scene = new THREE.Scene();

        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 5;

        // WebGL Renderer with transparent background
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setClearColor(0x000000, 0);
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        // CSS3D Renderer
        const cssRenderer = new THREE.CSS3DRenderer();
        cssRenderer.setSize(window.innerWidth, window.innerHeight);
        cssRenderer.domElement.style.position = 'absolute';
        cssRenderer.domElement.style.top = 0;
        document.body.appendChild(cssRenderer.domElement);

        // WebGL Cube (not visible but provides a reference for positioning CSS3D elements)
        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, transparent: true, opacity: 0 });
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        // CSS3D Object creation function
        const createCssObject = (width, height, position, rotation) => {
            const element = document.createElement('div');
            element.style.width = `${width}px`;
            element.style.height = `${height}px`;
            // Replace this with your image or content
            element.style.background = new THREE.Color(Math.random() * 0xffffff).getStyle();

            const object = new THREE.CSS3DObject(element);
            object.position.fromArray(position);
            object.rotation.fromArray(rotation);
            return object;
        };

        const cubeSideSize = 100;
        const halfSize = cubeSideSize / 2;
        const sides = [
            { position: [halfSize, 0, 0], rotation: [0, Math.PI / 2, 0] },
            { position: [-halfSize, 0, 0], rotation: [0, -Math.PI / 2, 0] },
            { position: [0, halfSize, 0], rotation: [Math.PI / 2, 0, Math.PI] },
            { position: [0, -halfSize, 0], rotation: [-Math.PI / 2, 0, Math.PI] },
            { position: [0, 0, halfSize], rotation: [0, Math.PI, 0] },
            { position: [0, 0, -halfSize], rotation: [0, 0, 0] },
        ];

        sides.forEach(side => {
            const object = createCssObject(cubeSideSize, cubeSideSize, side.position, side.rotation);
            scene.add(object);
        });

        function animate() {
            requestAnimationFrame(animate);
            renderer.render(scene, camera); // Renders WebGL elements
            cssRenderer.render(scene, camera); // Renders CSS3D elements
        }
        animate();















