import React, {  useState } from 'react';
import './Form.css'
import apiinstance from './axios'

const PopupForm = () => {
  const [isFormVisible, setFormVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');
  
 console.log(inputValue)

  
  

const change=(e)=>{
    const name=e.target.name;
   
    const value=e.target.value;
    setInputValue({...inputValue,[name]:value})


}
  
  
  
const submitbutton=()=>{
    apiinstance.post(`/products`,inputValue)

    




}



  const handleToggleForm = () => {
    setFormVisible(!isFormVisible);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    // ...
    // After submitting the form, you may want to close the popup
    setFormVisible(false);
  };

  return (
    <>
    <div>
      <button onClick={handleToggleForm}>Open Form</button>
      {isFormVisible && (
        <div className="popup-container">
          <div className="popup">
            <form onSubmit={handleSubmit}>
              {/* Your form fields go here */}
              <label>
                title
                <input type="text" name="title"  onChange={change}  />
              </label>
              <br />
              <label>
                description
                <input type="text" name="description"  onChange={change}   />
              </label>
              {/* Add other form fields as needed */}
              <br />
              <label>
                price
                <input type="text" name="price"  onChange={change}   />
              </label>
              <label>
                image
                <input type="text" name="image"  onChange={change}   />
              </label>
              <button onClick={submitbutton} type="submit">Submit</button>
            </form>
            <button onClick={handleToggleForm}>Close Form</button>
          </div>
        </div>
      )}
    </div>
    </>
  );
};
export default PopupForm;