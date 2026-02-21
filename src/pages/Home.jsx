import { useEffect, useState, useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import Hero from '../components/Hero'
import FeaturesMarquee from '../components/FeaturesMarquee'
import ScrollStory from '../components/ScrollStory'
import Stats from '../components/Stats'

export default function Home() {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.3 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div style={{ background: '#02040a', minHeight: '100vh' }}>
      <Hero />
      <FeaturesMarquee />
      <ScrollStory />
      <Stats />
      
      {/* CTA Section */}
      <section 
        ref={ref}
        style={{ 
          position: 'relative', 
          padding: '10rem 0', 
          overflow: 'hidden' 
        }}
      >
        {/* Animated background orbs */}
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
          <div style={{ 
            position: 'absolute', 
            top: '50%', 
            left: '50%', 
            transform: 'translate(-50%, -50%)', 
            width: 800, 
            height: 800, 
            borderRadius: '50%', 
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.12) 0%, transparent 60%)',
            filter: 'blur(60px)',
            animation: 'ctaOrb1 6s ease-in-out infinite'
          }} />
          <div style={{ 
            position: 'absolute', 
            top: '30%', 
            right: '20%', 
            width: 400, 
            height: 400, 
            borderRadius: '50%', 
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 60%)',
            filter: 'blur(50px)',
            animation: 'ctaOrb2 8s ease-in-out infinite'
          }} />
        </div>
        
        <div style={{ position: 'relative', zIndex: 10, maxWidth: '900px', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
          <div style={{
            padding: '4rem 2rem',
            md: { padding: '5rem 3rem' },
            borderRadius: '2rem',
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            backdropFilter: 'blur(20px)',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0) scale(1)' : 'translateY(50px) scale(0.95)',
            transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1)'
          }}>
            <h2 style={{ 
              fontSize: 'clamp(2rem, 5vw, 3.5rem)', 
              fontWeight: 700, 
              color: '#fff', 
              marginBottom: '1.5rem',
              letterSpacing: '-0.02em',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.6s ease 0.2s'
            }}>
              Ready to{' '}
              <span style={{
                background: 'linear-gradient(135deg, #22d3ee, #3b82f6, #8b5cf6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Transform
              </span>
              {' '}Your Vision?
            </h2>
            <p style={{ 
              color: '#94a3b8', 
              fontSize: 'clamp(1rem, 2vw, 1.25rem)', 
              marginBottom: '3rem', 
              maxWidth: '450px', 
              margin: '0 auto 3rem', 
              lineHeight: 1.8,
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.6s ease 0.3s'
            }}>
              Let's create something extraordinary together. Start your journey today.
            </p>
            <a
              href="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                background: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
                color: '#fff',
                padding: '1.25rem 3rem',
                borderRadius: 50,
                fontWeight: 600,
                fontSize: '1.125rem',
                boxShadow: '0 4px 40px rgba(6, 182, 212, 0.4)',
                textDecoration: 'none',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.9)',
                transition: 'all 0.6s ease 0.4s, transform 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-4px) scale(1.02)'
                e.target.style.boxShadow = '0 8px 50px rgba(6, 182, 212, 0.6)'
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0) scale(1)'
                e.target.style.boxShadow = '0 4px 40px rgba(6, 182, 212, 0.4)'
              }}
            >
              Get Started Now
              <ArrowRight size={24} />
            </a>
          </div>
        </div>

        <style>{`
          @keyframes ctaOrb1 {
            0%, 100% { transform: translate(-50%, -50%) scale(1); }
            50% { transform: translate(-40%, -60%) scale(1.1); }
          }
          @keyframes ctaOrb2 {
            0%, 100% { transform: translate(0, 0); }
            50% { transform: translate(-30px, 20px); }
          }
        `}</style>
      </section>
    </div>
  )
}
