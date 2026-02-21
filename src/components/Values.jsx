import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const values = [
  { icon: '✦', title: 'Creativity', desc: 'We push boundaries to deliver unique solutions.' },
  { icon: '✓', title: 'Consistency', desc: 'Reliable, high-quality work every time.' },
  { icon: '♥', title: 'Client Satisfaction', desc: 'Your success is our success.' }
]

export default function Values() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section style={{ padding: '6rem 2rem' }} ref={ref}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700, textAlign: 'center', marginBottom: '3rem' }}
        >
          Our Core Values
        </motion.h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
          {values.map((value, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              whileHover={{ y: -5 }}
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 16,
                padding: '2rem',
                textAlign: 'center',
                transition: 'all 0.3s'
              }}
            >
              <div style={{
                width: 50,
                height: 50,
                margin: '0 auto 1rem',
                background: 'linear-gradient(135deg, #2997ff, #5eead4)',
                borderRadius: 12,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.25rem',
                color: '#000',
                fontWeight: 'bold'
              }}>
                {value.icon}
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>{value.title}</h3>
              <p style={{ color: '#86868b', fontSize: '0.85rem' }}>{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
