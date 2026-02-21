import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

export function AnimatedText({ 
  children, 
  delay = 0, 
  duration = 0.8,
  once = true,
  className = ''
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, margin: "-100px" })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView, controls])

  const variants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      filter: 'blur(10px)'
    },
    visible: { 
      opacity: 1, 
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function SplitText({ children, className = '', delayOffset = 0 }) {
  const [chars, setChars] = useState([])
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    const text = typeof children === 'string' ? children : children.props?.children
    if (text) {
      setChars(text.split(''))
    }
  }, [children])

  return (
    <span ref={ref} className={className} style={{ display: 'inline-flex' }}>
      {chars.map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20, filter: 'blur(5px)' }}
          animate={isInView ? { 
            opacity: 1, 
            y: 0,
            filter: 'blur(0px)'
          } : {}}
          transition={{ 
            duration: 0.5, 
            delay: delayOffset + i * 0.03,
            ease: [0.16, 1, 0.3, 1]
          }}
          style={{ display: 'inline-block', whiteSpace: char === ' ' ? 'pre' : 'normal' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  )
}

export function GradientText({ children, className = '', speed = 5 }) {
  return (
    <motion.span
      className={className}
      style={{
        background: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 25%, #8b5cf6 50%, #06b6d4 75%, #3b82f6 100%)',
        backgroundSize: '200% 200%',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      }}
      animate={{
        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
      }}
      transition={{
        duration: speed,
        repeat: Infinity,
        ease: 'linear'
      }}
    >
      {children}
    </motion.span>
  )
}

export function ParallaxText({ children, speed = 0.5, className = '' }) {
  const ref = useRef(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect()
        const scrollY = window.scrollY
        const elementY = rect.top + scrollY
        const relativeScroll = scrollY - elementY + window.innerHeight
        setOffset(relativeScroll * speed * -1)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [speed])

  return (
    <motion.span
      ref={ref}
      className={className}
      style={{ y: offset }}
    >
      {children}
    </motion.span>
  )
}
