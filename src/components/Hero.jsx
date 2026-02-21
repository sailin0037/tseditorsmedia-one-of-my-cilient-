import { useEffect, useState, useRef } from 'react'
import { ArrowRight, Play, Sparkles, Video, Wand2, Megaphone } from 'lucide-react'

function ParticleField({ isMobile }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let animationId
    let particles = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createParticles = () => {
      particles = []
      const count = isMobile ? 30 : 80
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          opacity: Math.random() * 0.5 + 0.2
        })
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      particles.forEach(p => {
        p.x += p.speedX
        p.y += p.speedY

        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(6, 182, 212, ${p.opacity})`
        ctx.fill()
      })

      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach(p2 => {
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < 150) {
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(6, 182, 212, ${0.1 * (1 - dist / 150)})`
            ctx.stroke()
          }
        })
      })

      animationId = requestAnimationFrame(animate)
    }

    resize()
    createParticles()
    animate()

    window.addEventListener('resize', () => {
      resize()
      createParticles()
    })

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [isMobile])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%'
      }}
    />
  )
}

function MagneticButton({ children, variant = 'primary', icon: Icon }) {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left - rect.width / 2) / 10
    const y = (e.clientY - rect.top - rect.height / 2) / 10
    setPosition({ x, y })
  }

  const handleMouseLeave = () => setPosition({ x: 0, y: 0 })

  const isPrimary = variant === 'primary'

  return (
    <a
      href="/contact"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem',
        padding: isPrimary ? '1rem 2rem' : '1rem 2rem',
        borderRadius: 50,
        fontWeight: 600,
        fontSize: '1rem',
        textDecoration: 'none',
        background: isPrimary 
          ? 'linear-gradient(135deg, #06b6d4, #0891b2)' 
          : 'rgba(255, 255, 255, 0.05)',
        color: '#fff',
        border: isPrimary ? 'none' : '1px solid rgba(255, 255, 255, 0.15)',
        boxShadow: isPrimary ? '0 4px 30px rgba(6, 182, 212, 0.4)' : 'none',
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: 'transform 0.2s ease, box-shadow 0.3s ease',
        cursor: 'pointer'
      }}
    >
      {children}
    </a>
  )
}

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section 
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: 'linear-gradient(180deg, #02040a 0%, #0f172a 100%)'
      }}
    >
      <ParticleField isMobile={false} />
      
      {/* Grid Pattern */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          backgroundImage: `
            linear-gradient(rgba(6, 182, 212, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
      
      <div style={{ 
        position: 'relative', 
        zIndex: 10, 
        maxWidth: '900px', 
        margin: '0 auto', 
        padding: '0 1.5rem',
        textAlign: 'center'
      }}>
        {/* Badge */}
        <div style={{ marginBottom: '2.5rem', opacity: mounted ? 1 : 0, transform: mounted ? 'translateY(0)' : 'translateY(20px)', transition: 'all 0.6s ease' }}>
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.75rem',
            padding: '0.75rem 1.5rem',
            borderRadius: 50,
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(6, 182, 212, 0.3)'
          }}>
            <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#22d3ee', animation: 'pulse 2s infinite' }} />
            <span style={{ color: '#67e8f9', fontSize: '0.875rem', fontWeight: 500 }}>Premium Video Editing Agency</span>
          </span>
        </div>

        {/* Headline */}
        <h1 style={{ fontSize: 'clamp(2rem, 7vw, 4rem)', fontWeight: 700, lineHeight: 1.1, marginBottom: '2rem' }}>
          <div style={{ color: '#fff', marginBottom: '0.5rem', opacity: mounted ? 1 : 0, transform: mounted ? 'translateY(0)' : 'translateY(40px)', transition: 'all 0.8s ease 0.1s' }}>
            Your Vision.
          </div>
          <div style={{
            background: 'linear-gradient(135deg, #22d3ee, #3b82f6, #8b5cf6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(40px)',
            transition: 'all 0.8s ease 0.3s'
          }}>
            Our Editing Magic.
          </div>
        </h1>

        {/* Services tags */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '0.75rem',
          marginBottom: '2rem',
          opacity: mounted ? 1 : 0,
          transform: mounted ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.6s ease 0.4s'
        }}>
          {[
            { icon: Video, text: 'Video Editing' },
            { icon: Wand2, text: 'Motion Graphics' },
            { icon: Megaphone, text: 'Digital Marketing' }
          ].map((service, i) => (
            <span key={i} style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem 1rem',
              borderRadius: 50,
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: '#94a3b8',
              fontSize: '0.875rem'
            }}>
              <service.icon size={14} color="#22d3ee" />
              {service.text}
            </span>
          ))}
        </div>

        {/* Subtitle */}
        <p style={{ 
          fontSize: 'clamp(1rem, 2vw, 1.25rem)', 
          color: '#94a3b8', 
          maxWidth: '600px', 
          margin: '0 auto 2.5rem',
          lineHeight: 1.7,
          opacity: mounted ? 1 : 0,
          transform: mounted ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.8s ease 0.5s'
        }}>
          From raw footage to cinematic masterpieces. We transform your content into compelling stories that captivate audiences and grow your brand.
        </p>

        {/* Buttons */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem',
          opacity: mounted ? 1 : 0,
          transform: mounted ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.8s ease 0.7s'
        }}>
          <MagneticButton icon={Sparkles}>
            Start Your Project
            <ArrowRight size={20} />
          </MagneticButton>
          
          <MagneticButton variant="secondary" icon={Play}>
            Watch Showreel
          </MagneticButton>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute',
        bottom: '2.5rem',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.75rem',
        opacity: mounted ? 1 : 0,
        transition: 'opacity 0.8s ease 1.5s'
      }}>
        <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#64748b' }}>Scroll</span>
        <div style={{ width: 24, height: 40, borderRadius: 12, border: '2px solid #475569', display: 'flex', justifyContent: 'center', paddingTop: 8 }}>
          <div style={{ width: 4, height: 8, background: '#22d3ee', borderRadius: 2, animation: 'bounce 1.5s infinite' }} />
        </div>
      </div>

      <div style={{ 
        position: 'absolute', 
        bottom: 0, 
        left: 0, 
        right: 0, 
        height: 120, 
        background: 'linear-gradient(to top, #02040a, transparent)' 
      }} />

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(6px); }
        }
        @media (min-width: 640px) {
          div[style*="flex-direction: column"] {
            flex-direction: row !important;
          }
        }
      `}</style>
    </section>
  )
}
