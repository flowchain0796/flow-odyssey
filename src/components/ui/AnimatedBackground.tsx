'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function AnimatedBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="fixed inset-0 -z-10">
      {/* Pink clouds */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, #FF69B4 100%)',
          opacity: 0.4,
        }}
        animate={{
          x: mousePosition.x * -20,
          y: mousePosition.y * -20,
        }}
        transition={{ type: 'spring', damping: 50 }}
      />
      
      {/* Birds */}
      <div className="absolute w-full h-full overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: [null, Math.random() * window.innerWidth],
              y: [null, Math.random() * window.innerHeight],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="text-pink-200/20"
            >
              <path d="M3 17l6-6M9 11l4-4M13 7l4-4" />
            </svg>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
