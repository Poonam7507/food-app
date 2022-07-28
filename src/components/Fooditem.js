import React from 'react'
import Card from './Card'
import img1 from '../Assets/img1.jpg'
import img2 from '../Assets/img2.jpg'
import img3 from '../Assets/img3.jpg'
import img4 from '../Assets/img4.jpg'
import img5 from '../Assets/img5.jpg'
import img6 from '../Assets/img6.jpg'
import img7 from '../Assets/img7.jpg'
import img8 from '../Assets/img8.jpg'

export default function Fooditem() {
    const arr=[
        {
          id:1,
          rating:4.2,
         
          product_name:"Cabage salad",
          portion:'250g' ,
          price:'$4.99',
          // link:"../assets/kurti1.jpg"
          image: <img src={img1} alt=" " />
        },
        {
          id:2,
          rating:4.2,
         
          product_name:"Cabage salad",
          portion:'250g' ,
          price:'$4.99',
          // link:"../assets/kurti1.jpg"
          image: <img src={img1} alt=" " />
        },
        {
          id:3,
          rating:4.2,
          
          product_name:"Cabage salad",
          portion:'250g' ,
          price:'$4.99',
          // link:"../assets/kurti1.jpg"
          image: <img src={img1} alt=" " />
        },
        {
          id:4,
          rating:4.2,
         
          product_name:"Cabage salad",
          portion:'250g' ,
          price:'$4.99',
          // link:"../assets/kurti1.jpg"
          image: <img src={img1} alt=" " />
        },
        {
          id:5,
          rating:4.2,
        
          product_name:"Cabage salad",
          portion:'250g' ,
          price:'$4.99',
          // link:"../assets/kurti1.jpg"
          image: <img src={img1} alt=" " />
        },
        {
          id:6,
          rating:4.2,
         
          product_name:"Cabage salad",
          portion:'250g' ,
          price:'$4.99',
          // link:"../assets/kurti1.jpg"
          image: <img src={img1} alt=" " />
        },
        {
          id:7,
          rating:4.2,
         
          product_name:"Cabage salad",
          portion:'250g' ,
          price:'$4.99',
          // link:"../assets/kurti1.jpg"
          image: <img src={img1} alt=" " />
        },
        {
          id:8,
          rating:4.2,
          
          product_name:"Cabage salad",
          portion:'250g' ,
          price:'$4.99',
          // link:"../assets/kurti1.jpg"
          image: <img src={img1} alt=" " />
        },
    ]
  return (
    <div className="product" >{
      arr.map((arr,id)=>{
          return <Card key={id} rating={arr.rating} fav={arr.fav} image={arr.image} product_name={arr.product_name} portion={arr.portion} price={arr.price} 

          />
      
      })
  }
  </div>
   
  )
}
