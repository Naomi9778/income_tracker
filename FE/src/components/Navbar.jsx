import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import RecordButton from '@/components/icon/RecordButton'
import Vector from '@/components/icon/Vector'
import React from 'react'
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useRouter } from "react"



const Navbar = () => {
    const pathname = usePathname()

    return (
        
        <div className=" w-full bg-white">
            <div className="flex justify-between items-center w-[1216px] mx-auto p-4 bg-white ">
            <div className="flex items-center gap-6  ">
            <Vector />
            <Link href="/dashboard/main" className={pathname.includes('main') && 'font-bold'}>Dashboard</Link>
            <Link href="/dashboard/records" className={pathname.includes('records') && 'font-bold'}>Records</Link>
            </div>
            <div className="flex items-center gap-6 ">
           <button> <RecordButton /></button>
            <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            </div>
        </div>
        </div>
    )
}

export default Navbar