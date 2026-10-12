import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const GRID_WIDTH = 88;
const GRID_DEPTH = 58;
const GRID_STEPS = 112;
const ANIMATION_SPEED = 0.12;

function terrainHeight(x, z, time) {
  const ridge = Math.sin(x * 0.105 + z * 0.075 + time) * 2.4;
  const contour = Math.sin(z * 0.19 - x * 0.035 - time * 0.7) * 1.1;
  const basin = Math.cos(Math.hypot(x + 7, z - 4) * 0.14 + time * 0.45) * 1.5;

  return ridge + contour + basin;
}

function createGridGeometry() {
  const lineCount = (GRID_STEPS + 1) * 2;
  const verticesPerLine = GRID_STEPS * 2;
  const positions = new Float32Array(lineCount * verticesPerLine * 3);
  const geometry = new THREE.BufferGeometry();

  const setSegment = (index, x, z) => {
    const offset = index * 3;
    positions[offset] = x;
    positions[offset + 2] = z;
  };

  for (let line = 0; line <= GRID_STEPS; line += 1) {
    const z = (line / GRID_STEPS - 0.5) * GRID_DEPTH;
    const x = (line / GRID_STEPS - 0.5) * GRID_WIDTH;
    const horizontalBase = line * verticesPerLine;
    const verticalBase = (GRID_STEPS + 1 + line) * verticesPerLine;

    for (let segment = 0; segment < GRID_STEPS; segment += 1) {
      const start = (segment / GRID_STEPS - 0.5);
      const end = ((segment + 1) / GRID_STEPS - 0.5);
      const horizontalIndex = horizontalBase + segment * 2;
      const verticalIndex = verticalBase + segment * 2;

      setSegment(horizontalIndex, start * GRID_WIDTH, z);
      setSegment(horizontalIndex + 1, end * GRID_WIDTH, z);
      setSegment(verticalIndex, x, start * GRID_DEPTH);
      setSegment(verticalIndex + 1, x, end * GRID_DEPTH);
    }
  }

  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.boundingSphere = new THREE.Sphere(
    new THREE.Vector3(0, 0, 0),
    Math.hypot(GRID_WIDTH / 2, GRID_DEPTH / 2) + 6,
  );
  return geometry;
}

export default function TopographicGrid() {
  const geometry = useMemo(() => createGridGeometry(), []);
  const positionAttributeRef = useRef(geometry.getAttribute("position"));

  useFrame(({ clock }) => {
    const time = clock.elapsedTime * ANIMATION_SPEED;
    const positionAttribute = positionAttributeRef.current;
    const positions = positionAttribute.array;

    for (let vertex = 0; vertex < positions.length / 3; vertex += 1) {
      const offset = vertex * 3;
      positions[offset + 1] = terrainHeight(
        positions[offset],
        positions[offset + 2],
        time,
      );
    }
    positionAttribute.needsUpdate = true;
    positionAttribute.needsUpdate = true;
  });

  return (
    <lineSegments geometry={geometry} rotation={[-0.93, 0, 0]}>
      <lineBasicMaterial
        color="#D4AF37"
        transparent
        opacity={0.44}
        depthWrite={false}
      />
    </lineSegments>
  );
}
