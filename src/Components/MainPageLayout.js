import React from 'react'
import Navbar from './Navbar'

export default function MainPageLayout({children}) {

  return (
    <div>
        <Navbar />
        {children}
    </div>
  )
}
