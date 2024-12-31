'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useAppSelector } from '../../lib/redux/hooks'
import { Button } from '@/components/ui/button'
import { useWallet } from '@/lib/wallet'
import { Wallet, Coins, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { setWalletBalance } from '@/lib/redux/walletslice'
import { BrowserProvider, ethers } from "ethers"
import abi from "@/contractInfo/abi.json"
import caddress from "@/contractInfo/address.json"


export default function Navbar() {
  const { address, isConnecting, connect, disconnect } = useWallet()
  // const balance = useAppSelector((state) => state.wallet.balance)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [balance, setBalance] = useState(100)

  const handleWithdraw = async () => {
    // Withdraw logic here (You can call your contract function or any other logic)


    alert('Withdraw function triggered! Implement your logic here.');

    const provider = new BrowserProvider(window.ethereum);
    const signer = await provider.getSigner()
    const account = await signer.getAddress()
    const bal = balance.toString();
    const questContract = new ethers.Contract(caddress.contractAddress, abi.abi, signer)
    // setQuest(questContract);
    // mint();
    // console.log(balance, "========inside withdraw===")

    await (await questContract.mint(account, ethers.parseUnits(parseInt(bal).toString(), 18))).wait();
    alert('Withdraw your earned FLOW coins!');
  };

  const WalletInfo = () => (
    <>
      <motion.div
        className="bg-white/10 backdrop-blur-md rounded-xl px-4 py-2 border border-white/20 flex items-center gap-2"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      >
        <Coins className="w-4 h-4 text-pink-400" />
        <span className="text-white font-medium">
          {balance} <span className="text-pink-400">ODY</span>
        </span>
      </motion.div>

      <motion.div
        className="bg-white/10 backdrop-blur-md rounded-xl px-4 py-2 border border-white/20 flex items-center gap-2"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      >
        <Wallet className="w-4 h-4 text-purple-400" />
        <span className="text-white font-medium">
          {address ? `${address.slice(0, 6)}...${address.slice(-4)}` : 'No Address'}
        </span>
      </motion.div>

      <Button
        variant="ghost"
        className="text-white hover:bg-pink-400/20 border border-pink-300/20 backdrop-blur-md rounded-xl px-6 transition-all duration-200 hover:scale-105"
        onClick={disconnect}
      >
        Disconnect
      </Button>
    </>
  )

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', damping: 20 }}
      className="fixed top-0 left-0 right-0 z-50 px-4 py-6 backdrop-blur-sm"
    >
      <div className="container mx-auto flex justify-between items-center">
        <motion.div
          className="text-2xl font-bold text-white flex items-center space-x-2"
          whileHover={{ scale: 1.05 }}
        >
          <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            Flow Odyssey
          </span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-4">
          <AnimatePresence mode="wait">
            {address ? (
              <motion.div
                key="connected"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex items-center space-x-4"
              >
                <WalletInfo />
              </motion.div>
            ) : (
              <motion.div
                key="connect"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Button
                  variant="ghost"
                  className="text-white hover:bg-pink-400/20 border border-pink-300/20 backdrop-blur-md rounded-xl px-6 transition-all duration-200 hover:scale-105"
                  onClick={() => {
                    connect()
                    setBalance(100)
                  }}
                  disabled={isConnecting}
                >
                  {isConnecting ? 'Connecting...' : 'Connect Wallet'}
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white hover:bg-white/10"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden"
          >
            <div className="container mx-auto py-4">
              {address ? (
                <div className="flex flex-col space-y-4">
                  <motion.div
                    className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 flex items-center gap-2"
                    whileHover={{ scale: 1.02 }}
                  >
                    <Coins className="w-4 h-4 text-pink-400" />
                    <span className="text-white font-medium">
                      {balance} <span className="text-pink-400">ODY</span>
                    </span>
                  </motion.div>

                  <motion.div
                    className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 flex items-center gap-2"
                    whileHover={{ scale: 1.02 }}
                  >
                    <Wallet className="w-4 h-4 text-purple-400" />
                    <span className="text-white font-medium">
                      {address.slice(0, 6)}...{address.slice(-4)}
                    </span>
                  </motion.div>

                  <Button
                    variant="ghost"
                    className="text-white hover:bg-pink-400/20 border border-pink-300/20 backdrop-blur-md rounded-xl p-4 w-full"
                    onClick={() => {
                      disconnect()
                      setIsMobileMenuOpen(false)
                    }}
                  >
                    Disconnect
                  </Button>
                </div>
              ) : (
                <Button
                  variant="ghost"
                  className="text-white hover:bg-pink-400/20 border border-pink-300/20 backdrop-blur-md rounded-xl p-4 w-full"
                  onClick={() => {
                    connect()
                    setWalletBalance(100)
                    setIsMobileMenuOpen(false)
                  }}
                  disabled={isConnecting}
                >
                  {isConnecting ? 'Connecting...' : 'Connect Wallet'}
                </Button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}