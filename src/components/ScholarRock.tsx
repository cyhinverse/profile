import React, { useRef, Suspense, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, useGLTF, Environment, ContactShadows, Center, Html, OrbitControls } from '@react-three/drei';
import { Group } from 'three';
import { useInView } from 'framer-motion';

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
  const meshRef = useRef<Group>(null);
  
  const clonedScene = useMemo(() => {
    const cloned = scene.clone();
    // Enable shadows for all meshes in the model
    cloned.traverse((child) => {
      if ((child as any).isMesh) {
        (child as any).castShadow = true;
        (child as any).receiveShadow = true;
      }
    });
    return cloned;
  }, [scene]);

  return (
    <primitive 
      ref={meshRef}
      object={clonedScene} 
      scale={0.8} 
      position={[0, -1, 0]} 
      rotation={[0, -Math.PI / 4, 0]} // Rotate model to face the camera nicely
    />
  );
};

const ScholarRock: React.FC = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { margin: "100px" });

  return (
    <div ref={containerRef} className="h-[500px] w-full cursor-move active:cursor-grabbing transition-all duration-500">
      <Canvas 
        shadows 
        camera={{ position: [10, 10, 10], fov: 25 }} 
        dpr={[1, 1.5]}
        gl={{ antialias: true, stencil: false, depth: true }}
        frameloop={isInView ? "always" : "never"}
        performance={{ min: 0.5 }}
      >
        
        {/* Lighting Setup for Clarity and Realism */}
        <ambientLight intensity={0.7} />
        <directionalLight 
          position={[10, 10, 5]} 
          intensity={2} 
          color="#fff7ed" 
          castShadow 
          shadow-mapSize={[512, 512]}
        />
        <spotLight 
          position={[-5, 10, -5]} 
          intensity={2} 
          color="#ffffff" 
          angle={0.5} 
          penumbra={1} 
          castShadow 
        />
        
        <Environment preset="studio" />

        <Suspense fallback={<Loader />}>
          <Float speed={1} rotationIntensity={0.05} floatIntensity={0.1} floatingRange={[-0.02, 0.02]}>
            <Center>
               <CustomModel url="/computer.glb" />
            </Center>
          </Float>
        </Suspense>
        
        <ContactShadows 
          position={[0, -2, 0]} 
          opacity={0.4} 
          scale={10} 
          blur={2.5} 
          far={4} 
          resolution={256} 
          color="#000000" 
          frames={1}
        />

        <OrbitControls 
          makeDefault 
          enableZoom={true} 
          enablePan={false} 
          minPolarAngle={0} 
          maxPolarAngle={Math.PI / 2} 
          autoRotate={true}
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};

export default ScholarRock;

useGLTF.preload('/computer.glb');