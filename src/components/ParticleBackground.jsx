import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function Particles({ count = 2000, scrollVelocity = 0 }) {
  const mesh = useRef()
  
  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const sizes = new Float32Array(count)
    const colors = new Float32Array(count * 3)
    
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10
      
      sizes[i] = Math.random() * 0.05 + 0.02
      
      const colorChoice = Math.random()
      if (colorChoice < 0.5) {
        colors[i * 3] = 0.02
        colors[i * 3 + 1] = 0.71
        colors[i * 3 + 2] = 0.83
      } else {
        colors[i * 3] = 0.23
        colors[i * 3 + 1] = 0.51
        colors[i * 3 + 2] = 0.96
      }
    }
    
    return { positions, sizes, colors }
  }, [count])

  useFrame((state) => {
    if (!mesh.current) return
    
    const positions = mesh.current.geometry.attributes.position.array
    const time = state.clock.elapsedTime
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      
      positions[i3 + 1] += Math.sin(time * 0.5 + positions[i3] * 0.5) * 0.001
      positions[i3] += Math.cos(time * 0.3 + positions[i3 + 1] * 0.5) * 0.001
      
      positions[i3 + 1] += scrollVelocity * 0.0005 * (1 + Math.sin(time + i) * 0.5)
    }
    
    mesh.current.geometry.attributes.position.needsUpdate = true
    mesh.current.rotation.y = time * 0.02
  })

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={particles.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={particles.colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

function WaveMesh() {
  const meshRef = useRef()
  
  const geometry = useMemo(() => {
    const geo = new THREE.PlaneGeometry(30, 15, 64, 32)
    return geo
  }, [])

  useFrame((state) => {
    if (!meshRef.current) return
    const time = state.clock.elapsedTime
    meshRef.current.rotation.x = Math.sin(time * 0.2) * 0.1 - 0.3
    
    const positions = meshRef.current.geometry.attributes.position.array
    for (let i = 0; i < positions.length; i += 3) {
      const x = positions[i]
      positions[i + 2] = Math.sin(x * 0.5 + time) * 0.3
    }
    meshRef.current.geometry.attributes.position.needsUpdate = true
  })

  return (
    <mesh ref={meshRef} geometry={geometry} position={[0, 0, -5]}>
      <meshBasicMaterial
        color="#06b6d4"
        transparent
        opacity={0.1}
        wireframe
      />
    </mesh>
  )
}

export default function ParticleBackground() {
  const scrollVel = useRef(0)
  
  useMemo(() => {
    let lastScroll = 0
    const update = () => {
      const currentScroll = window.scrollY
      scrollVel.current = currentScroll - lastScroll
      lastScroll = currentScroll
      requestAnimationFrame(update)
    }
    requestAnimationFrame(update)
  }, [])

  return (
    <div style={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      width: '100%', 
      height: '100%', 
      zIndex: -1,
      pointerEvents: 'none'
    }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <Particles count={2000} scrollVelocity={scrollVel.current} />
        <WaveMesh />
      </Canvas>
    </div>
  )
}
