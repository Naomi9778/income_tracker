import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import RecordButton from '@/components/icon/RecordButton'
import Vector from '@/components/icon/Vector'
import React from 'react'


const Navbar = () => {
    return (
        <div className="flex justify-between items-center w-[1216px] mx-auto p-4 ">
            <div className="flex items-center gap-6  ">
            <Vector />
            <p className="font-semibold">Dashboard</p>
            <p>Record</p>
            </div>
            <div className="flex items-center gap-6 ">
            <RecordButton />
            <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            </div>
        </div>
    )
}

export default Navbar