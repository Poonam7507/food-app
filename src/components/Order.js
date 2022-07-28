import React from 'react'
import '../css/Order.css'
import { useState } from 'react'

export default function Order({image,product_name,portion,price}) {
   
    const [order, setorder] = useState(1)
    const [cost, setcost] = useState(price)
    const [total, settotal] = useState(3)
    const Add=()=>{
        setorder(order + 1);
        if(cost===0){
            setcost(price)
        }
        else{
        setcost(Math.abs(cost + price))
    }
    settotal(total + cost);
    }
    const Sub=()=>{
        if(order!==0){
        setorder(order - 1)}
        if(cost<price){
            setcost(cost)
        }
        else{
        setcost(Math.abs(cost -price))
        }
        // settotal(total + cost);
    }
    
  
    
  return (
    <>
    
    <div className='box'>
    {image}
    <div className='mid'>
        <div>{product_name}</div>
        <div>{portion}</div>
    </div>
    <div className='inc'><btn className="btn1" onClick={Add}>+</btn>{order} <btn className="btn2" onClick={Sub}> -</btn>  </div>
    <div>${cost}</div>
    <div> <btn> <i className='fa fa-times'></i></btn></div>

    </div>
   
    </>
  )
}
