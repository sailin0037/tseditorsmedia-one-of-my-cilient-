import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'

const services = [
  {
    id: 1,
    icon: '🎬',
    title: 'Video Editing',
    shortDesc: 'Cinematic videos that captivate',
    fullDesc: 'Our professional video editing team transforms your footage into compelling visual stories. From corporate videos to social media content, we deliver cinematic quality that engages your audience and drives results.',
    features: ['Corporate Videos', 'Social Media Content', 'Commercials', 'Event Coverage', 'Color Grading', 'Motion Graphics'],
    price: 'Starting from ₹5,000'
  },
  {
    id: 2,
    icon: '📈',
    title: 'Digital Marketing',
    shortDesc: 'Data-driven campaigns that deliver',
    fullDesc: 'Our digital marketing experts create strategies that actually work. We combine SEO, social media marketing, PPC, and content marketing to drive real results for your business.',
    features: ['SEO Optimization', 'Social Media Marketing', 'PPC Campaigns', 'Content Marketing', 'Email Marketing', 'Analytics & Reporting'],
    price: 'Starting from ₹8,000'
  },
  {
    id: 3,
    icon: '🎨',
    title: 'Logo & Branding',
    shortDesc: 'Identities that stand out',
    fullDesc: 'Your brand deserves more than just a logo. We create complete brand identities that communicate your values, resonate with your audience, and set you apart from the competition.',
    features: ['Logo Design', 'Brand Guidelines', 'Brand Strategy', 'Visual Identity', 'Stationery Design', 'Brand Voice'],
    price: 'Starting from ₹3,000'
  },
  {
    id: 4,
    icon: '🌐',
    title: 'Web Development',
    shortDesc: 'Websites that perform',
    fullDesc: 'We build stunning, fast, and conversion-focused websites. From simple landing pages to complex web applications, our solutions are designed to grow your business.',
    features: ['Website Design', 'E-Commerce', 'Web Applications', 'CMS Solutions', 'API Integration', 'Performance Optimization'],
    price: 'Starting from ₹15,000'
  },
  {
    id: 5,
    icon: '📱',
    title: 'Social Media Management',
    shortDesc: 'Build your online presence',
    fullDesc: 'Let us handle your social media while you focus on your business. We create engaging content, manage your accounts, and grow your following organically.',
    features: ['Content Creation', 'Account Management', 'Growth Strategy', 'Analytics', 'Community Management', 'Influencer Marketing'],
    price: 'Starting from ₹10,000'
  },
  {
    id: 6,
    icon: '🎥',
    title: 'Content Creation',
    shortDesc: 'Content that tells your story',
    fullDesc: 'From script to screen, we create all types of content that connects with your audience. Photos, videos, infographics — we bring your ideas to life.',
    features: ['Video Production', 'Photography', 'Infographics', 'Copywriting', 'Podcast Production', 'UGC Content'],
    price: 'Starting from ₹7,000'
  }
]

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <div style={{ paddingTop: 80 }}>
      {/* Hero */}
      <section style={{
        padding: '6rem 2rem 4rem',
        textAlign: 'center',
        position: 'relative'
      }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ maxWidth: 700, margin: '0 auto' }}
        >
          <p style={{ color: '#2997ff', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.2em' }}>Our Services</p>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            fontWeight: 700,
            marginTop: '0.5rem',
            marginBottom: '1.5rem'
          }}>
            Everything You Need to <span style={{ color: '#2997ff' }}>Succeed</span> Online
          </h1>
          <p style={{ color: '#86868b', fontSize: '1.15rem', lineHeight: 1.7 }}>
            Comprehensive digital solutions tailored to your unique business needs. 
            We don't just provide services — we deliver results.
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section style={{ padding: '4rem 2rem' }} ref={ref}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'grid', gap: '2rem' }}>
            {services.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 }}
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: 24,
                  padding: 'clamp(1.5rem, 4vw, 3rem)',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                  gap: '2rem',
                  alignItems: 'start'
                }}
              >
                {/* Left - Icon & Title */}
                <div>
                  <span style={{ fontSize: '3rem', display: 'block', marginBottom: '1rem' }}>{service.icon}</span>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>{service.title}</h3>
                  <p style={{ color: '#86868b' }}>{service.shortDesc}</p>
                  <div style={{
                    marginTop: '1.5rem',
                    padding: '0.75rem 1.5rem',
                    background: 'linear-gradient(135deg, rgba(41,151,255,0.2), rgba(94,234,212,0.1))',
                    borderRadius: 50,
                    display: 'inline-block',
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    color: '#2997ff'
                  }}>
                    {service.price}
                  </div>
                </div>

                {/* Middle - Description */}
                <div>
                  <p style={{ color: '#86868b', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                    {service.fullDesc}
                  </p>
                </div>

                {/* Right - Features */}
                <div>
                  <h4 style={{ fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem', color: '#6e6e73' }}>
                    What's Included
                  </h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {service.features.map((feature, j) => (
                      <span key={j} style={{
                        padding: '0.4rem 0.8rem',
                        background: 'rgba(255,255,255,0.05)',
                        borderRadius: 20,
                        fontSize: '0.8rem',
                        color: '#a1a1a1'
                      }}>
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: '6rem 2rem', background: 'rgba(10,10,10,0.8)' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', textAlign: 'center' }}>
          <p style={{ color: '#2997ff', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.2em' }}>Our Process</p>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, marginTop: '0.5rem', marginBottom: '3rem' }}>
            How We Work
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
            {[
              { step: '01', title: 'Discovery', desc: 'We learn about your business, goals, and audience' },
              { step: '02', title: 'Strategy', desc: 'We create a customized plan to achieve your goals' },
              { step: '03', title: 'Creation', desc: 'Our team brings your vision to life' },
              { step: '04', title: 'Delivery', desc: 'We launch and optimize for maximum impact' }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div style={{
                  fontSize: '3rem',
                  fontWeight: 800,
                  background: 'linear-gradient(135deg, rgba(41,151,255,0.2), transparent)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  marginBottom: '0.5rem'
                }}>{item.step}</div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem' }}>{item.title}</h3>
                <p style={{ color: '#86868b', fontSize: '0.9rem' }}>{item.desc}</p>
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
            Ready to Get Started?
          </h2>
          <p style={{ color: '#86868b', marginBottom: '2rem' }}>
            Book a free consultation and let's discuss your project.
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
            Book Free Call
          </Link>
        </motion.div>
      </section>
    </div>
  )
}
