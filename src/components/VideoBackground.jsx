import { useEffect, useRef } from 'react'

export default function VideoBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId
    let time = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    // Animated gradient background with moving particles
    const draw = () => {
      time += 0.005
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Base gradient
      const gradient = ctx.createRadialGradient(
        canvas.width * (0.5 + Math.sin(time) * 0.2),
        canvas.height * (0.3 + Math.cos(time * 0.7) * 0.1),
        0,
        canvas.width / 2,
        canvas.height / 2,
        canvas.width * 0.8
      )
      gradient.addColorStop(0, 'rgba(41, 151, 255, 0.15)')
      gradient.addColorStop(0.5, 'rgba(94, 234, 212, 0.08)')
      gradient.addColorStop(1, 'rgba(10, 10, 10, 0)')

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Animated mesh lines
      ctx.strokeStyle = 'rgba(41, 151, 255, 0.03)'
      ctx.lineWidth = 1

      for (let i = 0; i < 8; i++) {
        ctx.beginPath()
        for (let x = 0; x <= canvas.width; x += 20) {
          const y = Math.sin(x * 0.005 + time + i) * 50 + (i * 100) + 100
          if (x === 0) ctx.moveTo(x, y)
          else ctx.lineTo(x, y)
        }
        ctx.stroke()
      }

      // Floating particles
      for (let i = 0; i < 30; i++) {
        const x = (Math.sin(time * 0.5 + i * 0.5) * 0.5 + 0.5) * canvas.width
        const y = (Math.cos(time * 0.3 + i * 0.7) * 0.5 + 0.5) * canvas.height
        const size = Math.sin(time + i) * 2 + 3

        ctx.beginPath()
        ctx.arc(x, y, size, 0, Math.PI * 2)
        ctx.fillStyle = i % 2 === 0 ? 'rgba(41, 151, 255, 0.3)' : 'rgba(94, 234, 212, 0.3)'
        ctx.fill()
      }

      // Glow orbs
      const orbs = [
        { x: canvas.width * 0.2, y: canvas.height * 0.3, color: '41, 151, 255' },
        { x: canvas.width * 0.8, y: canvas.height * 0.4, color: '94, 234, 212' },
        { x: canvas.width * 0.5, y: canvas.height * 0.7, color: '167, 139, 250' }
      ]

      orbs.forEach((orb, i) => {
        const ox = orb.x + Math.sin(time + i) * 50
        const oy = orb.y + Math.cos(time * 0.7 + i) * 30
        const orbGradient = ctx.createRadialGradient(ox, oy, 0, ox, oy, 150)
        orbGradient.addColorStop(0, `rgba(${orb.color}, 0.2)`)
        orbGradient.addColorStop(0.5, `rgba(${orb.color}, 0.05)`)
        orbGradient.addColorStop(1, 'transparent')
        ctx.fillStyle = orbGradient
        ctx.fillRect(0, 0, canvas.width, canvas.height)
      })

      animationId = requestAnimationFrame(draw)
    }

    resize()
    draw()

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
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        background: '#000'
      }}
    />
  )
}
