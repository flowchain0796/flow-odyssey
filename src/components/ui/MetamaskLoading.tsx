'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function MetaMaskLoading() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
    >
      <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg text-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          className="mb-4"
        >
          <Image
            src="/metamask-fox.svg"
            alt="MetaMask Logo"
            width={80}
            height={80}
          />
        </motion.div>
        <h2 className="text-2xl font-bold text-white mb-2">Connecting to MetaMask</h2>
        <p className="text-white/80">Please confirm the connection in your MetaMask wallet</p>
      </div>
    </motion.div>
  )
}

