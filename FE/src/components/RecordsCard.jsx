import React from 'react'
import HomeIcon from './icon/HomeIcon'

const RecordsCArd = () => {
  return (
    <div className='w-full border-1 border-black  bg-white px-6'>
      <div className=' flex items-center gap-4 w-full border-b border-slate-400 border-solid py-4'>
        <HomeIcon />
        <div>
          <div>Lending and Renting</div>
          <p>3 hours ago</p>
        </div>
      </div>
    </div>

  )
}

export default RecordsCArd