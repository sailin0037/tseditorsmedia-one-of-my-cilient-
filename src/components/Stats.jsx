import { useEffect, useState, useRef } from 'react'

const stats = [
  { value: 500, suffix: '+', label: 'Projects Completed', color: '#06b6d4' },
  { value: 98, suffix: '%', label: 'Client Satisfaction', color: '#8b5cf6' },
  { value: 5, suffix: '+', label: 'Years Experience', color: '#3b82f6' },
  { value: 50, suffix: '+', label: 'Team Members', color: '#10b981' },
  { value: 24, suffix: '', label: '/7 Support', color: '#f59e0b' },
  { value: 100, suffix: '%', label: 'On-Time Delivery', color: '#ef4444' },
]

const partners = [
  { name: 'YouTube', color: '#FF0000' },
  { name: 'Instagram', color: '#E4405F' },
  { name: 'TikTok', color: '#000000' },
  { name: 'Twitter', color: '#1DA1F2' },
  { name: 'LinkedIn', color: '#0A66C2' },
  { name: 'Facebook', color: '#1877F2' },
]

function StatCard({ item, index }) {
  const [visible, setVisible] = useState(false)
  const [count, setCount] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !visible) {
          setVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [visible])

  useEffect(() => {
    if (!visible) return

    let start = 0
    const end = item.value
    const duration = 2000
    const increment = end / (duration / 16)
    
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        start += increment
        if (start >= end) {
          setCount(end)
          clearInterval(interval)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)
      
      return () => clearInterval(interval)
    }, index * 100)
    
    return () => clearTimeout(timer)
  }, [visible, index, item.value])

  return (
    <div 
      ref={ref}
      style={{
        position: 'relative',
        textAlign: 'center',
        padding: '2rem 1rem',
        borderRadius: '1.5rem',
        background: 'rgba(255, 255, 255, 0.02)',
        border: '1px solid rgba(255, 255, 255, 0.05)',
        overflow: 'hidden',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0) scale(1)' : 'translateY(50px) scale(0.8)',
        transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        transitionDelay: `${index * 0.1}s`
      }}
    >
      <div style={{
        position: 'absolute',
        inset: 0,
        background: `radial-gradient(circle at 50% 0%, ${item.color}15 0%, transparent 70%)`,
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.5s ease 0.5s'
      }} />

      <div style={{ 
        fontSize: 'clamp(2rem, 5vw, 3rem)', 
        fontWeight: 700,
        background: `linear-gradient(135deg, ${item.color}, #fff)`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        position: 'relative',
        zIndex: 1
      }}>
        {count}{item.suffix}
      </div>
      
      <div style={{ 
        color: '#64748b', 
        fontSize: '0.875rem', 
        marginTop: '0.5rem',
        position: 'relative',
        zIndex: 1
      }}>
        {item.label}
      </div>

      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: 40,
        height: 40,
        background: `linear-gradient(135deg, transparent 50%, ${item.color}20 50%)`,
        borderRadius: '0 1.5rem 0 0'
      }} />
    </div>
  )
}

function PartnerLogo({ name, color, index }) {
  const [visible, setVisible] = useState(false)
  const [hovered, setHovered] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.5 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div 
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: '1rem 2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '0.75rem',
        background: 'rgba(255, 255, 255, 0.02)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.9)',
        transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        transitionDelay: `${index * 0.1}s`,
        cursor: 'pointer',
        minWidth: 140
      }}
    >
      <span style={{
        fontSize: '1.25rem',
        fontWeight: 700,
        color: color,
        letterSpacing: '0.05em',
        textShadow: hovered ? `0 0 20px ${color}80` : 'none',
        transition: 'text-shadow 0.3s ease'
      }}>
        {name}
      </span>
    </div>
  )
}

export default function Stats() {
  const [headerVisible, setHeaderVisible] = useState(false)
  const [logosVisible, setLogosVisible] = useState(false)
  const headerRef = useRef(null)
  const logosRef = useRef(null)

  useEffect(() => {
    const headerObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setHeaderVisible(true)
      },
      { threshold: 0.3 }
    )
    const logosObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setLogosVisible(true)
      },
      { threshold: 0.3 }
    )

    if (headerRef.current) headerObserver.observe(headerRef.current)
    if (logosRef.current) logosObserver.observe(logosRef.current)

    return () => {
      headerObserver.disconnect()
      logosObserver.disconnect()
    }
  }, [])

  return (
    <section style={{ 
      position: 'relative', 
      padding: '8rem 0', 
      overflow: 'hidden',
      background: '#02040a' 
    }}>
      <div style={{ 
        position: 'absolute', 
        inset: 0, 
        background: 'linear-gradient(180deg, transparent 0%, rgba(6, 182, 212, 0.02) 50%, transparent 100%)'
      }} />
      
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '10%',
        width: 300,
        height: 300,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 70%)',
        filter: 'blur(60px)',
        animation: 'orb1 8s ease-in-out infinite'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '20%',
        right: '10%',
        width: 400,
        height: 400,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)',
        filter: 'blur(80px)',
        animation: 'orb2 10s ease-in-out infinite'
      }} />

      <div style={{ position: 'relative', zIndex: 10, maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>
        
        <div 
          ref={headerRef}
          style={{ 
            textAlign: 'center', 
            marginBottom: '5rem', 
            opacity: headerVisible ? 1 : 0, 
            transform: headerVisible ? 'translateY(0)' : 'translateY(40px)', 
            transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1)' 
          }}
        >
          <div style={{
            display: 'inline-block',
            padding: '0.6rem 1.5rem',
            borderRadius: 50,
            background: 'rgba(59, 130, 246, 0.1)',
            border: '1px solid rgba(59, 130, 246, 0.2)',
            color: '#60a5fa',
            fontSize: '0.875rem',
            fontWeight: 500,
            marginBottom: '1.5rem',
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? 'scale(1)' : 'scale(0.8)',
            transition: 'all 0.6s ease 0.2s'
          }}>
            Our Impact
          </div>
          <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 700, color: '#fff', letterSpacing: '-0.02em' }}>
            Numbers That{' '}
            <span style={{
              background: 'linear-gradient(135deg, #22d3ee, #3b82f6, #8b5cf6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Speak
            </span>
          </h2>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(2, 1fr)', 
          gap: '1rem', 
          marginBottom: '6rem' 
        }}>
          {stats.map((item, i) => (
            <StatCard key={i} item={item} index={i} />
          ))}
        </div>

        <div 
          ref={logosRef}
          style={{ 
            textAlign: 'center', 
            opacity: logosVisible ? 1 : 0, 
            transition: 'opacity 0.8s ease 0.3s' 
          }}
        >
          <p style={{ 
            color: '#64748b', 
            marginBottom: '2.5rem', 
            fontSize: '1rem',
            opacity: logosVisible ? 1 : 0,
            transition: 'opacity 0.5s ease 0.5s'
          }}>
            Trusted by leading brands worldwide
          </p>
          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            justifyContent: 'center', 
            alignItems: 'center', 
            gap: '1rem'
          }}>
            {partners.map((partner, i) => (
              <PartnerLogo key={i} name={partner.name} color={partner.color} index={i} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          div[style*="grid-template-columns: repeat(2, 1fr)"] {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (min-width: 1024px) {
          div[style*="grid-template-columns: repeat(2, 1fr)"] {
            grid-template-columns: repeat(6, 1fr) !important;
          }
        }
        @keyframes orb1 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(30px, -30px); }
        }
        @keyframes orb2 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-40px, 20px); }
        }
      `}</style>
    </section>
  )
}
