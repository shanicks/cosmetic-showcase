import { useEffect, useRef, useState } from "react";
// import Spline from "@splinetool/react-spline";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";
import { animate, useMotionValue } from "framer-motion";

function Model() {
  const { scene } = useGLTF("cosmetic_product.glb");
  const ref = useRef();

  const rotationY = useMotionValue(0);

  // Animate infinitely
  animate(rotationY, Math.PI * 2, {
    duration: 10,
    repeat: Infinity,
    ease: "linear",
  });

  useFrame(() => {
    ref.current.rotation.y = rotationY.get();
  });
  return (
    <primitive
      ref={ref}
      object={scene}
      scale={2.5}
      position={[-1, 2, 0]}
      rotation={[0.1, 0, -1]}
    />
  );
}

export function ThreeD() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      className="z-0 absolute inset-0 h-full w-full bg-[url('splash2.png') content-fit]"
    >
      <ambientLight intensity={1500} />
      <directionalLight position={[2, 2, 2]} />
      <Environment preset="studio" />
      <Model />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
