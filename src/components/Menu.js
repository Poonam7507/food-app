import React from 'react'
import Fooditem from './Fooditem'

import Selected from './Selected'
import '../css/Stylemenu.css'

export default function Menu() {
  return (
    <>

    <div className='menu-container'>
        <div className='menu-heading'><h2>Menu</h2></div>
        <div className='menu-item'>
          <Fooditem/>
        </div>
        <div className='my-order'><Selected/></div>
    </div>
    </>
  )
}
