import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const cursorRef = useRef(null)
  const [isHovering, setIsHovering] = useState(false)
  const [isPointer, setIsPointer] = useState(false)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  const springConfig = { damping: 20, stiffness: 300 }
  const cursorX = useSpring(x, springConfig)
  const cursorY = useSpring(y, springConfig)

  useEffect(() => {
    const cursorOuter = cursorRef.current
    
    const moveCursor = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }

    const handleMouseOver = (e) => {
      const target = e.target
      const tagName = target.tagName.toLowerCase()
      const isInteractive = 
        tagName === 'a' || 
        tagName === 'button' || 
        tagName === 'input' ||
        target.closest('a') ||
        target.closest('button') ||
        target.getAttribute('role') === 'button'
      
      setIsPointer(isInteractive)
      setIsHovering(true)
    }

    const handleMouseOut = () => {
      setIsHovering(false)
      setIsPointer(false)
    }

    document.addEventListener('mousemove', moveCursor)
    document.addEventListener('mouseover', handleMouseOver)
    document.addEventListener('mouseout', handleMouseOut)

    return () => {
      document.removeEventListener('mousemove', moveCursor)
      document.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseout', handleMouseOut)
    }
  }, [x, y])

  return (
    <>
      <motion.div
        ref={cursorRef}
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          pointerEvents: 'none',
          zIndex: 9999,
        }}
      >
        <svg
          width={isHovering ? 40 : 24}
          height={isHovering ? 40 : 24}
          viewBox="0 0 24 24"
          style={{ 
            filter: 'drop-shadow(0 0 8px rgba(6, 182, 212, 0.6))',
            transition: 'width 0.2s, height 0.2s'
          }}
        >
          <circle
            cx="12"
            cy="12"
            r="10"
            fill="none"
            stroke={isPointer ? '#06b6d4' : '#5eead4'}
            strokeWidth="1.5"
            opacity={isHovering ? 0.8 : 0.6}
          />
          {isHovering && (
            <circle
              cx="12"
              cy="12"
              r="5"
              fill="rgba(6, 182, 212, 0.3)"
            />
          )}
        </svg>
      </motion.div>
      
      <div
        className="cursor-trail"
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          width: 8,
          height: 8,
          borderRadius: '50%',
          background: 'rgba(6, 182, 212, 0.4)',
          pointerEvents: 'none',
          zIndex: 9998,
        }}
      />
    </>
  )
}
