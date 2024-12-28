'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  return (
    <section className="about-section py-24 md:py-32 bg-pink-500/10 backdrop-blur-md relative overflow-hidden">
      <div className="container px-4 mx-auto relative z-10">
        <div className="about-content grid md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h2 
              className="text-4xl font-bold mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Built on Flow Blockchain
            </motion.h2>
            <motion.p 
              className="text-lg text-pink-100/80 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Flow is the blockchain designed for the next generation of apps, games, and digital assets. 
              Our platform leverages Flow's unique features to provide a seamless content sharing experience.
            </motion.p>
            <motion.ul 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {[
                "Secure content ownership with NFTs",
                "Fast and low-cost transactions",
                "Environmentally sustainable blockchain"
              ].map((item, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                >
                  <div className="mr-4 mt-1 bg-pink-400/20 rounded-full p-1">
                    <svg className="w-5 h-5 text-pink-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-pink-100/90">{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="https://img.freepik.com/premium-photo/cyber-big-data-flow-blockchain-pink-data-fields-network-line-connect-stream-concept-ai-technology_941600-53567.jpg"
              alt="Flow blockchain visualization"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-pink-300/10 backdrop-blur-sm"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 30, 0],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
        <motion.div
          className="absolute w-40 h-40 border border-pink-300/20 rounded-full"
          style={{ top: '10%', right: '5%' }}
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute w-32 h-32 border border-pink-300/20 transform rotate-45"
          style={{ bottom: '15%', left: '10%' }}
          animate={{
            rotate: [45, 225, 45],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </section>
  )
}
