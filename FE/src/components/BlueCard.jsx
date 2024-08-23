import React from 'react'
import Image from 'next/image'


const BlueCard = () => {
    return (
        <div className='w-[385px] h-[220px] bg-[#0166FF] rounded-xl'>
            <div>
                <Image
                    src="/components/icon/Noise.svg"
                    width={500}
                    height={500}
                    alt="Picture of the author"
                />
            </div>
        </div>

    )
}

export default BlueCard