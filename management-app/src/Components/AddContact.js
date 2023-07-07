import React from 'react';
import "./App.css";
import { useState } from 'react';


function AddContact(props) {
  const [state, setState] = useState({
    name: "",
    email: ""
  })

  const add = (e) =>{
      e.preventDefault();
      if (state.name === "" || state.email === "") {
            alert("Please fill in the required fields!");
      }
      props.addContactHandler(state);
      setState({
        name:"",
        email:""
      })
      props.history.push("/");
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  return (  
    <div className='addcontact-container'>
    <div className='addcontact-content'>
        <h2>AddContact</h2>
        <form onSubmit={add}>
            <div className='name-content'>
                <label>Name</label><br/><br/>
                <input type="text" 
                name = "name"
                placeholder='Name' 
                value={state.name}
                onChange={handleInputChange}
                />
            </div>
            <div className='email-content'>
                <label>Email</label><br/><br/>
                <input type='email'
                name ="email"
                 placeholder='Name'
                 value={state.email}
                onChange={handleInputChange}
                />
            </div>
           <button>Add</button>
        </form>
    </div>
</div>    
  )
}

export default AddContact
