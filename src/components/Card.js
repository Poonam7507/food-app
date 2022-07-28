import React from 'react'
import { useState } from 'react';
import '../css/Card.css'
export default function Card({image,rating,product_name,portion,price}) {
  const [isActive,setActive]=useState("false");
  // const [order, setorder] = useState('');
  const Like =()=>{
      setActive(!isActive);
      // setorder({product_name});

  }
  return (
    <>
<div className='card'>
    <div className='images'> {image}</div>
    <div className='description'>
    <div className='top'>
      <div className='rate'>
        
     <i className='fa fa-star'></i> {rating}
      </div>
      <div className='icon'>

      <i className={isActive ? "fa fa-heart-o" : "fa fa-heart"} onClick={Like} ></i>
      </div>
    </div>
    <div className='lower'>
    <div className='lower1'>
    <div>{product_name}</div>
    <div>{portion}</div>
      
      
    </div>
    <div className='lower2'><h3>{price}</h3></div>
    </div>
    </div>
    </div>

   
    </>
  )
}


