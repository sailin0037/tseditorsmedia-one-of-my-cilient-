import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function CTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contact" style={{ padding: '8rem 2rem', textAlign: 'center', position: 'relative' }} ref={ref}>
      {/* Background Glow */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        height: 400,
        background: 'radial-gradient(circle, rgba(41,151,255,0.15), transparent 70%)',
        zIndex: -1
      }} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        style={{ maxWidth: 500, margin: '0 auto' }}
      >
        <h2 style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)', fontWeight: 700, marginBottom: '1rem' }}>
          Work With Us
        </h2>
        <p style={{ color: '#86868b', fontSize: '1.1rem', marginBottom: '2rem' }}>
          Ready to elevate your brand? Let's discuss your project and transform your digital presence.
        </p>
        <motion.a
          href="mailto:tseditorsclub@gmail.com"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          style={{
            display: 'inline-block',
            background: '#2997ff',
            color: '#fff',
            padding: '1rem 2.5rem',
            borderRadius: '50px',
            fontWeight: 500,
            transition: 'all 0.3s'
          }}
        >
          Book A Call
        </motion.a>
      </motion.div>
    </section>
  )
}
