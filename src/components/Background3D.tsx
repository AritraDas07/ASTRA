import { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const ParticleNetwork = () => {
  const { mouse, viewport } = useThree();
  const count = 100; // Reduced count for line performance
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  // Generate random positions
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const t = Math.random() * 100;
      const factor = 20 + Math.random() * 100;
      const speed = 0.01 + Math.random() / 200;
      const xFactor = -50 + Math.random() * 100;
      const yFactor = -50 + Math.random() * 100;
      const zFactor = -50 + Math.random() * 100;
      temp.push({ 
          t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0,
          pos: new THREE.Vector3() // Store current position for line calculation
      });
    }
    return temp;
  }, [count]);

  // Buffer for lines
  // Max possible lines = count * (count - 1) / 2
  // We'll limit max connections per frame to avoid freezing
  const lineGeometry = useMemo(() => {
      const geo = new THREE.BufferGeometry();
      const pos = new Float32Array(count * count * 3); // Overallocate
      geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
      return geo;
  }, [count]);

  useFrame(() => {
    if (!meshRef.current || !linesRef.current) return;

    // 1. Update Particles
    particles.forEach((particle, i) => {
      let { t, factor, speed, xFactor, yFactor, zFactor } = particle;
      
      t = particle.t += speed / 2;
      const a = Math.cos(t) + Math.sin(t * 1) / 10;
      const b = Math.sin(t) + Math.cos(t * 2) / 10;
      const s = Math.cos(t);

      const mouseX = (mouse.x * viewport.width) / 2;
      const mouseY = (mouse.y * viewport.height) / 2;

      particle.mx += (mouseX - particle.mx) * 0.02;
      particle.my += (mouseY - particle.my) * 0.02;

      const x = (particle.mx / 10) * a + xFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10;
      const y = (particle.my / 10) * b + yFactor + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10;
      const z = (particle.my / 10) * b + zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10;

      dummy.position.set(x, y, z);
      particle.pos.set(x, y, z); // Update stored position

      const scale = 1 + Math.sin(t) * 0.5;
      dummy.scale.set(scale, scale, scale);
      dummy.rotation.set(s * 5, s * 5, s * 5);
      dummy.updateMatrix();
      meshRef.current!.setMatrixAt(i, dummy.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;

    // 2. Update Lines
    const linePositions = (linesRef.current.geometry.attributes.position as THREE.BufferAttribute).array as Float32Array;
    let lineIndex = 0;
    const connectDistance = 15; 

    for (let i = 0; i < count; i++) {
        for (let j = i + 1; j < count; j++) {
            const dist = particles[i].pos.distanceTo(particles[j].pos);
            if (dist < connectDistance) {
                linePositions[lineIndex++] = particles[i].pos.x;
                linePositions[lineIndex++] = particles[i].pos.y;
                linePositions[lineIndex++] = particles[i].pos.z;
                
                linePositions[lineIndex++] = particles[j].pos.x;
                linePositions[lineIndex++] = particles[j].pos.y;
                linePositions[lineIndex++] = particles[j].pos.z;
            }
        }
    }
    
    // Clear remaining buffer
    // Actually we just set drawRange
    linesRef.current.geometry.setDrawRange(0, lineIndex / 3);
    linesRef.current.geometry.attributes.position.needsUpdate = true;

  });

  return (
    <>
      <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
        <dodecahedronGeometry args={[0.2, 0]} />
        <meshPhongMaterial color="#64ffda" emissive="#0a192f" />
      </instancedMesh>
      <lineSegments ref={linesRef} geometry={lineGeometry}>
          <lineBasicMaterial color="#64ffda" transparent opacity={0.15} blending={THREE.AdditiveBlending} />
      </lineSegments>
    </>
  );
};

const NetworkBackground = () => {
    return (
        <group>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} color="#64ffda" />
            <pointLight position={[-10, -10, -10]} intensity={0.5} color="#c084fc" />
            <ParticleNetwork />
        </group>
    )
}

export default NetworkBackground;
