import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import RecordButton from '@/components/icon/RecordButton'
import Vector from '@/components/icon/Vector'
import React from 'react'
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useRouter } from "react"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"
import { Input } from "./ui/input"
import { Button } from "./ui/button"



const Navbar = () => {
    const pathname = usePathname()

    return (

        <div className=" w-full bg-white">
            <div className="flex justify-between items-center w-[1216px] mx-auto p-4 bg-white ">
                <div className="flex items-center gap-6  ">
                    <Vector />
                    <Link href="/dashboard/main" className={pathname.includes('main') && 'font-semibold'}>Dashboard</Link>
                    <Link href="/dashboard/records" className={pathname.includes('records') && 'font-semibold'}>Records</Link>
                </div>
                <div className="flex items-center gap-6 ">
                    <div className="flex items-center gap-6">
                        <Dialog className="">
                            <DialogTrigger asChild>
                                <button><RecordButton /></button>
                            </DialogTrigger>
                            <DialogContent className="p-0 sm:max-w-md min-w-[768px]">
                                <DialogHeader className="py-5 px-6 flex flex-row justify-between border-b-[1px] items-center border-[#D1D5DB] ">
                                    <DialogTitle>Add record</DialogTitle>

                                </DialogHeader>

                                {/* <DialogFooter className="sm:justify-start">
                        <DialogClose asChild>
                            <Button type="button" variant="secondary">
                                Close
                            </Button>
                        </DialogClose>
                    </DialogFooter> */}
                            </DialogContent>
                        </Dialog>
                    </div>
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