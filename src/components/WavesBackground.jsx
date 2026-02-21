import { useEffect, useRef } from 'react'

export default function WavesBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    
    let animationId
    let offset = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight * 0.5
    }

    const drawWave = (y, amplitude, frequency, speed, color, alpha) => {
      ctx.beginPath()
      ctx.moveTo(0, canvas.height)

      for (let x = 0; x <= canvas.width; x += 5) {
        const waveY = y + Math.sin(x * frequency + offset * speed) * amplitude
        ctx.lineTo(x, waveY)
      }

      ctx.lineTo(canvas.width, canvas.height)
      ctx.closePath()
      ctx.fillStyle = color
      ctx.globalAlpha = alpha
      ctx.fill()
      ctx.globalAlpha = 1
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      drawWave(canvas.height * 0.4, 25, 0.003, 1, '#2997ff', 0.05)
      drawWave(canvas.height * 0.45, 20, 0.004, 1.2, '#5eead4', 0.04)
      drawWave(canvas.height * 0.5, 30, 0.002, 0.8, '#a78bfa', 0.03)

      offset += 0.012
      animationId = requestAnimationFrame(animate)
    }

    resize()
    animate()

    window.addEventListener('resize', resize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas 
      ref={canvasRef} 
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '50vh',
        pointerEvents: 'none',
        zIndex: 0
      }}
    />
  )
}
