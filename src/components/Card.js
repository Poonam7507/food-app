import React from 'react'
import { useState } from 'react';
import '../css/Card.css'
export default function Card({image,rating,fav,product_name,portion,price}) {
  const [isActive,setActive]=useState("false");
  const Like =()=>{
      setActive(!isActive);
  }
  return (
    <>
<div className='product'>
    <div>{image}</div>
    <div className='description'>
    <div className='top'>
      <div>
        
     <i className='fa fa-star'> {rating}</i>
      </div>
      <div className='icon'>

      <i className={isActive ? "fa fa-heart-o" : "fa fa-heart"} onClick={Like} ></i>
      </div>
    </div>
    <div className='lower1'>
    <div>{product_name}</div>
    <div>{portion}</div>
      
      
    </div>
    <div className='lower2'><h3>{price}</h3></div>
    </div>
    </div>
    </>
  )
}
