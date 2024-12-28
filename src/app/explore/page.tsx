'use client'

import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useAppSelector, useAppDispatch } from '@/lib/redux/hooks'
import Navbar from '@/components/sections/Navbar'
import Footer from '@/components/sections/Footer'
import DailyClaimBox from '@/components/ui/DailyClaimBox'
import ContentAddButton from '@/components/ui/ContentAddButton'
import ExploreSection from '@/components/sections/Explore'
import BokehBackground from '@/components/ui/BokehBackground'
import { addContent } from '@/lib/redux/exploreslice'
import { Search } from 'lucide-react'

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const fadeInUp = {
  hidden: { y: 20, opacity: 0 },
  show: { 
    y: 0, 
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

export default function ExplorePage() {
  const dispatch = useAppDispatch()
  const content = useAppSelector((state) => state.explore.content)

  useEffect(() => {
    if (content.length === 0) {
      dispatch(addContent({ type: 'image', src: '/placeholder.svg?height=200&width=300', title: 'New Content' }))
    }
  }, [dispatch, content.length])

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#B8C6DB] via-[#C9B6D9] to-[#E5B8D4] relative">
      <BokehBackground />
      <div className="relative z-10">
        <Navbar />
        <motion.main 
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="container mx-auto px-4 pt-32 pb-16 space-y-12"
        >
          <motion.div
            variants={fadeInUp}
            className="text-center space-y-6 pt-8"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-[#2D3748] mb-4 tracking-tight">
              Explore Amazing Content
            </h1>
            <p className="text-lg md:text-xl text-[#4A5568] max-w-2xl mx-auto">
              Discover, share, and engage with the community's finest creations
            </p>
          </motion.div>
          
          <motion.div
            variants={fadeInUp}
            className="max-w-2xl mx-auto"
          >
            <div className="relative">
              <input
                type="search"
                placeholder="Search content..."
                className="w-full px-6 py-4 bg-white/20 backdrop-blur-lg rounded-full border border-white/30 text-[#2D3748] placeholder:text-[#4A5568]/70 focus:outline-none focus:ring-2 focus:ring-white/40 transition"
              />
              <Search className="absolute right-6 top-1/2 transform -translate-y-1/2 text-[#4A5568]" />
            </div>
          </motion.div>

          <motion.div 
            variants={fadeInUp}
            className="grid lg:grid-cols-2 gap-8 items-center"
          >
            <div className="p-6 bg-white/20 backdrop-blur-lg rounded-2xl border border-white/30 hover:bg-white/30 transition-colors duration-200">
              <ContentAddButton />
            </div>
            <div className="p-6 bg-white/20 backdrop-blur-lg rounded-2xl border border-white/30 hover:bg-white/30 transition-colors duration-200">
              <DailyClaimBox />
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="bg-white/20 backdrop-blur-lg rounded-2xl border border-white/30 p-6 md:p-8 hover:bg-white/30 transition-colors duration-200"
          >
            <ExploreSection />
          </motion.div>
        </motion.main>
        <Footer />
      </div>
    </div>
  )
}