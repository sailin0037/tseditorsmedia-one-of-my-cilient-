import { useEffect, useState, useRef } from 'react'
import { Sparkles, Wand2, Layers, Zap } from 'lucide-react'

const sections = [
  { 
    title: 'Discover', 
    description: 'We dive deep into your vision, analyzing every detail to understand your goals.', 
    icon: Sparkles, 
    color: '#06b6d4',
    glow: 'rgba(6, 182, 212, 0.4)'
  },
  { 
    title: 'Design', 
    description: 'Our creative minds craft stunning visuals that captivate and inspire.', 
    icon: Wand2, 
    color: '#8b5cf6',
    glow: 'rgba(139, 92, 246, 0.4)'
  },
  { 
    title: 'Develop', 
    description: 'Cutting-edge technology meets artistic vision for breakthrough experiences.', 
    icon: Layers, 
    color: '#3b82f6',
    glow: 'rgba(59, 130, 246, 0.4)'
  },
  { 
    title: 'Deliver', 
    description: 'Excellence in every frame. We ensure flawless execution.', 
    icon: Zap, 
    color: '#10b981',
    glow: 'rgba(16, 185, 129, 0.4)'
  },
]

function StoryItem({ item, index }) {
  const [visible, setVisible] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
        }
      },
      { threshold: 0.4 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const handleMouseMove = (e) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    setMousePos({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height
    })
  }

  const Icon = item.icon

  return (
    <div 
      ref={ref}
      onMouseMove={handleMouseMove}
      style={{
        padding: '6rem 0',
        borderBottom: index < 3 ? '1px solid rgba(255,255,255,0.05)' : 'none',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Animated background gradient */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: visible 
          ? `radial-gradient(circle at ${mousePos.x * 100}% ${mousePos.y * 100}%, ${item.color}10 0%, transparent 50%)`
          : 'transparent',
        transition: 'background 0.3s ease',
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.8s ease'
      }} />

      {/* Floating particles */}
      {visible && (
        <>
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                width: Math.random() * 4 + 2,
                height: Math.random() * 4 + 2,
                borderRadius: '50%',
                background: item.color,
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`,
                opacity: 0,
                animation: `float${index} ${3 + Math.random() * 2}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`,
                boxShadow: `0 0 ${Math.random() * 10 + 5}px ${item.color}`
              }}
            />
          ))}
        </>
      )}

      <div style={{ 
        maxWidth: '800px', 
        margin: '0 auto', 
        padding: '0 1.5rem', 
        textAlign: 'center',
        position: 'relative',
        zIndex: 10
      }}>
        {/* Step number */}
        <div style={{
          fontSize: 'clamp(4rem, 10vw, 8rem)',
          fontWeight: 700,
          color: item.color,
          opacity: visible ? 0.08 : 0,
          transform: visible ? 'scale(1)' : 'scale(0.8)',
          transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
          position: 'absolute',
          left: '50%',
          top: '-2rem',
          transform: `translateX(-50%) scale(${visible ? 1 : 0.8})`,
          letterSpacing: '-0.05em',
          pointerEvents: 'none'
        }}>
          0{index + 1}
        </div>

        {/* Icon with rotating ring */}
        <div style={{
          position: 'relative',
          width: 80,
          height: 80,
          margin: '0 auto 2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          {/* Rotating outer ring */}
          <div style={{
            position: 'absolute',
            inset: 0,
            border: `2px solid ${item.color}30`,
            borderRadius: '50%',
            opacity: visible ? 1 : 0,
            transform: visible ? 'rotate(0deg)' : 'rotate(-180deg)',
            transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1)',
            animation: visible ? 'spin 8s linear infinite' : 'none'
          }} />
          
          {/* Inner glow circle */}
          <div style={{
            position: 'absolute',
            inset: 5,
            background: `linear-gradient(135deg, ${item.color}20, transparent)`,
            borderRadius: '50%',
            opacity: visible ? 1 : 0,
            transform: visible ? 'scale(1)' : 'scale(0.5)',
            transition: 'all 0.6s ease 0.2s'
          }} />

          {/* Icon */}
          <div style={{
            width: 50,
            height: 50,
            borderRadius: '50%',
            background: `linear-gradient(135deg, ${item.color}, ${item.color}80)`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: visible ? `0 0 40px ${item.glow}` : 'none',
            opacity: visible ? 1 : 0,
            transform: visible ? 'scale(1) rotate(0deg)' : 'scale(0.5) rotate(-180deg)',
            transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.3s'
          }}>
            <Icon size={24} color="#fff" />
          </div>
        </div>

        {/* Title */}
        <h3 style={{ 
          fontSize: 'clamp(1.75rem, 5vw, 3rem)', 
          fontWeight: 700, 
          color: item.color,
          marginBottom: '1rem',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.4s',
          textShadow: visible ? `0 0 40px ${item.glow}` : 'none'
        }}>
          {item.title}
        </h3>

        {/* Description */}
        <p style={{ 
          color: '#94a3b8', 
          fontSize: 'clamp(1rem, 2vw, 1.25rem)', 
          maxWidth: '500px', 
          margin: '0 auto',
          lineHeight: 1.8,
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.5s'
        }}>
          {item.description}
        </p>

        {/* Connecting line to next */}
        {index < 3 && visible && (
          <div style={{
            position: 'absolute',
            left: '50%',
            bottom: 0,
            transform: 'translateX(-50%)',
            width: 2,
            height: 60,
            background: `linear-gradient(to bottom, ${item.color}40, transparent)`,
            animation: 'lineGrow 0.8s ease forwards',
            animationDelay: '0.8s',
            opacity: 0
          }} />
        )}
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes float0 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.6; }
          50% { transform: translate(10px, -20px) scale(1.2); opacity: 0.3; }
        }
        @keyframes float1 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.5; }
          50% { transform: translate(-15px, -15px) scale(0.8); opacity: 0.2; }
        }
        @keyframes float2 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.4; }
          50% { transform: translate(20px, -10px) scale(1.1); opacity: 0.2; }
        }
        @keyframes float3 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.5; }
          50% { transform: translate(-10px, -25px) scale(0.9); opacity: 0.3; }
        }
        @keyframes lineGrow {
          from { opacity: 0; height: 0; }
          to { opacity: 1; height: 60px; }
        }
      `}</style>
    </div>
  )
}

export default function ScrollStory() {
  return (
    <section style={{ 
      position: 'relative', 
      padding: '2.5rem 0', 
      background: 'linear-gradient(180deg, #02040a 0%, #0f172a 30%, #02040a 100%)' 
    }}>
      {sections.map((item, i) => (
        <StoryItem key={i} item={item} index={i} />
      ))}
    </section>
  )
}
