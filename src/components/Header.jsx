import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : 'unset'
  }, [mobileOpen])

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <>
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: scrolled ? '0.6rem 2rem' : '1rem 2rem',
        background: scrolled ? 'rgba(2, 4, 10, 0.95)' : 'rgba(2, 4, 10, 0.8)',
        backdropFilter: 'blur(20px)',
        borderBottom: scrolled ? '1px solid rgba(6, 182, 212, 0.2)' : '1px solid rgba(255,255,255,0.05)',
        transition: 'all 0.3s ease',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <span style={{
            fontSize: '1.4rem',
            fontWeight: 700,
            background: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: '-0.02em'
          }}>
            TS Editors
          </span>
        </Link>

        <nav className="desktop-nav" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              style={{
                color: location.pathname === item.path ? '#fff' : '#94a3b8',
                fontSize: '0.9rem',
                fontWeight: 500,
                transition: 'color 0.3s',
                textDecoration: 'none',
                position: 'relative'
              }}
            >
              {item.name}
              {location.pathname === item.path && (
                <span style={{
                  position: 'absolute',
                  bottom: -8,
                  left: 0,
                  width: '100%',
                  height: 2,
                  background: 'linear-gradient(90deg, #06b6d4, #22d3ee)',
                  borderRadius: 1
                }} />
              )}
            </Link>
          ))}
        </nav>

        <Link
          to="/contact"
          className="cta-btn"
          style={{
            background: 'linear-gradient(135deg, #06b6d4, #0891b2)',
            color: '#fff',
            padding: '0.6rem 1.5rem',
            borderRadius: 50,
            fontSize: '0.85rem',
            fontWeight: 600,
            boxShadow: '0 4px 20px rgba(6, 182, 212, 0.3)',
            textDecoration: 'none'
          }}
        >
          Get Started
        </Link>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="mobile-toggle"
          style={{ 
            display: 'none', 
            flexDirection: 'column', 
            justifyContent: 'center',
            alignItems: 'center',
            gap: 5, 
            padding: 8, 
            background: 'none', 
            border: 'none', 
            cursor: 'pointer',
            width: 40,
            height: 40
          }}
        >
          <span style={{ 
            width: 24, 
            height: 2, 
            background: '#fff', 
            borderRadius: 2,
            transition: 'all 0.3s',
            transform: mobileOpen ? 'rotate(45deg) translateY(7px)' : 'none'
          }} />
          <span style={{ 
            width: 24, 
            height: 2, 
            background: '#fff', 
            borderRadius: 2,
            transition: 'all 0.3s',
            opacity: mobileOpen ? 0 : 1
          }} />
          <span style={{ 
            width: 24, 
            height: 2, 
            background: '#fff', 
            borderRadius: 2,
            transition: 'all 0.3s',
            transform: mobileOpen ? 'rotate(-45deg) translateY(-7px)' : 'none'
          }} />
        </button>

        <style>{`
          @media (max-width: 768px) {
            .desktop-nav { display: none !important; }
            .cta-btn { display: none !important; }
            .mobile-toggle { display: flex !important; }
          }
        `}</style>
      </header>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(2, 4, 10, 0.98)',
          backdropFilter: 'blur(30px)',
          zIndex: 999,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '2rem',
          padding: '2rem'
        }}>
          {navItems.map((item, i) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setMobileOpen(false)}
              style={{
                color: location.pathname === item.path ? '#06b6d4' : '#fff',
                fontSize: '1.8rem',
                fontWeight: 600,
                textDecoration: 'none',
                opacity: 1,
                animation: `fadeIn 0.3s ease ${i * 0.1}s both`
              }}
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setMobileOpen(false)}
            style={{
              marginTop: '1rem',
              background: 'linear-gradient(135deg, #06b6d4, #0891b2)',
              color: '#fff',
              padding: '1rem 2.5rem',
              borderRadius: 50,
              fontWeight: 600,
              fontSize: '1.1rem',
              textDecoration: 'none'
            }}
          >
            Get Started
          </Link>
        </div>
      )}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  )
}
