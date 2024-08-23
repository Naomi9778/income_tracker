import React from 'react'
import { ArrowUp } from './icon/ArrowUp'



const IncomeCard = () => {
    return (
        <div className=' flex flex-col gap-4 w-[385px] bg-white rounded-xl'>
            <div className=' flex items-center px-6 py-4 gap-2 border-b-4 border-gray-50'>
                <div className='w-2 h-2 rounded-full bg-[#84CC16]'></div>
                <span className='font-semibold text-base leading-6'>Your income</span>
            </div>
            <div className='flex flex-col px-6 py-5 gap-4 '>
                <div>
                    <div className='flex flex-row gap-1'>
                        <p className='text-4xl leading-10 font-semibold'>1,200,000</p>
                        <p className='text-4xl leading-10 font-semibold'>₮</p>
                    </div>
                    <div className='text-lg text-[#64748B] leading-6'>Your income Amount</div>
                </div>
                <div className='flex gap-2'>
                   <div> <ArrowUp/></div>
                    <p>32% from last month</p>
                </div>
            </div>
        </div>
    )
}


export default IncomeCard