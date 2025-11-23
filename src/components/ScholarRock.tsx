import React, { useRef, Suspense, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, useGLTF, Environment, ContactShadows, Center, Html, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ambientLight: any;
      directionalLight: any;
      spotLight: any;
      primitive: any;
    }
  }
}



const Loader = () => {
  return (
    <Html center>
      <div className="text-stone-400 text-xs font-serif animate-pulse whitespace-nowrap">
        ...
      </div>
    </Html>
  );
};

const CustomModel: React.FC<{ url: string }> = ({ url }) => {
  const { scene } = useGLTF(url);
  const meshRef = useRef<THREE.Group>(null);
  const startOffset = useRef<number | null>(null);
  
  const clonedScene = useMemo(() => scene.clone(), [scene]);

  useFrame((state) => {
    if (!meshRef.current) return;
    
    const currentTime = state.clock.getElapsedTime();
    
    if (startOffset.current === null) {
      startOffset.current = currentTime;
    }
    
    const t = currentTime - startOffset.current;
    const group = meshRef.current;

    if (t < 2) {
      if (t < 1.2) {
        const spinProgress = t / 1.2;
        group.rotation.y = -Math.PI * 6 * (1 - Math.pow(1 - spinProgress, 3)); 
      } else {
         group.rotation.y = 0;
      }
      
      if (t > 1.0 && t < 1.8) {
        const jumpDuration = 0.8;
        const jumpProgress = (t - 1.0) / jumpDuration; 
        const jumpHeight = 1.2;
        if (jumpProgress < 1) {
           group.position.y = -0.5 + Math.sin(jumpProgress * Math.PI) * jumpHeight;
           group.rotation.x = Math.sin(jumpProgress * Math.PI) * -0.3;
           group.rotation.z = Math.sin(jumpProgress * Math.PI * 2) * 0.1;
        }
      }
    } else {
      group.position.y = THREE.MathUtils.lerp(group.position.y, -0.5, 0.1);
      group.rotation.x = THREE.MathUtils.lerp(group.rotation.x, 0, 0.1);
      group.rotation.z = THREE.MathUtils.lerp(group.rotation.z, 0, 0.1);
    }
  });

  return (
    <primitive 
      ref={meshRef}
      object={clonedScene} 
      scale={0.5} 
      position={[0, -0.5, 0]} 
    />
  );
};

const ScholarRock: React.FC = () => {
  return (
    <div className="h-[400px] w-full cursor-move active:cursor-grabbing transition-all duration-500">
      <Canvas camera={{ position: [0, 1, 9], fov: 35 }} dpr={[1, 1.5]}>
        
        {/* Warmer Lighting for Chinese Aesthetic */}
        <ambientLight intensity={1.5} />
        <directionalLight position={[5, 10, 5]} intensity={2} color="#fff7ed" /> 
        {/* Warm Orange/Red Tint Light */}
        <spotLight position={[-5, 5, -5]} intensity={1.5} color="#fdba74" angle={0.5} />
        
        <Environment preset="city" />

        <Suspense fallback={<Loader />}>
          <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5} floatingRange={[-0.1, 0.1]}>
            <Center>
               <CustomModel url="/computer.glb" />
            </Center>
          </Float>
        </Suspense>
        
        <ContactShadows 
          position={[0, -2.5, 0]} 
          opacity={0.4} 
          scale={12} 
          blur={2} 
          far={4} 
          resolution={512} 
          color="#000000" 
        />

        <OrbitControls 
          makeDefault 
          enableZoom={true} 
          enablePan={false} 
          minPolarAngle={Math.PI / 4} 
          maxPolarAngle={Math.PI / 1.8} 
          autoRotate={true} 
          autoRotateSpeed={1.0} 
        />
      </Canvas>
    </div>
  );
};

export default ScholarRock;