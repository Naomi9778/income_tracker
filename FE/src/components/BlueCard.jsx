import React from 'react'
import Image from 'next/image'
import Large from '../assets/Large.png'


const BlueCard = () => {
    return (
        <div className='w-[385px] h-[220px] bg-[#0166FF] rounded-xl'>
            <div>
                <Image
                    src={Large}
                    width={500}
                    height={500}
                    alt="Picture of the author"
                />
            </div>
        </div>

    )
}

export default BlueCard