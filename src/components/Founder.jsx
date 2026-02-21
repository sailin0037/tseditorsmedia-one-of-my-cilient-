import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Founder() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="founder" style={{ padding: '6rem 2rem' }} ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        style={{ maxWidth: 900, margin: '0 auto', background: '#0a0a0a', borderRadius: 32, padding: 'clamp(2rem, 5vw, 4rem)' }}
      >
        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700, textAlign: 'center', marginBottom: '3rem' }}>
          Meet Our Founder
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', alignItems: 'center' }}>
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            style={{ position: 'relative' }}
          >
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{
                width: '100%',
                maxWidth: 320,
                aspectRatio: '3/4',
                background: '#141414',
                borderRadius: 20,
                margin: '0 auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#86868b',
                fontSize: '1.25rem',
                overflow: 'hidden'
              }}>
                <img 
                  src="https://raw.githubusercontent.com/nicholaskajoh/nicholaskajoh/main/founder.jpg" 
                  alt="Daya"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.parentElement.innerHTML = 'Founder Photo'
                  }}
                />
              </div>
            </div>
            <div style={{
              position: 'absolute',
              inset: -20,
              background: 'linear-gradient(135deg, #2997ff, #5eead4, #a78bfa)',
              borderRadius: 40,
              zIndex: 0,
              opacity: 0.3,
              filter: 'blur(30px)'
            }} />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <h3 style={{ fontSize: '1.75rem', fontWeight: 700 }}>Hi, I'm Daya</h3>
            <span style={{ color: '#2997ff', fontSize: '0.95rem', display: 'block', marginBottom: '1.5rem' }}>Founder & CEO, TS Editors Media</span>

            <div style={{ color: '#86868b', lineHeight: 1.8 }}>
              <p style={{ marginBottom: '1rem' }}>
                The proud founder of TS Editors Media, a growing Digital Freelance Marketing Agency. 
                With over 2 successful years in the field, I've built a passionate team of 10+ 
                experienced professionals.
              </p>
              <p>
                We're not just another agency — we're brand builders. Over the years, we've proudly 
                collaborated with 100+ diverse brands across Tamil Nadu.
              </p>
            </div>

            {/* Quote */}
            <div style={{
              marginTop: '1.5rem',
              padding: '1.5rem',
              background: '#000',
              borderLeft: '3px solid #2997ff',
              borderRadius: '0 12px 12px 0'
            }}>
              <p style={{ fontStyle: 'italic', color: '#fff' }}>
                "Whether you're a startup or a well-established brand, we're here to bring your 
                vision to life through digital excellence. Let's grow together!"
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
