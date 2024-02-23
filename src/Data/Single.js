import React, { useEffect, useState } from 'react'
import './Single.css'
import { useParams } from "react-router-dom";
import myAxiosInstance from './axios';
import Card from './Card';

function Single() {
    const[cards,setcards]=useState([])
    const params=useParams()
const {id} = params
    console.log(params)

    useEffect(() => {
        myAxiosInstance.get(`/products/${id}`).then((response)=>{
            console.log(response.data,89)
            setcards(response.data)
        })
      
    }, [])
    
    


  return (
    <>
     <div className="product-container">
      <img src={cards?.image} alt="Product Image" />
      <div className="product-info">
      <h2>{cards?.title}</h2>
        
        <p>{cards?.description}</p>
        <h3>{cards?.price}</h3>
        <button className="buy-now-btn">Buy Now</button>
      </div>
    </div>
    </>
  )
}

export default Single