// ==============================
// Mega objects.js — Primitives + Parametrics + Procedural
// ==============================

const objects = []; // Track all objects for animation or management

// ------------------------------
// 1. Basic Primitives
// ------------------------------
function addCube(x=0,y=0,z=0,w=1,h=1,d=1,color=0x00ffcc){
    const g = new THREE.BoxGeometry(w,h,d);
    const m = new THREE.MeshStandardMaterial({color});
    const cube = new THREE.Mesh(g,m);
    cube.position.set(x,y,z);
    scene.add(cube);
    objects.push(cube);
    return cube;
}

function addSphere(x=0,y=0,z=0,r=1,color=0xff0000){
    const g = new THREE.SphereGeometry(r,32,32);
    const m = new THREE.MeshStandardMaterial({color});
    const s = new THREE.Mesh(g,m);
    s.position.set(x,y,z);
    scene.add(s);
    objects.push(s);
    return s;
}

function addCylinder(x=0,y=0,z=0,rTop=0.5,rBot=0.5,h=1,color=0xffff00){
    const g = new THREE.CylinderGeometry(rTop,rBot,h,32);
    const m = new THREE.MeshStandardMaterial({color});
    const c = new THREE.Mesh(g,m);
    c.position.set(x,y,z);
    scene.add(c);
    objects.push(c);
    return c;
}

function addCone(x=0,y=0,z=0,r=0.5,h=1,color=0xff00ff){
    const g = new THREE.ConeGeometry(r,h,32);
    const m = new THREE.MeshStandardMaterial({color});
    const cone = new THREE.Mesh(g,m);
    cone.position.set(x,y,z);
    scene.add(cone);
    objects.push(cone);
    return cone;
}

function addTorus(x=0,y=0,z=0,r=1,tube=0.4,color=0x00ffff){
    const g = new THREE.TorusGeometry(r,tube,16,100);
    const m = new THREE.MeshStandardMaterial({color});
    const t = new THREE.Mesh(g,m);
    t.position.set(x,y,z);
    scene.add(t);
    objects.push(t);
    return t;
}

function addTorusKnot(x=0,y=0,z=0,r=1,tube=0.3,color=0xffaa00){
    const g = new THREE.TorusKnotGeometry(r,tube,100,16);
    const m = new THREE.MeshStandardMaterial({color});
    const tk = new THREE.Mesh(g,m);
    tk.position.set(x,y,z);
    scene.add(tk);
    objects.push(tk);
    return tk;
}

function addPlane(x=0,y=0,z=0,w=2,h=2,color=0xffffff){
    const g = new THREE.PlaneGeometry(w,h);
    const m = new THREE.MeshStandardMaterial({color,side:THREE.DoubleSide});
    const p = new THREE.Mesh(g,m);
    p.position.set(x,y,z);
    scene.add(p);
    objects.push(p);
    return p;
}

function addCapsule(x=0,y=0,z=0,r=0.5,len=1,color=0xaa00ff){
    const g = new THREE.CapsuleGeometry(r,len,4,8);
    const m = new THREE.MeshStandardMaterial({color});
    const cap = new THREE.Mesh(g,m);
    cap.position.set(x,y,z);
    scene.add(cap);
    objects.push(cap);
    return cap;
}

// ------------------------------
// 2. Platonic Solids
// ------------------------------
function addDodecahedron(x=0,y=0,z=0,r=1,color=0xff8800){
    const g = new THREE.DodecahedronGeometry(r);
    const m = new THREE.MeshStandardMaterial({color});
    const d = new THREE.Mesh(g,m);
    d.position.set(x,y,z);
    scene.add(d);
    objects.push(d);
    return d;
}

function addIcosahedron(x=0,y=0,z=0,r=1,color=0x88ff00){
    const g = new THREE.IcosahedronGeometry(r);
    const m = new THREE.MeshStandardMaterial({color});
    const i = new THREE.Mesh(g,m);
    i.position.set(x,y,z);
    scene.add(i);
    objects.push(i);
    return i;
}

function addOctahedron(x=0,y=0,z=0,r=1,color=0x00ff88){
    const g = new THREE.OctahedronGeometry(r);
    const m = new THREE.MeshStandardMaterial({color});
    const o = new THREE.Mesh(g,m);
    o.position.set(x,y,z);
    scene.add(o);
    objects.push(o);
    return o;
}

// ------------------------------
// 3. Ring
// ------------------------------
function addRing(x=0,y=0,z=0,inner=0.5,outer=1,color=0xff0088){
    const g = new THREE.RingGeometry(inner,outer,32);
    const m = new THREE.MeshStandardMaterial({color,side:THREE.DoubleSide});
    const ring = new THREE.Mesh(g,m);
    ring.position.set(x,y,z);
    scene.add(ring);
    objects.push(ring);
    return ring;
}

// ------------------------------
// 4. Extruded Shapes (from 2D points)
// ------------------------------
function addExtrudeShape(pointsArray,x=0,y=0,z=0,depth=1,color=0xffff00){
    const shape = new THREE.Shape();
    shape.moveTo(pointsArray[0][0], pointsArray[0][1]);
    for(let i=1;i<pointsArray.length;i++){
        shape.lineTo(pointsArray[i][0], pointsArray[i][1]);
    }
    const g = new THREE.ExtrudeGeometry(shape,{depth:depth,bevelEnabled:false});
    const m = new THREE.MeshStandardMaterial({color});
    const mesh = new THREE.Mesh(g,m);
    mesh.position.set(x,y,z);
    scene.add(mesh);
    objects.push(mesh);
    return mesh;
}

// ------------------------------
// 5. Parametric Geometries
// ------------------------------
function addMobius(x=0,y=0,z=0,scale=1,color=0xff00aa){
    const g = new THREE.ParametricGeometry(THREE.ParametricGeometries.mobius,25,25);
    g.scale(scale,scale,scale);
    const m = new THREE.MeshStandardMaterial({color,side:THREE.DoubleSide});
    const mesh = new THREE.Mesh(g,m);
    mesh.position.set(x,y,z);
    scene.add(mesh);
    objects.push(mesh);
    return mesh;
}

function addKlein(x=0,y=0,z=0,scale=1,color=0x00aaff){
    const g = new THREE.ParametricGeometry(THREE.ParametricGeometries.klein,25,25);
    g.scale(scale,scale,scale);
    const m = new THREE.MeshStandardMaterial({color,side:THREE.DoubleSide});
    const mesh = new THREE.Mesh(g,m);
    mesh.position.set(x,y,z);
    scene.add(mesh);
    objects.push(mesh);
    return mesh;
}

// ------------------------------
// 6. Particles / Stars
// ------------------------------
function addParticles(count=1000,color=0xffffff){
    const g = new THREE.BufferGeometry();
    const positions = [];
    for(let i=0;i<count;i++){
        positions.push((Math.random()-0.5)*50);
        positions.push((Math.random()-0.5)*50);
        positions.push((Math.random()-0.5)*50);
    }
    g.setAttribute('position', new THREE.Float32BufferAttribute(positions,3));
    const m = new THREE.PointsMaterial({color,size:0.1});
    const points = new THREE.Points(g,m);
    scene.add(points);
    objects.push(points);
    return points;
}

// ------------------------------
// 7. 3D Text
// ------------------------------
function addText(x=0,y=0,z=0,message="Hello",color=0xffaa00){
    const loader = new THREE.FontLoader();
    loader.load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', function(font){
        const g = new THREE.TextGeometry(message,{font:font,size:1,height:0.2});
        const m = new THREE.MeshStandardMaterial({color});
        const mesh = new THREE.Mesh(g,m);
        mesh.position.set(x,y,z);
        scene.add(mesh);
        objects.push(mesh);
    });
}
