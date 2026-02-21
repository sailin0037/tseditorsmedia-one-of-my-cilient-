import { useEffect, useState } from 'react'
import { Zap, Shield, Rocket, Layers, Camera, Music, PenTool, BarChart, Smartphone, Cloud, Headphones, Award } from 'lucide-react'

const features = [
  { icon: Zap, title: 'Lightning Fast', description: 'Blazing fast delivery without compromising on quality.' },
  { icon: Shield, title: 'Secure Files', description: 'Enterprise-grade security for your valuable assets.' },
  { icon: Rocket, title: 'Scalable Solutions', description: 'From startup to enterprise, we scale with you.' },
  { icon: Layers, title: 'Premium Quality', description: 'Industry-standard output that competes globally.' },
  { icon: Camera, title: '4K Rendering', description: 'Crystal clear resolution for professional broadcast.' },
  { icon: Music, title: 'Audio Engineering', description: 'Studio-grade sound design and mixing services.' },
]

const features2 = [
  { icon: PenTool, title: 'Custom Graphics', description: 'Bespoke visual assets tailored to your brand.' },
  { icon: BarChart, title: 'Analytics', description: 'Data-driven insights to optimize performance.' },
  { icon: Smartphone, title: 'Mobile-First', description: 'Optimized for every screen size and platform.' },
  { icon: Cloud, title: 'Cloud Storage', description: 'Access your projects anywhere, anytime securely.' },
  { icon: Headphones, title: '24/7 Support', description: 'Round-the-clock assistance for all your needs.' },
  { icon: Award, title: 'Award Winning', description: 'Recognized excellence in creative media.' },
]

function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div style={{
      flexShrink: 0,
      width: 280,
      padding: '2rem',
      borderRadius: '1.5rem',
      background: 'rgba(255, 255, 255, 0.03)',
      border: '1px solid rgba(255, 255, 255, 0.08)',
      backdropFilter: 'blur(10px)'
    }}>
      <div style={{
        width: 56,
        height: 56,
        borderRadius: '0.75rem',
        background: 'rgba(6, 182, 212, 0.15)',
        border: '1px solid rgba(6, 182, 212, 0.3)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '1.25rem'
      }}>
        <Icon size={28} color="#22d3ee" />
      </div>
      <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff', marginBottom: '0.5rem' }}>
        {title}
      </h3>
      <p style={{ color: '#94a3b8', fontSize: '0.875rem', lineHeight: 1.6 }}>
        {description}
      </p>
    </div>
  )
}

export default function FeaturesMarquee() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section style={{ 
      position: 'relative', 
      padding: '7rem 0', 
      overflow: 'hidden',
      background: '#02040a'
    }}>
      <div style={{ 
        position: 'absolute', 
        inset: 0, 
        background: 'linear-gradient(180deg, transparent, rgba(6, 182, 212, 0.02), transparent)' 
      }} />
      
      {/* Header */}
      <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', marginBottom: '4rem', padding: '0 1.5rem' }}>
        <span style={{
          display: 'inline-block',
          padding: '0.5rem 1.25rem',
          borderRadius: 50,
          background: 'rgba(6, 182, 212, 0.1)',
          border: '1px solid rgba(6, 182, 212, 0.2)',
          color: '#22d3ee',
          fontSize: '0.875rem',
          fontWeight: 500,
          marginBottom: '1.5rem'
        }}>
          Why Choose Us
        </span>
        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700, color: '#fff' }}>
          Features That{' '}
          <span style={{
            background: 'linear-gradient(135deg, #22d3ee, #3b82f6, #8b5cf6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Set Us Apart
          </span>
        </h2>
      </div>

      {/* Row 1 */}
      <div style={{ position: 'relative', marginBottom: '2rem' }}>
        <div style={{ 
          position: 'absolute', 
          left: 0, 
          top: 0, 
          bottom: 0, 
          width: 120, 
          background: 'linear-gradient(90deg, #02040a, transparent)', 
          zIndex: 10 
        }} />
        <div style={{ 
          position: 'absolute', 
          right: 0, 
          top: 0, 
          bottom: 0, 
          width: 120, 
          background: 'linear-gradient(-90deg, #02040a, transparent)', 
          zIndex: 10 
        }} />
        
        <div style={{ 
          display: 'flex', 
          gap: '1.5rem', 
          overflow: 'hidden',
          padding: '0.5rem 0'
        }}>
          <div style={{ 
            display: 'flex', 
            gap: '1.5rem',
            animation: 'scrollLeft 30s linear infinite'
          }}>
            {[...features, ...features].map((f, i) => (
              <FeatureCard key={i} {...f} />
            ))}
          </div>
        </div>
      </div>

      {/* Row 2 */}
      <div style={{ position: 'relative' }}>
        <div style={{ 
          position: 'absolute', 
          left: 0, 
          top: 0, 
          bottom: 0, 
          width: 120, 
          background: 'linear-gradient(90deg, #02040a, transparent)', 
          zIndex: 10 
        }} />
        <div style={{ 
          position: 'absolute', 
          right: 0, 
          top: 0, 
          bottom: 0, 
          width: 120, 
          background: 'linear-gradient(-90deg, #02040a, transparent)', 
          zIndex: 10 
        }} />
        
        <div style={{ 
          display: 'flex', 
          gap: '1.5rem', 
          overflow: 'hidden',
          padding: '0.5rem 0'
        }}>
          <div style={{ 
            display: 'flex', 
            gap: '1.5rem',
            animation: 'scrollRight 35s linear infinite'
          }}>
            {[...features2, ...features2].map((f, i) => (
              <FeatureCard key={i} {...f} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scrollRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </section>
  )
}
