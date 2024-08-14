import React from 'react'
import CheckIcon from './icon/CheckIcon'

const Finish = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-10 w-[384px] mt-[140px] mx-auto'>

    <CheckIcon/>
    <p>Good Job!</p>
    <p>Your very first account has been created. Now continue to dashboard and start tracking</p>
    
  </div>
  )
}

export default Finish