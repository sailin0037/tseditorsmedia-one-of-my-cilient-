import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'

// Google Form URL - Replace with your form URL
const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSfi4cMf1JmtSqeGDsBpZ5y6XqUkVRX0c6CqGYeZ9z_tC9b8g/viewform'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

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
          <p style={{ color: '#2997ff', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.2em' }}>Contact Us</p>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 700, marginTop: '0.5rem', marginBottom: '1.5rem' }}>
            Let's Start Your <span style={{ color: '#2997ff' }}>Project</span>
          </h1>
          <p style={{ color: '#86868b', fontSize: '1.15rem', lineHeight: 1.7 }}>
            Fill out our form or reach out directly. We respond within 24 hours!
          </p>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section style={{ padding: '2rem 2rem 6rem' }} ref={ref}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'start' }}>
            
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '2rem' }}>
                Get In Touch
              </h2>

              <div style={{ marginBottom: '2rem' }}>
                {[
                  { icon: '📧', title: 'Email', value: 'tseditorsclub@gmail.com', href: 'mailto:tseditorsclub@gmail.com' },
                  { icon: '📱', title: 'WhatsApp', value: '+91 79043 96500', href: 'https://wa.me/917904396500' },
                  { icon: '📍', title: 'Location', value: 'Tamil Nadu, India', href: null }
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                    <span style={{ fontSize: '1.5rem' }}>{item.icon}</span>
                    <div>
                      <div style={{ fontSize: '0.8rem', color: '#6e6e73', textTransform: 'uppercase' }}>{item.title}</div>
                      {item.href ? (
                        <a href={item.href} style={{ fontWeight: 500, color: item.icon === '📱' ? '#25D366' : '#fff' }}>{item.value}</a>
                      ) : (
                        <div style={{ fontWeight: 500 }}>{item.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '1rem' }}>Follow Us</h3>
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  {[
                    { icon: '📸', label: 'Instagram' },
                    { icon: '🐦', label: 'Twitter' },
                    { icon: '📘', label: 'Facebook' },
                    { icon: '💼', label: 'LinkedIn' }
                  ].map((social, i) => (
                    <a
                      key={i}
                      href="#"
                      title={social.label}
                      style={{
                        width: 44,
                        height: 44,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: 12,
                        fontSize: '1.25rem',
                        transition: 'all 0.3s'
                      }}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Trust Badge */}
              <div style={{
                marginTop: '2rem',
                padding: '1.5rem',
                background: 'rgba(41,151,255,0.1)',
                borderRadius: 16,
                border: '1px solid rgba(41,151,255,0.2)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
                  <span style={{ fontSize: '1.5rem' }}>🛡️</span>
                  <div style={{ fontWeight: 600 }}>100% Satisfaction Guarantee</div>
                </div>
                <p style={{ color: '#86868b', fontSize: '0.9rem' }}>
                  We're confident you'll love our work. If not, we'll make it right — no questions asked.
                </p>
              </div>
            </motion.div>

            {/* Direct Contact Options */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.5rem' }}>
                Send Us a Message
              </h2>

              {/* Option 1: WhatsApp */}
              <a
                href="https://wa.me/917904396500?text=Hi%20TS%20Editors%20Media,%20I'm%20interested%20in%20your%20services.%20Please%20contact%20me."
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1.5rem',
                  background: 'rgba(37,211,102,0.1)',
                  border: '1px solid rgba(37,211,102,0.3)',
                  borderRadius: 16,
                  marginBottom: '1rem',
                  transition: 'all 0.3s'
                }}
              >
                <span style={{ fontSize: '2.5rem' }}>💬</span>
                <div>
                  <div style={{ fontWeight: 600, color: '#25D366', marginBottom: '0.25rem' }}>Chat on WhatsApp</div>
                  <p style={{ color: '#86868b', fontSize: '0.9rem' }}>Fastest response - usually within minutes</p>
                </div>
                <span style={{ marginLeft: 'auto', color: '#25D366' }}>→</span>
              </a>

              {/* Option 2: Email */}
              <a
                href="mailto:tseditorsclub@gmail.com?subject=Project Inquiry"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1.5rem',
                  background: 'rgba(41,151,255,0.1)',
                  border: '1px solid rgba(41,151,255,0.3)',
                  borderRadius: 16,
                  marginBottom: '1rem',
                  transition: 'all 0.3s'
                }}
              >
                <span style={{ fontSize: '2.5rem' }}>✉️</span>
                <div>
                  <div style={{ fontWeight: 600, color: '#2997ff', marginBottom: '0.25rem' }}>Send Email</div>
                  <p style={{ color: '#86868b', fontSize: '0.9rem' }}>For detailed project descriptions</p>
                </div>
                <span style={{ marginLeft: 'auto', color: '#2997ff' }}>→</span>
              </a>

              {/* Option 3: Google Form */}
              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1.5rem',
                  background: 'rgba(66,133,244,0.1)',
                  border: '1px solid rgba(66,133,244,0.3)',
                  borderRadius: 16,
                  transition: 'all 0.3s'
                }}
              >
                <span style={{ fontSize: '2.5rem' }}>📝</span>
                <div>
                  <div style={{ fontWeight: 600, color: '#4285f4', marginBottom: '0.25rem' }}>Fill Contact Form</div>
                  <p style={{ color: '#86868b', fontSize: '0.9rem' }}>Our official contact form - opens in new tab</p>
                </div>
                <span style={{ marginLeft: 'auto', color: '#4285f4' }}>→</span>
              </a>

              {/* Response Time */}
              <div style={{
                marginTop: '2rem',
                padding: '1rem',
                background: 'rgba(255,255,255,0.03)',
                borderRadius: 12,
                textAlign: 'center'
              }}>
                <p style={{ color: '#86868b', fontSize: '0.9rem' }}>
                  ⏱️ <strong>Average response time:</strong> Within 24 hours
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '6rem 2rem', background: 'rgba(10,10,10,0.8)', textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ maxWidth: 600, margin: '0 auto' }}
        >
          <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 700, marginBottom: '1rem' }}>
            Still Have Questions?
          </h2>
          <p style={{ color: '#86868b', marginBottom: '2rem' }}>
            Check out our services or simply reach out. We're here to help!
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              to="/services"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: '#fff',
                padding: '0.875rem 2rem',
                borderRadius: 50,
                fontWeight: 500
              }}
            >
              View Services
            </Link>
            <a
              href="https://wa.me/917904396500"
              style={{
                background: '#25D366',
                color: '#fff',
                padding: '0.875rem 2rem',
                borderRadius: 50,
                fontWeight: 500
              }}
            >
              Chat on WhatsApp
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
