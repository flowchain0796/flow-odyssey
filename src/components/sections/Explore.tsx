'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useAppSelector, useAppDispatch } from '@/lib/redux/hooks'
import { likeContent, dislikeContent } from '@/lib/redux/exploreslice'
import { ThumbsUp, ThumbsDown, Play } from 'lucide-react'
import VideoPopup from '@/components/ui/VideoPopup'

export default function ExploreSection() {
  const dispatch = useAppDispatch()
  const content = useAppSelector((state) => state.explore.content)
  const [selectedVideoId, setSelectedVideoId] = useState<number | null>(null)

  const handleLike = (id: number) => {
    dispatch(likeContent(id))
  }

  const handleDislike = (id: number) => {
    dispatch(dislikeContent(id))
  }

  const handleVideoClick = (id: number) => {
    setSelectedVideoId(id)
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {content.map((item, index) => (
          <motion.div
            key={item.id}
            className="bg-white/10 backdrop-blur-md rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div 
              className="relative aspect-video cursor-pointer"
              onClick={() => item.type === 'video' && handleVideoClick(item.id)}
            >
              {item.type === 'image' ? (
                <img src={item.src} alt={item.title} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full bg-[#2D3748]/20 flex items-center justify-center">
                  <Play className="text-white w-16 h-16 opacity-70" />
                </div>
              )}
              <div className="absolute top-2 right-2 bg-black/50 text-white px-2 py-1 rounded text-xs uppercase">
                {item.type}
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2 text-[#2D3748]">{item.title}</h3>
              <div className="flex justify-between items-center">
                <motion.button
                  className="flex items-center space-x-2 text-green-600"
                  onClick={() => handleLike(item.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ThumbsUp size={18} />
                  <span>{item.likes}</span>
                </motion.button>
                <motion.button
                  className="flex items-center space-x-2 text-red-600"
                  onClick={() => handleDislike(item.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ThumbsDown size={18} />
                  <span>{item.dislikes}</span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      {selectedVideoId && (
        <VideoPopup
          videoId={selectedVideoId}
          onClose={() => setSelectedVideoId(null)}
        />
      )}
    </>
  )
}

