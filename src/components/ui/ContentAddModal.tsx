'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useAppDispatch } from '@/lib/redux/hooks'
import { addContent } from '@/lib/redux/exploreslice'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'

interface ContentAddModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ContentAddModal({ isOpen, onClose }: ContentAddModalProps) {
  const dispatch = useAppDispatch()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [type, setType] = useState<'image' | 'video'>('image')
  const [file, setFile] = useState<File | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        dispatch(addContent({
          type,
          src: reader.result as string,
          title,
        }))
        onClose()
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-8 w-full max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-3xl font-bold mb-6 text-white">Add New Content</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="title" className="text-white">Title</Label>
                <Input
                  id="title"
                  type="text"
                  placeholder="Enter title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  className="mt-1 bg-gray-700 text-white border-gray-600 focus:border-purple-500"
                />
              </div>
              <div>
                <Label htmlFor="description" className="text-white">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Enter description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                  className="mt-1 bg-gray-700 text-white border-gray-600 focus:border-purple-500"
                />
              </div>
              <div>
                <Label className="text-white mb-2 block">Content Type</Label>
                <RadioGroup value={type} onValueChange={(value) => setType(value as 'image' | 'video')} className="flex space-x-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="image" id="image" />
                    <Label htmlFor="image" className="text-white">Image</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="video" id="video" />
                    <Label htmlFor="video" className="text-white">Video</Label>
                  </div>
                </RadioGroup>
              </div>
              <div>
                <Label htmlFor="file" className="text-white">Upload File</Label>
                <Input
                  id="file"
                  type="file"
                  onChange={(e) => setFile(e.target.files?.[0] || null)}
                  accept={type === 'image' ? 'image/*' : 'video/*'}
                  required
                  className="mt-1 bg-gray-700 text-white border-gray-600 focus:border-purple-500"
                />
              </div>
              <div className="flex justify-end space-x-2">
                <Button type="button" variant="outline" onClick={onClose} className="text-white border-gray-500 hover:bg-gray-700">
                  Cancel
                </Button>
                <Button type="submit" className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white">
                  Submit
                </Button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

