'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating circles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/10 backdrop-blur-sm"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: Math.random() * 2 + 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
        
        {/* Floating geometric shapes */}
        <motion.div
          className="absolute w-32 h-32 border border-white/20 transform rotate-45"
          style={{ top: '20%', right: '15%' }}
          animate={{
            rotate: 405,
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute w-24 h-24 border-2 border-white/10 rounded-full"
          style={{ bottom: '25%', left: '10%' }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-6"
        >
          <motion.div
            className="text-8xl md:text-9xl font-bold tracking-tighter text-white"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            Flow
          </motion.div>
          <motion.div
            className="text-7xl md:text-8xl font-bold tracking-tighter text-white/90"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
          >
            Odyssey
          </motion.div>
          <motion.p
            className="text-xl md:text-2xl text-white/80 max-w-xl mx-auto px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Embark on a journey through decentralized content sharing
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="space-x-4"
          >
            <Link href="/explore">
            <Button
              size="lg"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm"
            >
              Start Your Journey
            </Button>
            </Link>
            <Button
              size="lg"
              variant="ghost"
              className="text-white hover:bg-white/10 border border-white/20 backdrop-blur-sm"
            >
              Learn More
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating text elements */}
      <motion.div
        className="absolute top-1/4 left-[15%] text-white/40 text-sm"
        animate={{
          y: [0, -20, 0],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        Decentralized
      </motion.div>
      <motion.div
        className="absolute bottom-1/3 right-[20%] text-white/40 text-sm"
        animate={{
          y: [0, -30, 0],
          opacity: [0.4, 1, 0.4],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        Web3
      </motion.div>

      {/* Social links */}
      <motion.div
        className="absolute bottom-8 left-8 flex gap-6 text-white/60"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <a href="#" className="hover:text-white transition-colors">Twitter</a>
        <a href="#" className="hover:text-white transition-colors">Discord</a>
        <a href="#" className="hover:text-white transition-colors">GitHub</a>
      </motion.div>

      {/* Navigation dots */}
      <motion.div
        className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-white' : 'bg-white/30'}`}
          />
        ))}
      </motion.div>
    </section>
  )
}
