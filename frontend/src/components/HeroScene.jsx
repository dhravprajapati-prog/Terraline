import { Canvas } from "@react-three/fiber";

import TopographicGrid from "./TopographicGrid.jsx";

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 21, 38], fov: 43, near: 0.1, far: 180 }}
      className="absolute inset-0"
      dpr={[1, 1.5]}
      gl={{ alpha: true, antialias: true, powerPreference: "low-power" }}
    >
      <fog attach="fog" args={["#0A130C", 45, 105]} />
      <TopographicGrid />
    </Canvas>
  );
}
