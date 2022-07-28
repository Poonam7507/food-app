import React from 'react'
import Order from './Order'

import '../css/Card.css'
import img1 from '../Assets/img1.jpg'
import img2 from '../Assets/img2.jpg'
import img3 from '../Assets/img3.jpg'
import img4 from '../Assets/img4.jpg'
import img5 from '../Assets/img5.jpg'
import img6 from '../Assets/img6.jpg'
import img7 from '../Assets/img7.jpg'
import img8 from '../Assets/img8.jpg'

export default function Fooditem() {
    const array=[
        {
          id:1,
        //   rating:4.2,
         
          product_name:"Cabage salad",
          portion:'250g' ,
          price:'$4.99',
          // link:"../assets/kurti1.jpg"
          image: <img src={img1} alt=" " />
        },
        {
          id:2,
        //   rating:4.2,
         
          product_name:"Cabage salad",
          portion:'250g' ,
          price:'$4.99',
          // link:"../assets/kurti1.jpg"
          image: <img src={img2} alt=" " />
        },
        {
          id:3,
        //   rating:4.2,
          
          product_name:"Cabage salad",
          portion:'250g' ,
          price:'$4.99',
          // link:"../assets/kurti1.jpg"
          image: <img src={img3} alt=" " />
        },
        {
          id:4,
        //   rating:4.2,
         
          product_name:"Cabage salad",
          portion:'250g' ,
          price:'$4.99',
          // link:"../assets/kurti1.jpg"
          image: <img src={img4} alt=" " />
        },
        {
          id:5,
        //   rating:4.2,
        
          product_name:"Cabage salad",
          portion:'250g' ,
          price:'$4.99',
          // link:"../assets/kurti1.jpg"
          image: <img src={img5} alt=" " />
        },
        {
          id:6,
        //   rating:4.2,
         
          product_name:"Cabage salad",
          portion:'250g' ,
          price:'$4.99',
          // link:"../assets/kurti1.jpg"
          image: <img src={img6} alt=" " />
        },
        {
          id:7,
        //   rating:4.2,
         
          product_name:"Cabage salad",
          portion:'250g' ,
          price:'$4.99',
          // link:"../assets/kurti1.jpg"
          image: <img src={img7} alt=" " />
        },
        {
          id:8,
        //   rating:4.2,
          
          product_name:"Cabage salad",
          portion:'250g' ,
          price:'$4.99',
          // link:"../assets/kurti1.jpg"
          image: <img src={img8} alt=" " />
        },
    ]
  return (
    <div className="product" >
    {
      array.map((array,id)=>{
          return <Order key={id}  image={array.image} product_name={array.product_name} portion={array.portion} price={array.price} 

          />
      
      })
  }

 
  
  </div>
   
  )
}
