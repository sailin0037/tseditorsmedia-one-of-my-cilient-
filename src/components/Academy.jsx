import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Academy() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="academy" style={{ padding: '6rem 2rem', background: '#0a0a0a', textAlign: 'center' }} ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        style={{ maxWidth: 600, margin: '0 auto' }}
      >
        <p style={{ color: '#2997ff', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.2em' }}>TSEM Academy</p>
        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700, marginTop: '0.5rem', marginBottom: '1rem' }}>
          Training & Career-Building
        </h2>
        <p style={{ color: '#86868b', fontSize: '1.1rem', lineHeight: 1.7 }}>
          TSEM also offers training and career-building opportunities through its academy programs. 
          We're committed to nurturing the next generation of digital media professionals.
        </p>
      </motion.div>
    </section>
  )
}
