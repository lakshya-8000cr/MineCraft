"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Box, Environment } from "@react-three/drei"
import { Suspense, useRef } from "react"
import { useFrame } from "@react-three/fiber"
import type * as THREE from "three"

function AnimatedBlock({ position, color }: { position: [number, number, number]; color: string }) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.1
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2) * 0.1
    }
  })

  return (
    <Box ref={meshRef} position={position} args={[1, 1, 1]}>
      <meshStandardMaterial color={color} roughness={0.3} metalness={0.1} />
    </Box>
  )
}

function SceneContent() {
  return (
    <>
      <Environment preset="sunset" />
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <spotLight position={[0, 20, 0]} angle={0.3} penumbra={1} intensity={1} />

      {/* Minecraft blocks in a pattern */}
      <AnimatedBlock position={[0, 0, 0]} color="#4ade80" />
      <AnimatedBlock position={[2, 0, 0]} color="#3b82f6" />
      <AnimatedBlock position={[-2, 0, 0]} color="#ef4444" />
      <AnimatedBlock position={[0, 0, 2]} color="#f59e0b" />
      <AnimatedBlock position={[0, 0, -2]} color="#8b5cf6" />

      {/* Stack some blocks */}
      <AnimatedBlock position={[0, 1, 0]} color="#10b981" />
      <AnimatedBlock position={[0, 2, 0]} color="#06b6d4" />

      <OrbitControls enableZoom={true} autoRotate autoRotateSpeed={0.5} enablePan={false} />
    </>
  )
}

export default function SimpleMinecraftScene() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [6, 6, 6], fov: 60 }}
        style={{ background: "transparent" }}
        gl={{ antialias: true, alpha: true }}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0)
        }}
      >
        <Suspense fallback={null}>
          <SceneContent />
        </Suspense>
      </Canvas>
    </div>
  )
}
