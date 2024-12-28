import { useState, useEffect } from 'react'

declare global {
  interface Window {
    ethereum?: any
  }
}

export function useWallet() {
  const [address, setAddress] = useState<string | null>(null)
  const [isConnecting, setIsConnecting] = useState(false)

  useEffect(() => {
    if (typeof window.ethereum !== 'undefined') {
      window.ethereum.on('accountsChanged', (accounts: string[]) => {
        if (accounts.length > 0) {
          setAddress(accounts[0])
        } else {
          setAddress(null)
        }
      })
    }
  }, [])

  const connect = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        setIsConnecting(true)
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
        setAddress(accounts[0])
      } catch (error) {
        console.error('Failed to connect:', error)
      } finally {
        setIsConnecting(false)
      }
    } else {
      console.error('MetaMask is not installed')
    }
  }

  const disconnect = () => {
    setAddress(null)
  }

  return { address, isConnecting, connect, disconnect }
}

