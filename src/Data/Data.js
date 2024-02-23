import React, { useEffect, useState } from "react";
import "./Data.css";
import EditModal from "./EditModal";
import axios, { formToJSON } from "axios";
import myAxiosInstance from "./axios";
import Form from "./Form";
import PopupForm from "./Form";
import Card from "./Card";
import { Link } from 'react-router-dom';


const Data = ({ datas }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [id, setId] = useState("");

 
  

  const openModal = (id) => {
    setModalOpen(true);
    setId(id)
  };   
  const closeModal = () => {
    setModalOpen(false);
  };
  
  
  const deleteitem=(id)=>{
    myAxiosInstance.delete(`/products/${id}`);


  }
  
  return (
    <>
     <PopupForm/>
    
      <table className="data-table">
        <thead>
          <tr>
            <th>No</th>
            <th>Title</th>
            <th>Description</th>
           
            <th>image</th>
            <th>price</th>
            <th>edit</th>
            <th>delete</th>
            

            
          </tr>
        </thead>
        <tbody>
          {datas?.map((value, index) => (
            // console.log(value)
            <tr key={value.id}>
              <td>{index + 1}</td>
              <td>{value?.title}</td>
              <td>{value?.description}</td>
              <td>
                <img style={{height:"40px ", width:"40px", objectFit:"cover"}} src={value?.image} />
              </td>
              <td>{value?.price}</td>
              <td>
                <button onClick={()=>openModal(value?._id)}>Edit</button>
              </td>
              <td>
                <button onClick={()=>deleteitem(value?._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
          <EditModal id={id} isOpen={isModalOpen} onClose={setModalOpen} />
         <Link  to={'/card'}>< button style={{marginLeft:"700px"}}>view all products</button></Link> 

          
        
          
    </>
  );
};

// Example usage:

export default Data;
