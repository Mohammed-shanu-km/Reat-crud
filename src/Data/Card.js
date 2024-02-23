import React, { useEffect, useState } from 'react'
import './Card.css'
import myAxiosInstance from './axios'
import { Link } from 'react-router-dom';


function Card() {
    

   
    const[carddata,setcarddata]=useState([]);
    console.log(carddata);
    const[indexs,setindexs]=useState('')
   

  
    useEffect(() => {
        myAxiosInstance.get(`/products`).then((Response)=>{
            
            setcarddata(Response?.data);
            setindexs(carddata.id)
            console.log(indexs)
           
           
           

        })
     
    }, [])
    
    
    
  return (
    
    <>
    <div className='card-main'>

    
    { carddata.map((item)=>(
        
    <Link  to={`/singlepage/${item?._id}`}> <div className="card">
         <img src={item?.image}  alt="Product" className="card-image" />
       
         <div className="title">{item?.title}</div>
         <div className="description">{item?.description}</div>
         <div className="price">{item?.price}</div>
        

       </div>
       </Link> 
      
       

    ))
        
        
    }
    </div>
   
    
    </>
  )
}

export default Card