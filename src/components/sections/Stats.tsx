'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  ResponsiveContainer,
} from 'recharts'

const mockData = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 600 },
  { name: 'Apr', value: 800 },
  { name: 'May', value: 700 },
  { name: 'Jun', value: 900 },
  { name: 'Jul', value: 1100 },
]

const stats = [
  {
    title: 'Active Users',
    value: '100K+',
    description: 'Monthly active users on the platform',
    chart: (
      <ResponsiveContainer width="100%" height={120}>
        <AreaChart data={mockData}>
          <defs>
            <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#FF69B4" stopOpacity={0.4}/>
              <stop offset="95%" stopColor="#FF69B4" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <Area 
            type="monotone" 
            dataKey="value" 
            stroke="#FF69B4" 
            strokeWidth={2}
            fillOpacity={1} 
            fill="url(#colorUsers)" 
          />
        </AreaChart>
      </ResponsiveContainer>
    )
  },
  {
    title: 'Content Pieces',
    value: '1M+',
    description: 'Pieces of content shared and stored',
    chart: (
      <ResponsiveContainer width="100%" height={120}>
        <LineChart data={mockData}>
          <Line 
            type="monotone" 
            dataKey="value" 
            stroke="#FF69B4" 
            strokeWidth={3}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    )
  },
  {
    title: 'Creator Earnings',
    value: '$10M+',
    description: 'Total earnings by content creators',
    chart: (
      <ResponsiveContainer width="100%" height={120}>
        <AreaChart data={mockData}>
          <defs>
            <linearGradient id="colorEarnings" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#FF69B4" stopOpacity={0.4}/>
              <stop offset="95%" stopColor="#FF69B4" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <Area 
            type="monotone" 
            dataKey="value" 
            stroke="#FF69B4" 
            strokeWidth={2}
            fillOpacity={1} 
            fill="url(#colorEarnings)" 
          />
        </AreaChart>
      </ResponsiveContainer>
    )
  }
]

export default function Stats() {
  return (
    <section className="relative stats-section py-24 md:py-32 bg-gradient-to-b from-pink-600/30 to-pink-700/30 backdrop-blur-lg overflow-hidden">
      <div className="absolute inset-0 bg-black/10" />
      
      <div className="container relative px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-pink-100">
            Platform Statistics
          </h2>
          <p className="text-pink-100/80 text-lg font-medium">
            Growing ecosystem of creators and consumers
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/5 border-pink-300/20 backdrop-blur-xl hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/10">
                <CardContent className="p-8">
                  <div className="mb-6">
                    {stat.chart}
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-3xl font-bold text-white tracking-tight">
                      {stat.value}
                    </h3>
                    <p className="text-lg font-semibold text-pink-100/90">
                      {stat.title}
                    </p>
                    <p className="text-sm text-pink-100/70 leading-relaxed">
                      {stat.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Enhanced floating elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            className="absolute w-64 h-64 border border-pink-300/20 rounded-full blur-sm"
            style={{ top: '5%', right: '5%' }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute w-32 h-32 border-2 border-pink-300/20 transform rotate-45 blur-sm"
            style={{ bottom: '10%', left: '5%' }}
            animate={{
              rotate: [45, 225, 45],
              opacity: [0.1, 0.3, 0.1],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute w-40 h-40 bg-pink-500/5 rounded-full blur-xl"
            style={{ top: '30%', left: '10%' }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>
    </section>
  )
}