import React from 'react'
import '../css/Order.css'
import { useState } from 'react'

export default function Order({image,product_name,portion,price}) {
    // const [order, setorder] = useState('');
    // const select=()=>{
    //     setorder({product_name})
    // }
  return (
    <>
    
    <div className='box'>
    {image}
    <div className='mid'>
        <div>{product_name}</div>
        <div>{portion}</div>
    </div>
    <div className='inc'><btn className="btn1">+</btn><btn className="btn2"> -</btn>  </div>
    <div>{price}</div>
    <div> <btn> <i className='fa fa-times'></i></btn></div>
    </div>
    </>
  )
}
