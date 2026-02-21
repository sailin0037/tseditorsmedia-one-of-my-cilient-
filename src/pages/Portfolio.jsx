import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'

const projects = [
  {
    id: 1,
    client: 'TechStartup Inc',
    category: 'Video Editing',
    title: 'Product Launch Video',
    desc: 'Cinematic product launch video that generated 500K+ views and 10K+ leads',
    icon: '🎬',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    stats: ['500K+ Views', '10K+ Leads', '300% ROI']
  },
  {
    id: 2,
    client: 'Fashion Nova',
    category: 'Branding',
    title: 'Complete Brand Identity',
    desc: 'Rebranded fashion startup from ground up with logo, packaging, and social media',
    icon: '🎨',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    stats: ['Brand Recognition +200%', 'Social Growth 50K+', 'Sales +150%']
  },
  {
    id: 3,
    client: 'FoodChain',
    category: 'Web Development',
    title: 'E-Commerce Platform',
    desc: 'Full-featured online store with custom features and seamless user experience',
    icon: '🛒',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    stats: ['Sales +200%', 'Load Time -60%', 'Mobile Traffic +80%']
  },
  {
    id: 4,
    client: 'FitLife',
    category: 'Digital Marketing',
    title: 'Social Media Campaign',
    desc: 'Viral social media campaign that reached 1M+ people organically',
    icon: '📈',
    gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    stats: ['1M+ Reach', '100K+ Engagement', 'Lead Cost -70%']
  },
  {
    id: 5,
    client: 'EduLearn',
    category: 'Content Creation',
    title: 'Educational Video Series',
    desc: 'Produced 50+ educational videos for online learning platform',
    icon: '📚',
    gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    stats: ['50+ Videos', 'Student Rating 4.9/5', 'Completion 85%']
  },
  {
    id: 6,
    client: 'GreenEarth',
    category: 'Video Editing',
    title: 'Non-Profit Documentary',
    desc: 'Emotional documentary that helped raise $500K for environmental cause',
    icon: '🌍',
    gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    stats: ['$500K Raised', 'Viral Spread', 'Awards Won']
  }
]

const categories = ['All', 'Video Editing', 'Branding', 'Web Development', 'Digital Marketing', 'Content Creation']

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory)

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
          <p style={{ color: '#2997ff', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.2em' }}>Our Work</p>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 700, marginTop: '0.5rem', marginBottom: '1.5rem' }}>
            Projects That <span style={{ color: '#2997ff' }}>Deliver Results</span>
          </h1>
          <p style={{ color: '#86868b', fontSize: '1.15rem', lineHeight: 1.7 }}>
            Browse through our portfolio of successful projects. Each case tells a story of 
            partnership, creativity, and measurable results.
          </p>
        </motion.div>
      </section>

      {/* Categories */}
      <section style={{ padding: '0 2rem 3rem' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
          {categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '0.6rem 1.5rem',
                background: activeCategory === cat ? 'rgba(41,151,255,0.2)' : 'rgba(255,255,255,0.05)',
                border: `1px solid ${activeCategory === cat ? '#2997ff' : 'rgba(255,255,255,0.1)'}`,
                borderRadius: 50,
                color: activeCategory === cat ? '#2997ff' : '#86868b',
                fontSize: '0.85rem',
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'all 0.3s'
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section style={{ padding: '2rem 2rem 6rem' }} ref={ref}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '2rem' }}>
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: 20,
                  overflow: 'hidden',
                  transition: 'all 0.3s'
                }}
              >
                {/* Icon/Visual */}
                <div style={{
                  height: 180,
                  background: project.gradient,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative'
                }}>
                  <span style={{ fontSize: '5rem', filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.3))' }}>
                    {project.icon}
                  </span>
                  
                  {/* Category Badge */}
                  <div style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    padding: '0.4rem 1rem',
                    background: 'rgba(0,0,0,0.6)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: 20,
                    fontSize: '0.75rem',
                    fontWeight: 500,
                    color: '#fff'
                  }}>
                    {project.category}
                  </div>

                  {/* Play Button Overlay for Video */}
                  {project.category === 'Video Editing' && (
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'rgba(0,0,0,0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <div style={{
                        width: 70,
                        height: 70,
                        borderRadius: '50%',
                        background: 'rgba(255,255,255,0.9)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 10px 40px rgba(0,0,0,0.3)'
                      }}>
                        <span style={{ fontSize: '2rem', marginLeft: 5 }}>▶</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div style={{ padding: '1.5rem' }}>
                  <div style={{ color: '#6e6e73', fontSize: '0.8rem', marginBottom: '0.5rem' }}>{project.client}</div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem' }}>{project.title}</h3>
                  <p style={{ color: '#86868b', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1rem' }}>
                    {project.desc}
                  </p>

                  {/* Stats */}
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {project.stats.map((stat, j) => (
                      <span key={j} style={{
                        padding: '0.3rem 0.75rem',
                        background: 'rgba(41,151,255,0.1)',
                        borderRadius: 20,
                        fontSize: '0.75rem',
                        color: '#2997ff',
                        fontWeight: 500
                      }}>
                        {stat}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
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
            Want Similar Results?
          </h2>
          <p style={{ color: '#86868b', marginBottom: '2rem' }}>
            Let's create something amazing for your brand.
          </p>
          <Link
            to="/contact"
            style={{
              background: 'linear-gradient(135deg, #2997ff, #0071e3)',
              color: '#fff',
              padding: '1rem 2.5rem',
              borderRadius: '50px',
              fontWeight: 600,
              display: 'inline-block'
            }}
          >
            Start Your Project
          </Link>
        </motion.div>
      </section>
    </div>
  )
}
