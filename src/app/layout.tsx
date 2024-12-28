"use client"
import { Inter } from 'next/font/google'
import "./globals.css"
import { Provider } from 'react-redux'
import { store } from '@/lib/redux/store'

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <Provider store={store}>
      <body className={`${inter.className} bg-[#a8c0d3]`}>{children}</body>
        </Provider>
      
    </html>
  )
}
