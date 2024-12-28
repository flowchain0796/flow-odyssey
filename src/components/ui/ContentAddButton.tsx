'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Plus, Globe2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import ContentAddModal from './ContentAddModal'

export default function ContentAddButton() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md mx-auto"
    >
      <div className="text-center mb-6">
        <Globe2 className="w-12 h-12 text-[#2D3748] mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-[#2D3748] mb-2">Create Your Own Content</h3>
        <p className="text-[#4A5568] mb-6">
          Share your creativity with people all over the world. Join our community of content creators and start your journey today.
        </p>
      </div>
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Button
          className="w-full bg-[#2D3748]/10 hover:bg-[#2D3748]/20 text-[#2D3748] font-semibold px-6 py-6 rounded-lg shadow-lg group relative overflow-hidden backdrop-blur-sm border border-[#2D3748]/20"
          onClick={() => setIsModalOpen(true)}
        >
          <div className="absolute inset-0 bg-[#2D3748]/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          <span className="relative flex items-center justify-center text-lg">
            <Plus className="mr-2 h-6 w-6" /> Start Creating
          </span>
        </Button>
      </motion.div>
      <div className="mt-4 grid grid-cols-3 gap-4">
        {['Images', 'Videos', 'Articles'].map((type, index) => (
          <motion.div
            key={type}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.1 }}
            className="text-center"
          >
            <div className="text-[#4A5568]/80 text-sm">{type}</div>
          </motion.div>
        ))}
      </div>
      <ContentAddModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </motion.div>
  )
}

