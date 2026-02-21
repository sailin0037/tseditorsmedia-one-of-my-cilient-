import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            setIsComplete(true)
            setTimeout(onComplete, 800)
          }, 500)
          return 100
        }
        return prev + Math.random() * 15 + 5
      })
    }, 80)

    return () => clearInterval(interval)
  }, [onComplete])

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            position: 'fixed',
            inset: 0,
            background: '#02040a',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10000,
          }}
        >
          <div style={{ position: 'relative', width: 200, height: 200 }}>
            <svg viewBox="0 0 200 60" style={{ width: '100%', height: '100%' }}>
              <motion.path
                d="M10 30 L40 30 M40 10 L40 50 M40 30 L70 30 M70 10 L70 50 M70 30 L90 30 M90 15 L90 45 M90 30 L120 30 M120 20 L120 40 M120 30 L150 30"
                fill="none"
                stroke="url(#loaderGradient)"
                strokeWidth="3"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: progress / 100 }}
                transition={{ duration: 0.1 }}
              />
              <defs>
                <linearGradient id="loaderGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#06b6d4" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
              </defs>
            </svg>
            
            <motion.div
              style={{
                position: 'absolute',
                bottom: -40,
                left: '50%',
                x: '-50%',
                fontSize: 14,
                color: '#06b6d4',
                fontFamily: 'monospace',
              }}
            >
              {Math.min(100, Math.round(progress))}%
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            style={{
              marginTop: 60,
              color: '#94a3b8',
              fontSize: 12,
              letterSpacing: 4,
              textTransform: 'uppercase',
            }}
          >
            TS EDITORS MEDIA
          </motion.div>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: progress / 100 }}
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: 3,
              background: 'linear-gradient(90deg, #06b6d4, #3b82f6)',
              transformOrigin: 'left',
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
