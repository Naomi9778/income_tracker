
import React from 'react'
import RecordsCArd from './RecordsCard'

const LastRecords = () => {
  return (
    <div className=" w-full bg-white mt-[40px] ">
      <div className="flex justify-between items-center w-[1216px] p-6  ">
        <div className="flex items-center gap-6 font-semibold   ">Last Records
        </div>
      </div>
      <div className='flex flex-col gap-4 '>
      <RecordsCArd/>
      <RecordsCArd/>
      </div>
    </div>
  )
}

export default LastRecords