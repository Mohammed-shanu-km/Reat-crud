import { useEffect, useState } from 'react';
import './Data.css'
import apiinstance from './axios'

const EditModal = ({id, isOpen, onClose }) => {
    console.log(id);
    const[values,setvalues]=useState([]);
    const [inputValue, setInputValue] = useState('');
    

    console.log(values)
    useEffect(() => {
        apiinstance.get(`/products/${id}`).then((response)=>{
            // console.log(Response.data.products);
            console.log(response.data,78);
            setvalues(response.data);
          })
    }, [id])
   
    
    const handleChange = (e)=>{
        const name = e.target.name
        const value=e.target.value
        setInputValue({...inputValue,[name]:value})
    }
    console.log(inputValue);

    const editbutton=()=>{
      apiinstance.put(`/products/${id}`,inputValue).then((response)=>{
        console.log(response.data)
        onclose(false)

      }).catch((err)=>{
        console.log("error"+err);
      })
    }
    return (
       
      
      isOpen && (
        
        
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={()=>onClose(false)}>&times;</span>
            <p>change</p>
        
            <label for="field1">title</label>
    <input type="text" id="field1" name="title" onChange={handleChange} defaultValue={values?.title} required/>
     
     <label for="field2">description</label>

    <input type="text" id="field2" name="description"
    defaultValue={values?.description} onChange={handleChange} required/>
    
    {/* // onChange={(e) => setInputValue(e.target.value)}   */}
    
    
    <label for="field2">price</label>
    <input  type="text" id="field2" name="price" onChange={handleChange}   defaultValue={values?.price} required/>

    


    

    <input onClick={editbutton} type="submit" value="Submit"/>
    
            
 
            

          </div>
        </div>
        
      )
    );
  };

  export default EditModal