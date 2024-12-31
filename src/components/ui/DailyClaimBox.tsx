'use client'

import { motion } from 'framer-motion'
import { useAppSelector, useAppDispatch } from '@/lib/redux/hooks'
import { claimDaily } from '@/lib/redux/exploreslice'
import { Button } from '@/components/ui/button'
import { BrowserProvider, ethers } from "ethers"
import abi from "@/contractInfo/abi.json"
import caddress from "@/contractInfo/address.json"

export default function DailyClaimBox() {
  const dispatch = useAppDispatch()
  const { day, claimed } = useAppSelector((state) => state.explore.dailyClaim)

  const handleClaim = () => {
    dispatch(claimDaily())
    handleWithdraw();
  }

  const handleWithdraw = async () => {
    // Withdraw logic here (You can call your contract function or any other logic)


    alert('Withdraw function triggered! Implement your logic here.');

    const provider = new BrowserProvider(window.ethereum);
    const signer = await provider.getSigner()
    const account = await signer.getAddress()
    const bal = "100";
    const questContract = new ethers.Contract(caddress.contractAddress, abi.abi, signer)
    // setQuest(questContract);
    // mint();
    // console.log(balance, "========inside withdraw===")

    await (await questContract.mint(account, ethers.parseUnits(parseInt(bal).toString(), 18))).wait();
    alert('Withdraw your earned FLOW coins!');
  };


  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md mx-auto"
    >
      <h3 className="text-2xl font-semibold text-[#2D3748] mb-4">Daily Reward</h3>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-[#4A5568]">Day {day}</span>
          <span className={`text-sm font-medium ${claimed ? 'text-green-600' : 'text-[#4A5568]'}`}>
            {claimed ? 'Claimed' : 'Available'}
          </span>
        </div>
        <div className="h-2 bg-[#2D3748]/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-[#2D3748]/30"
            initial={{ width: '0%' }}
            animate={{ width: claimed ? '100%' : '0%' }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <Button
          className="w-full bg-[#2D3748]/10 hover:bg-[#2D3748]/20 text-[#2D3748] border border-[#2D3748]/20 backdrop-blur-sm"
          onClick={handleClaim}
          disabled={claimed}
        >
          {claimed ? 'Claimed Today' : 'Claim Now'}
        </Button>
      </div>
    </motion.div>
  )
}

