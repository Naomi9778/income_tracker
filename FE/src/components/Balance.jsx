import React from 'react'
import CoinIcon from './icon/CoinIcon'
import { Input } from './ui/input'


const Balance = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-10 w-[384px] mt-[140px] mx-auto'>

    <CoinIcon />
    <p>Set up your cash Balance</p>
    <Input type="text" className="w-full h-[48px] bg-[#F3F4F6]" />
    <p>How much cash do you have in your wallet?</p>
    
  </div>
  )
}

export default Balance