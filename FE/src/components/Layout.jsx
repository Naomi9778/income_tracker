import React, { useEffect } from 'react'
import Navbar from './Navbar'
import { useRouter } from 'next/router'

export const LayOut = ({children}) => {
  
  return (
    
    <div>
     <Navbar/>
     {children}
    </div>
  )
}

