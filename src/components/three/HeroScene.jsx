import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import { Suspense } from 'react';

function AnimatedStars() {
  return (
    <Stars 
      radius={100} 
      depth={50} 
      count={2000} 
      factor={4} 
      saturation={0} 
      fade 
      speed={1} 
    />
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 z-0 opacity-60">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <AnimatedStars />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
        </Suspense>
      </Canvas>
    </div>
  );
}