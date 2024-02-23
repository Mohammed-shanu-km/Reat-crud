import React, { useEffect, useState } from 'react'


import axios from 'axios';
import Data from './Data/Data';
import apiinstance from './Data/axios'
import Card from './Data/Card';



function App() {
  const[data,setdata]=useState([]);
 

  useEffect(() => {
apiinstance.get('/products').then((Response)=>{
  // console.log(Response.data.products);
  setdata(Response?.data)
}).catch((err)=>{
  console.log("error"+err);
})

    
  }, [])


  console.log(data)
  
  
  return (
    <div>
      <Data datas={data} />
     
      
    </div>
  )
}

export default App
