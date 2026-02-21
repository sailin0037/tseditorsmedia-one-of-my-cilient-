import { motion } from 'framer-motion'

export default function AnimatedLogo() {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1rem'
      }}
    >
      <svg
        width="clamp(120px, 25vw, 180px)"
        height="clamp(120px, 25vw, 180px)"
        viewBox="0 0 180 180"
        style={{ overflow: 'visible' }}
      >
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00d4ff">
              <animate attributeName="stop-color" values="#00d4ff;#5eead4;#a78bfa;#00d4ff" dur="4s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#5eead4">
              <animate attributeName="stop-color" values="#5eead4;#a78bfa;#00d4ff;#5eead4" dur="4s" repeatCount="indefinite" />
            </stop>
          </linearGradient>
          
          <linearGradient id="innerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0891b2" />
            <stop offset="100%" stopColor="#0e7490" />
          </linearGradient>
          
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          
          <filter id="glowIntense" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="8" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <clipPath id="hexClip">
            <polygon points="90,10 160,47 160,133 90,170 20,133 20,47" />
          </clipPath>
        </defs>

        <motion.g
          animate={{ 
            rotate: [0, 360],
          }}
          transition={{ 
            rotate: { duration: 20, repeat: Infinity, ease: "linear" }
          }}
        >
          <motion.circle
            cx="90"
            cy="90"
            r="75"
            fill="none"
            stroke="url(#logoGradient)"
            strokeWidth="3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            filter="url(#glow)"
          />
          
          <motion.circle
            cx="90"
            cy="90"
            r="60"
            fill="none"
            stroke="url(#logoGradient)"
            strokeWidth="1.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0.3, 0.8, 0.3] }}
            transition={{ 
              pathLength: { duration: 2, delay: 0.5, ease: "easeInOut" },
              opacity: { duration: 3, repeat: Infinity }
            }}
          />

          <motion.circle
            cx="90"
            cy="90"
            r="45"
            fill="none"
            stroke="#00d4ff"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1, rotate: -360 }}
            transition={{ 
              pathLength: { duration: 2, delay: 1, ease: "easeInOut" },
              rotate: { duration: 15, repeat: Infinity, ease: "linear" }
            }}
            style={{ transformOrigin: 'center' }}
          />

          <motion.polygon
            points="90,20 155,52 155,128 90,160 25,128 25,52"
            fill="none"
            stroke="url(#logoGradient)"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
            filter="url(#glow)"
          />
        </motion.g>

        <motion.g
          filter="url(#glowIntense)"
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }}
          style={{ transformOrigin: 'center' }}
        >
          <path
            d="M70 70 L90 50 L110 70 L110 95 L90 115 L70 95 Z"
            fill="url(#innerGradient)"
            opacity="0.9"
          />
          
          <motion.path
            d="M90 55 L108 73 L108 95 L90 113 L72 95 L72 73 Z"
            fill="none"
            stroke="#00d4ff"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />
          
          <circle cx="90" cy="90" r="12" fill="none" stroke="#00d4ff" strokeWidth="3" />
          
          <motion.line
            x1="100" y1="100" x2="120" y2="120"
            stroke="#00d4ff"
            strokeWidth="4"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          />
        </motion.g>

        <motion.g
          animate={{
            y: [0, -3, 0],
          }}
          transition={{
            y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <circle cx="90" cy="90" r="3" fill="#fff" filter="url(#glow)">
            <animate attributeName="opacity" values="0.5;1;0.5" dur="1.5s" repeatCount="indefinite" />
          </circle>
          
          <circle cx="90" cy="45" r="2" fill="#5eead4">
            <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="135" cy="67" r="2" fill="#a78bfa">
            <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" delay="0.3s" />
          </circle>
          <circle cx="135" cy="113" r="2" fill="#00d4ff">
            <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" delay="0.6s" />
          </circle>
          <circle cx="90" cy="135" r="2" fill="#5eead4">
            <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" delay="0.9s" />
          </circle>
          <circle cx="45" cy="113" r="2" fill="#a78bfa">
            <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" delay="1.2s" />
          </circle>
          <circle cx="45" cy="67" r="2" fill="#00d4ff">
            <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" delay="1.5s" />
          </circle>
        </motion.g>

        <motion.g
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <text
            x="90"
            y="185"
            textAnchor="middle"
            fill="url(#logoGradient)"
            fontSize="18"
            fontWeight="700"
            fontFamily="'Inter', sans-serif"
            letterSpacing="8"
            filter="url(#glow)"
          >
            QUEST
          </text>
        </motion.g>

        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.5, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <circle cx="90" cy="90" r="85" fill="none" stroke="#2997ff" strokeWidth="0.5" strokeDasharray="5,10" />
        </motion.g>
      </svg>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        style={{
          display: 'flex',
          gap: '0.5rem',
          marginTop: '0.5rem'
        }}
      >
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            animate={{
              scaleY: [1, 1.5, 1],
              opacity: [0.3, 1, 0.3]
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: i * 0.15
            }}
            style={{
              width: 3,
              height: 16,
              background: 'linear-gradient(to top, #00d4ff, #5eead4)',
              borderRadius: 2,
              transformOrigin: 'bottom'
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  )
}
