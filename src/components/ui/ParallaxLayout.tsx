'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function ParallaxLayout({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  const mainRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero parallax effect
      gsap.to('.hero-content', {
        yPercent: -50,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero-section',
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      })

      // About section animation
      gsap.from('.about-content', {
        opacity: 0,
        y: 100,
        scrollTrigger: {
          trigger: '.about-section',
          start: 'top center',
          end: 'center center',
          scrub: true
        }
      })

      // Stats animation
      gsap.from('.stat-item', {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.stats-section',
          start: 'top center',
          end: 'center center',
          scrub: true
        }
      })

      // Navbar background animation
      ScrollTrigger.create({
        start: 'top top',
        end: 99999,
        toggleClass: { className: 'navbar-scrolled', targets: '.navbar' }
      })

      // Parallax effect for background images
      gsap.utils.toArray('.parallax-bg').forEach((layer: any) => {
        const depth = layer.dataset.depth || 0.2
        const movement = -(layer.offsetHeight * depth)
        gsap.to(layer, {
          y: movement,
          ease: 'none',
          scrollTrigger: {
            trigger: layer,
            start: 'top top',
            end: 'bottom top',
            scrub: true
          }
        })
      })
    }, mainRef)

    return () => ctx.revert()
  }, [])

  return (
    <main ref={mainRef} className="relative overflow-hidden">
      {children}
    </main>
  )
}

