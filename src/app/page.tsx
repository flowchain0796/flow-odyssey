'use client'

import { useState, useEffect } from 'react'
import AnimatedBackground from '@/components/ui/AnimatedBackground'
import Navbar from '@/components/sections/Navbar'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Stats from '@/components/sections/Stats'
import Footer from '@/components/sections/Footer'
import CustomCursor from '@/components/ui/CustomCursor'
import MetaMaskLoading from '@/components/ui/MetamaskLoading'
import { useWallet } from '@/lib/wallet'
import WhyUs from '@/components/sections/Whyus'

export default function Home() {
  const { isConnecting } = useWallet()
  const [showLoading, setShowLoading] = useState(false)

  useEffect(() => {
    if (isConnecting) {
      setShowLoading(true)
    } else {
      const timer = setTimeout(() => setShowLoading(false), 1000)
      return () => clearTimeout(timer)
    }
  }, [isConnecting])

  return (
    <>
      <AnimatedBackground />
      <CustomCursor />
      <Navbar />
      <Hero />
      <About />
      <WhyUs />
      <Stats />
      <Footer />
      {showLoading && <MetaMaskLoading />}
    </>
  )
}

