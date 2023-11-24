import { useFrame } from "@react-three/fiber";
import { OrbitControls, meshBounds } from "@react-three/drei";
import { useRef } from "react";
import { Color } from "three";

export default function Experience() {
  const cube = useRef();

  useFrame((state, delta) => {
    cube.current.rotation.y += delta * 0.2;
  });
  const handleClick = (e) => {
    // console.log("clicked", cube);
    console.log(e);
    cube.current.material.color.set(
      Math.random(),
      Math.random(),
      Math.random(),
    );
  };
  return (
    <>
      <OrbitControls makeDefault />

      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />

      <mesh
        position-x={-2}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <sphereGeometry />
        <meshStandardMaterial color="orange" />
      </mesh>

      <mesh
        raycast={meshBounds}
        ref={cube}
        position-x={2}
        scale={1.5}
        onClick={handleClick}
      >
        <boxGeometry />
        <meshStandardMaterial color="mediumpurple" />
      </mesh>

      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh>
    </>
  );
}
