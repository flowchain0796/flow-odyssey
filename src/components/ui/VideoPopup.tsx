'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Send, MessageCircle } from 'lucide-react'
import { useAppSelector, useAppDispatch } from '@/lib/redux/hooks'
import { addComment } from '@/lib/redux/exploreslice'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

interface VideoPopupProps {
  videoId: number
  onClose: () => void
}

export default function VideoPopup({ videoId, onClose }: VideoPopupProps) {
  const dispatch = useAppDispatch()
  const video = useAppSelector((state) => 
    state.explore.content.find((item) => item.id === videoId && item.type === 'video')
  )
  const comments = useAppSelector((state) => state.explore.comments[videoId] || [])
  const [newComment, setNewComment] = useState('')

  const handleAddComment = () => {
    if (newComment.trim()) {
      dispatch(addComment({ videoId, comment: newComment }))
      setNewComment('')
    }
  }

  if (!video) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-50"
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        />
        
        {/* Content Container */}
        <div className="absolute inset-0 overflow-auto py-8 px-4">
          <div className="min-h-full flex items-center justify-center">
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ duration: 0.2, type: "spring", stiffness: 300, damping: 30 }}
              className="relative bg-gray-900 rounded-3xl border border-gray-700/50 shadow-2xl w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="sticky top-0 z-10 flex justify-between items-center p-6 border-b border-gray-700/50 bg-gray-900/95 backdrop-blur-sm">
                <h2 className="text-2xl font-bold text-gray-100">
                  {video.title}
                </h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onClose}
                  className="text-gray-400 hover:text-white hover:bg-gray-700/50 rounded-full"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              {/* Main Content */}
              <div className="p-6">
                <div className="aspect-video mb-6 rounded-2xl overflow-hidden ring-1 ring-gray-700/50 shadow-xl">
                  <video
                    src={video.src}
                    controls
                    className="w-full h-full"
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-xl font-semibold text-gray-200">
                    <MessageCircle className="w-5 h-5" />
                    <h3>Comments</h3>
                  </div>

                  <motion.div 
                    className="space-y-3"
                    initial="hidden"
                    animate="visible"
                    variants={{
                      visible: {
                        transition: {
                          staggerChildren: 0.05
                        }
                      }
                    }}
                  >
                    {comments.map((comment, index) => (
                      <motion.div
                        key={index}
                        variants={{
                          hidden: { opacity: 0, y: 10 },
                          visible: { opacity: 1, y: 0 }
                        }}
                        className="bg-gray-800 rounded-xl p-4 border border-gray-700/30"
                      >
                        <p className="text-gray-300">{comment}</p>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Comment Input */}
                  <div className="flex gap-3 pt-4 sticky bottom-0">
                    <Input
                      type="text"
                      placeholder="Add a comment..."
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleAddComment()}
                      className="flex-grow bg-gray-800 text-gray-200 placeholder-gray-500 border-gray-700/50 rounded-xl focus:ring-2 focus:ring-gray-600 focus:border-transparent"
                    />
                    <Button
                      onClick={handleAddComment}
                      className="bg-gray-700 hover:bg-gray-600 text-gray-200 rounded-xl px-6 transition-colors duration-200"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Send
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}