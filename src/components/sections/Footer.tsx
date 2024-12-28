import { Button } from '@/components/ui/button'
import Link from 'next/link'
import CopyrightYear from '@/components/ui/CopyrightYear'

export default function Footer() {
  return (
    <footer className="border-t relative overflow-hidden">
      {/* Background gradient and effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-pink-600/30 to-pink-700/30" />
      <div className="absolute inset-0 bg-black/10" />
      <div className="absolute inset-0 backdrop-blur-lg" />
      
      {/* Main content */}
      <div className="relative container px-4 py-12 mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4 text-pink-100/90">Platform</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-pink-100/70 hover:text-pink-100/90 transition-colors duration-200">Features</Link></li>
              <li><Link href="#" className="text-pink-100/70 hover:text-pink-100/90 transition-colors duration-200">Security</Link></li>
              <li><Link href="#" className="text-pink-100/70 hover:text-pink-100/90 transition-colors duration-200">Pricing</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-pink-100/90">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-pink-100/70 hover:text-pink-100/90 transition-colors duration-200">Documentation</Link></li>
              <li><Link href="#" className="text-pink-100/70 hover:text-pink-100/90 transition-colors duration-200">Guides</Link></li>
              <li><Link href="#" className="text-pink-100/70 hover:text-pink-100/90 transition-colors duration-200">Support</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-pink-100/90">Company</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-pink-100/70 hover:text-pink-100/90 transition-colors duration-200">About</Link></li>
              <li><Link href="#" className="text-pink-100/70 hover:text-pink-100/90 transition-colors duration-200">Blog</Link></li>
              <li><Link href="#" className="text-pink-100/70 hover:text-pink-100/90 transition-colors duration-200">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-pink-100/90">Connect</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-pink-100/70 hover:text-pink-100/90 transition-colors duration-200">Twitter</Link></li>
              <li><Link href="#" className="text-pink-100/70 hover:text-pink-100/90 transition-colors duration-200">Discord</Link></li>
              <li><Link href="#" className="text-pink-100/70 hover:text-pink-100/90 transition-colors duration-200">GitHub</Link></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom copyright section with added style */}
        <div className="mt-12 pt-8 border-t border-pink-300/20 text-center">
          <p className="text-pink-100/70">&copy; <CopyrightYear /> Flow Content Platform. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}