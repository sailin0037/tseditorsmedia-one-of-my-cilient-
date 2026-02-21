import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" style={{ padding: '6rem 2rem', maxWidth: 700, margin: '0 auto', textAlign: 'center' }} ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <p style={{ color: '#2997ff', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.2em' }}>
          About Us
        </p>
        
        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700, marginTop: '1rem', marginBottom: '2rem' }}>
          Empowering Ideas Into Impactful Digital Stories
        </h2>
        
        <p style={{ color: '#86868b', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '1rem' }}>
          TS Editors Media (TSEM) is a professional digital media company specializing in video editing, digital marketing, and content creation. We focus on helping brands, businesses, and creators enhance their online presence with creative visuals and strategic promotions.
        </p>
        
        <p style={{ color: '#86868b', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '2rem' }}>
          Our team delivers high-quality video projects with precision and innovation. We believe in creativity, consistency, and client satisfaction as our core values.
        </p>

        {/* Mission Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          style={{
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 20,
            padding: '2rem',
            textAlign: 'left'
          }}
        >
          <h3 style={{ color: '#2997ff', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.5rem' }}>
            Our Mission
          </h3>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              'Deliver high-quality marketing solutions at affordable prices',
              'Ensure 100% client satisfaction with transparent, timely service',
              'Help brands transform digitally and stand out in the market'
            ].map((item, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#86868b' }}>
                <span style={{ color: '#2997ff', fontWeight: 600 }}>✓</span>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </section>
  )
}
