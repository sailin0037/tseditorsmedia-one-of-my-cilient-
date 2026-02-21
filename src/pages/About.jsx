import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import FounderImage from '../assets/founder.jpg'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const team = [
    { name: 'Daya', role: 'Founder & CEO', desc: 'Visionary leader with 2+ years in digital media', emoji: '👨‍💼' },
    { name: 'Team', role: '10+ Experts', desc: 'Skilled professionals in video, design, and marketing', emoji: '👥' }
  ]

  const values = [
    { icon: '💡', title: 'Innovation', desc: 'We push boundaries and challenge conventions' },
    { icon: '🎯', title: 'Results', desc: 'We measure success by your success' },
    { icon: '🤝', title: 'Partnership', desc: 'We work with you, not just for you' },
    { icon: '⭐', title: 'Excellence', desc: 'We never settle for good enough' }
  ]

  const timeline = [
    { year: '2024', title: 'Founded', desc: 'TS Editors Media was born with a vision to transform digital presence' },
    { year: '2024', title: 'First 10 Clients', desc: 'Built initial client base with exceptional service' },
    { year: '2025', title: '50+ Brands', desc: 'Expanded across Tamil Nadu with diverse industries' },
    { year: '2026', title: '100+ Projects', desc: 'Continuing to grow and innovate' }
  ]

  return (
    <div style={{ paddingTop: 80 }}>
      {/* Hero */}
      <section style={{ padding: '6rem 2rem 4rem', textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ maxWidth: 700, margin: '0 auto' }}
        >
          <p style={{ color: '#2997ff', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.2em' }}>About Us</p>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 700, marginTop: '0.5rem', marginBottom: '1.5rem' }}>
            The Story Behind <span style={{ color: '#2997ff' }}>TS Editors Media</span>
          </h1>
          <p style={{ color: '#86868b', fontSize: '1.15rem', lineHeight: 1.7 }}>
            We're not just an agency — we're your partners in digital transformation.
          </p>
        </motion.div>
      </section>

      {/* Founder Section */}
      <section style={{ padding: '4rem 2rem' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '4rem',
            alignItems: 'center'
          }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div style={{
                width: '100%',
                maxWidth: 400,
                aspectRatio: '3/4',
                borderRadius: 24,
                margin: '0 auto',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <img 
                  src={FounderImage} 
                  alt="Daya - Founder" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(135deg, rgba(41,151,255,0.2), transparent)',
                  pointerEvents: 'none'
                }} />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p style={{ color: '#2997ff', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1rem' }}>Meet Our Founder</p>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>Hi, I'm Daya</h2>
              <p style={{ color: '#5eead4', fontSize: '1.1rem', marginBottom: '1.5rem' }}>Founder & CEO</p>

              <div style={{ color: '#86868b', lineHeight: 1.9, marginBottom: '1.5rem' }}>
                <p style={{ marginBottom: '1rem' }}>
                  The proud founder of TS Editors Media, a growing Digital Freelance Marketing Agency. 
                  With over 2 successful years in the field, I've built a passionate and skilled team of 
                  10+ experienced professionals.
                </p>
                <p>
                  We're not just another marketing agency — we're brand builders. Over the years, we've 
                  proudly collaborated with 100+ diverse brands across Tamil Nadu, helping them grow their 
                  online presence, drive engagement, and achieve real business results.
                </p>
              </div>

              <blockquote style={{
                padding: '1.5rem',
                background: 'rgba(41,151,255,0.1)',
                borderLeft: '3px solid #2997ff',
                borderRadius: '0 12px 12px 0',
                fontStyle: 'italic',
                color: '#fff'
              }}>
                "Whether you're a startup or a well-established brand, we're here to bring your 
                vision to life through digital excellence. Let's grow together!"
              </blockquote>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: '4rem 2rem', background: 'rgba(10,10,10,0.8)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem', textAlign: 'center' }}>
            {[
              { number: '2+', label: 'Years' },
              { number: '100+', label: 'Projects' },
              { number: '50+', label: 'Clients' },
              { number: '10+', label: 'Team' }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div style={{
                  fontSize: 'clamp(2rem, 5vw, 3rem)',
                  fontWeight: 700,
                  background: 'linear-gradient(135deg, #2997ff, #5eead4)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>{stat.number}</div>
                <div style={{ color: '#6e6e73', fontSize: '0.85rem', textTransform: 'uppercase' }}>{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: '6rem 2rem' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', textAlign: 'center' }}>
          <p style={{ color: '#2997ff', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.2em' }}>Our Values</p>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, marginTop: '0.5rem', marginBottom: '3rem' }}>
            What Drives Us
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: 16,
                  padding: '2rem'
                }}
              >
                <span style={{ fontSize: '2.5rem', display: 'block', marginBottom: '1rem' }}>{value.icon}</span>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 600, marginBottom: '0.5rem' }}>{value.title}</h3>
                <p style={{ color: '#86868b', fontSize: '0.9rem' }}>{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ padding: '6rem 2rem', background: 'rgba(10,10,10,0.8)' }} ref={ref}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, textAlign: 'center', marginBottom: '3rem' }}>
            Our Journey
          </h2>

          <div style={{ position: 'relative' }}>
            {/* Line */}
            <div style={{
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              width: 2,
              height: '100%',
              background: 'linear-gradient(to bottom, #2997ff, #5eead4, transparent)'
            }} />

            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15 }}
                style={{
                  display: 'flex',
                  justifyContent: i % 2 === 0 ? 'flex-start' : 'flex-end',
                  paddingBottom: '3rem',
                  position: 'relative'
                }}
              >
                <div style={{
                  width: '45%',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: 16,
                  padding: '1.5rem',
                  textAlign: i % 2 === 0 ? 'right' : 'left'
                }}>
                  <div style={{
                    fontSize: '2rem',
                    fontWeight: 700,
                    color: '#2997ff',
                    marginBottom: '0.5rem'
                  }}>{item.year}</div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 600, marginBottom: '0.5rem' }}>{item.title}</h3>
                  <p style={{ color: '#86868b', fontSize: '0.9rem' }}>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '6rem 2rem', textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ maxWidth: 600, margin: '0 auto' }}
        >
          <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 700, marginBottom: '1rem' }}>
            Let's Work Together
          </h2>
          <p style={{ color: '#86868b', marginBottom: '2rem' }}>
            Ready to transform your digital presence?
          </p>
          <Link
            to="/contact"
            style={{
              background: '#2997ff',
              color: '#fff',
              padding: '1rem 2.5rem',
              borderRadius: '50px',
              fontWeight: 600,
              display: 'inline-block'
            }}
          >
            Get In Touch
          </Link>
        </motion.div>
      </section>
    </div>
  )
}
