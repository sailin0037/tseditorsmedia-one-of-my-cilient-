import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function EnhancedBackground() {
  const canvasRef = useRef(null)
  const gridRef = useRef(null)
  const { scrollY } = useScroll()
  const [isMobile, setIsMobile] = useState(false)
  
  const y1 = useTransform(scrollY, [0, 1000], [0, 200])
  const y2 = useTransform(scrollY, [0, 1000], [0, -150])
  const opacity = useTransform(scrollY, [0, 500], [1, 0.8])

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    
    let animationId
    let particles = []
    let mouseX = 0, mouseY = 0
    let time = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createParticles = () => {
      particles = []
      const numParticles = isMobile ? 40 : Math.min(80, Math.floor(window.innerWidth / 15))
      for (let i = 0; i < numParticles; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2.5 + 0.5,
          speedX: (Math.random() - 0.5) * 0.4,
          speedY: (Math.random() - 0.5) * 0.4,
          color: Math.random() > 0.5 ? '#00d4ff' : (Math.random() > 0.5 ? '#5eead4' : '#a78bfa'),
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: Math.random() * 0.02 + 0.01
        })
      }
    }

    const draw = () => {
      time += 0.016
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      if (!isMobile) {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.03)'
        for (let i = 0; i < 3; i++) {
          const gradient = ctx.createRadialGradient(
            mouseX, mouseY, 0,
            mouseX, mouseY, 300
          )
          gradient.addColorStop(0, 'rgba(0, 212, 255, 0.08)')
          gradient.addColorStop(1, 'transparent')
          ctx.fillStyle = gradient
          ctx.fillRect(0, 0, canvas.width, canvas.height)
        }
      }

      particles.forEach((p, i) => {
        p.pulse += p.pulseSpeed
        const pulseScale = 1 + Math.sin(p.pulse) * 0.3
        
        if (!isMobile) {
          const dx = mouseX - p.x
          const dy = mouseY - p.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            const force = (120 - dist) / 120
            p.x -= dx * force * 0.02
            p.y -= dy * force * 0.02
          }
        }

        p.x += p.speedX
        p.y += p.speedY

        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        if (!isMobile) {
          particles.slice(i + 1).forEach(p2 => {
            const dx = p.x - p2.x
            const dy = p.y - p2.y
            const dist = Math.sqrt(dx * dx + dy * dy)
            
            if (dist < 120) {
              ctx.beginPath()
              ctx.moveTo(p.x, p.y)
              ctx.lineTo(p2.x, p2.y)
              const alpha = (1 - dist / 120) * 0.25
              ctx.strokeStyle = `rgba(0, 212, 255, ${alpha})`
              ctx.lineWidth = 0.5
              ctx.stroke()
            }
          })
        }

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size * pulseScale, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.globalAlpha = 0.7 + Math.sin(p.pulse) * 0.3
        ctx.fill()
        ctx.globalAlpha = 1
      })

      if (!isMobile) {
        for (let i = 0; i < 3; i++) {
          const angle = time * 0.2 + i * (Math.PI * 2 / 3)
          const radius = 200 + Math.sin(time * 0.5 + i) * 50
          const x = canvas.width / 2 + Math.cos(angle) * radius
          const y = canvas.height / 2 + Math.sin(angle) * radius
          
          const gradient = ctx.createRadialGradient(x, y, 0, x, y, 150)
          gradient.addColorStop(0, 'rgba(94, 234, 212, 0.06)')
          gradient.addColorStop(1, 'transparent')
          ctx.fillStyle = gradient
          ctx.fillRect(0, 0, canvas.width, canvas.height)
        }
      }

      animationId = requestAnimationFrame(draw)
    }

    const handleMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        mouseX = e.touches[0].clientX
        mouseY = e.touches[0].clientY
      }
    }

    resize()
    createParticles()
    draw()
    
    window.addEventListener('resize', () => { resize(); createParticles() })
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('touchmove', handleTouchMove)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', () => { resize(); createParticles() })
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('touchmove', handleTouchMove)
    }
  }, [isMobile])

  return (
    <motion.div 
      style={{ position: 'fixed', inset: 0, overflow: 'hidden', zIndex: 0, opacity }}
    >
      <motion.div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at 50% 0%, rgba(0, 212, 255, 0.18) 0%, transparent 50%), radial-gradient(ellipse at 80% 80%, rgba(94, 234, 212, 0.12) 0%, transparent 40%), radial-gradient(ellipse at 20% 90%, rgba(167, 139, 250, 0.12) 0%, transparent 40%)',
          y: y1
        }}
      />
      
      <motion.div
        ref={gridRef}
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(0, 212, 255, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 212, 255, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: isMobile ? '40px 40px' : '60px 60px',
          y: y2,
          maskImage: 'radial-gradient(ellipse at center, black 0%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 0%, transparent 70%)'
        }}
      />

      <canvas 
        ref={canvasRef} 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%'
        }}
      />

      <motion.div
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%']
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          position: 'absolute',
          inset: 0,
          background: 'repeating-linear-gradient(45deg, transparent, transparent 100px, rgba(0, 212, 255, 0.02) 100px, rgba(0, 212, 255, 0.02) 101px)',
          pointerEvents: 'none'
        }}
      />

      {[...Array(isMobile ? 3 : 5)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -100, 0],
            opacity: [0, isMobile ? 0.2 : 0.3, 0],
            x: [0, Math.sin(i) * 30, 0]
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            delay: i * 1.5,
            ease: "easeInOut"
          }}
          style={{
            position: 'absolute',
            width: isMobile ? 100 + i * 30 : 200 + i * 50,
            height: isMobile ? 100 + i * 30 : 200 + i * 50,
            borderRadius: '50%',
            border: '1px solid rgba(0, 212, 255, 0.1)',
            left: `${10 + i * 20}%`,
            top: `${60 + i * 10}%`,
            pointerEvents: 'none'
          }}
        />
      ))}

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        style={{
          position: 'absolute',
          top: isMobile ? '10%' : '20%',
          left: isMobile ? '-20%' : '10%',
          width: isMobile ? 250 : 400,
          height: isMobile ? 250 : 400,
          border: '1px solid rgba(94, 234, 212, 0.06)',
          borderRadius: '50%',
          pointerEvents: 'none'
        }}
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        style={{
          position: 'absolute',
          top: isMobile ? '30%' : '30%',
          right: isMobile ? '-30%' : '15%',
          width: isMobile ? 180 : 300,
          height: isMobile ? 180 : 300,
          border: '1px solid rgba(167, 139, 250, 0.06)',
          borderRadius: '50%',
          pointerEvents: 'none'
        }}
      />
      
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '30%',
          width: isMobile ? 150 : 250,
          height: isMobile ? 150 : 250,
          border: '1px solid rgba(0, 212, 255, 0.04)',
          borderRadius: '50%',
          pointerEvents: 'none'
        }}
      />

      {!isMobile && [...Array(3)].map((_, i) => (
        <motion.div
          key={`shooting-${i}`}
          animate={{
            x: [0, 400],
            y: [0, 100],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 5 + i * 2,
            repeat: Infinity,
            delay: i * 3,
            ease: "linear"
          }}
          style={{
            position: 'absolute',
            top: `${20 + i * 25}%`,
            left: 0,
            width: 2,
            height: 2,
            background: 'linear-gradient(90deg, #00d4ff, transparent)',
            borderRadius: '50%',
            boxShadow: '0 0 10px #00d4ff',
            pointerEvents: 'none'
          }}
        />
      ))}

      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.5) 100%)',
        pointerEvents: 'none'
      }} />
      
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(circle at 50% 50%, transparent 0%, rgba(0,0,0,0.3) 100%)',
        pointerEvents: 'none'
      }} />
    </motion.div>
  )
}
