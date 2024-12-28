'use client'

import { Inter } from 'next/font/google'
import { Provider } from 'react-redux'
import { store } from '@/lib/redux/store'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>
          {children}
        </Provider>
      </body>
    </html>
  )
}
