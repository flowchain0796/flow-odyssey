import { useState, useEffect } from 'react';

// Declare global window interface to include ethereum
declare global {
  interface Window {
    ethereum?: any;
  }
}

export function useWallet() {
  const [address, setAddress] = useState<string | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);

  useEffect(() => {
    if (typeof window.ethereum !== 'undefined') {
      const handleAccountsChanged = (accounts: string[]) => {
        if (accounts.length > 0) {
          setAddress(accounts[0]);
        } else {
          setAddress(null);
        }
      };

      window.ethereum.on('accountsChanged', handleAccountsChanged);

      // Cleanup the event listener on unmount
      return () => {
        window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
      };
    }
  }, []);

  const connect = async () => {
    if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
      try {
        setIsConnecting(true);
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAddress(accounts[0]);
      } catch (error) {
        console.error('Failed to connect:', error);
      } finally {
        setIsConnecting(false);
      }
    } else {
      console.error('MetaMask is not installed');
    }
  };

  const disconnect = () => {
    setAddress(null);
  };

  return { address, isConnecting, connect, disconnect };
}