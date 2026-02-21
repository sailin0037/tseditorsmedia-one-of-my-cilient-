import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const services = [
  { number: '01', title: 'Video Editing', desc: 'Complete video production from concept to delivery. Compelling visual stories that captivate.' },
  { number: '02', title: 'Digital Marketing', desc: 'Strategic campaigns that drive results. From SEO and SEM to paid ads.' },
  { number: '03', title: 'Logo & Branding', desc: 'Distinctive brand identities that make you memorable.' },
  { number: '04', title: 'Social Media', desc: 'Complete social media strategy and management.' },
  { number: '05', title: 'Web Development', desc: 'Modern, responsive websites built with cutting-edge tech.' },
  { number: '06', title: 'Content Creation', desc: 'Video & ad content that tells your story.' }
]

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="services" style={{ padding: '6rem 2rem' }} ref={ref}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <p style={{ color: '#2997ff', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.2em' }}>Services</p>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700, marginTop: '0.5rem' }}>What We Do</h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -8 }}
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 20,
                padding: '2rem',
                transition: 'all 0.3s',
                cursor: 'pointer'
              }}
            >
              <span style={{ color: '#2997ff', fontSize: '0.8rem', fontWeight: 600 }}>{service.number}</span>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginTop: '0.75rem', marginBottom: '0.5rem' }}>{service.title}</h3>
              <p style={{ color: '#86868b', fontSize: '0.9rem', lineHeight: 1.7 }}>{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
