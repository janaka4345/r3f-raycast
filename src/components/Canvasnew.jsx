import { Canvas } from "@react-three/fiber";
import Experience from "./Experience.jsx";

export default function Canvasnew() {
  return (
    <Canvas
      camera={{
        fov: 40,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Experience />
    </Canvas>
  );
}
