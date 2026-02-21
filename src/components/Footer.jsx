import { Link } from 'react-router-dom'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer style={{ 
      padding: '4rem 2rem 2rem', 
      background: 'rgba(2, 4, 10, 0.98)', 
      borderTop: '1px solid rgba(255,255,255,0.05)' 
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', 
          gap: '3rem',
          marginBottom: '3rem'
        }}>
          {/* Brand */}
          <div>
            <Link to="/" style={{ textDecoration: 'none', marginBottom: '1rem', display: 'inline-block' }}>
              <span style={{
                fontSize: '1.5rem',
                fontWeight: 700,
                background: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                TS Editors
              </span>
            </Link>
            <p style={{ color: '#64748b', fontSize: '0.875rem', maxWidth: 250, lineHeight: 1.7 }}>
              Empowering brands with stunning videos, powerful marketing, and cutting-edge web solutions.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem', color: '#94a3b8' }}>
              Services
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {['Video Editing', 'Digital Marketing', 'Logo & Branding', 'Web Development'].map((item) => (
                <li key={item}>
                  <Link to="/services" style={{ color: '#64748b', fontSize: '0.875rem', transition: 'color 0.3s', textDecoration: 'none' }}>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem', color: '#94a3b8' }}>
              Company
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {['About Us', 'Portfolio', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'About Us' ? '/about' : item === 'Portfolio' ? '/portfolio' : '/contact'} 
                    style={{ color: '#64748b', fontSize: '0.875rem', transition: 'color 0.3s', textDecoration: 'none' }}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem', color: '#94a3b8' }}>
              Contact
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li style={{ color: '#64748b', fontSize: '0.875rem' }}>tseditorsclub@gmail.com</li>
              <li style={{ color: '#64748b', fontSize: '0.875rem' }}>Tamil Nadu, India</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div style={{ 
          paddingTop: '1.5rem', 
          borderTop: '1px solid rgba(255,255,255,0.05)', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          flexWrap: 'wrap', 
          gap: '1rem' 
        }}>
          <p style={{ color: '#64748b', fontSize: '0.8rem' }}>
            © {currentYear} TS Editors Media. All rights reserved.
          </p>
          <p style={{ color: '#64748b', fontSize: '0.8rem' }}>
            Designed with <span style={{ color: '#ef4444' }}>♥</span> by <span style={{ color: '#3b82f6' }}>TSEM</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
