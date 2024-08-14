import React from 'react'
import { MoneyIcon } from './icon/MoneyIcon'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


const Currency = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-10 w-[384px] mt-[140px] mx-auto'>

      <MoneyIcon />
      <p>Select base currency</p>

      <Select>
        <SelectTrigger className="w-ful h-[64px]">
          <SelectValue placeholder="MNT Mongolian Tugrik" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1">MNT Mongolian Tigrik</SelectItem>
          <SelectItem value="2">USD United Stated Dollar</SelectItem>

        </SelectContent>
      </Select>
      <p>Your base currency should be the one you use most often. All transaction in other currencies will be calculated based on this one </p>


    </div>
  )
}

export default Currency