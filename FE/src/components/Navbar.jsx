import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import RecordButton from './icon/RecordButton'
import Vector from './icon/Vector'
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Dialog, DialogClose, DialogContent, DialogDescripÏtion, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { Calendar } from "./ui/calendar"
import { CalendarIcon } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import { cn } from "@/lib/utils"




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
                                <div className="flex ">
                                    <div>
                                        <Button>Income</Button>
                                        <Button>Expense</Button>
                                        <div>
                                            <p>Amount</p>
                                            <Input />
                                        </div>

                                        <div>
                                            <p>Category</p>
                                            <Input />
                                        </div>
                                        <div>
                                            <p>Date</p>
                                            <Popover>
                                                <PopoverTrigger asChild>
                                                    <Button
                                                        variant={"outline"}
                                                        className={cn(
                                                            "w-[280px] justify-start text-left font-normal",
                                                            // !date && "text-muted-foreground"
                                                        )}
                                                    >
                                                        <CalendarIcon className="mr-2 h-4 w-4" />
                                                        {/* {date ? format(date, "PPP") : <span>Pick a date</span>} */}
                                                    </Button>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-auto p-0">
                                                    <Calendar
                                                        mode="single"
                                                        // selected={date}
                                                        // onSelect={setDate}
                                                        initialFocus
                                                    />
                                                </PopoverContent>
                                            </Popover>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <p>Payee</p>
                                            <Input/>
                                        </div>
                                        <div>
                                            <p>Note</p>
                                            <Input/>
                                        </div>
                                    </div>
                                </div>

                                <DialogFooter className="sm:justify-start">
                                    <DialogClose asChild>
                                        <Button type="button" variant="secondary">
                                            Close
                                        </Button>
                                    </DialogClose>
                                </DialogFooter>
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





