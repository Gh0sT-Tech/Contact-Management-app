import React from "react";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Route} from "react-router-dom";
//import { Switch } from 'react-router-dom';
import { Routes } from "react-router-dom/dist";
import ContactDetails from "./ContactDetails";


const LOCAL_STORAGE_KEY = "contacts";

function App() {
  const[contacts, setContacts] = useState([]);

  const addContactHandler = (contact) =>{
      console.log(contact)
      setContacts([...contacts, { id: uuidv4(),...contact}])
  }

  function removeContactHandler(id){
      const newContactList = contacts.filter((contact) =>{
        return  contact.id !== id;
      });
      setContacts(newContactList)
  }

  useEffect(() =>{
  const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  if (retrieveContacts) {
    setContacts(retrieveContacts);
  }
},[]);

  useEffect(() =>{
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
  },[contacts])
  
  return (
        <div>
          <Router>
            <Header />

            <Routes>
                <Route
                path="/" 
                exact
                render= {(props) =>(
                  <ContactList
                    {...props}
                    contacts = {contacts} 
                    getContactId = {removeContactHandler}
                  />
                    )}
                />

              <Route 
                path="/add" 
                 render= {(props) =>(
                  <AddContact
                      {...props}
                      addContactHandler= {addContactHandler}
                  />
                   )}
              
                />

                <Route 
                  path="/contact/:id"
                  component={ContactDetails}                
                /> 
            </Routes>
          
          </Router>
        
        </div>
  );
}

export default App;
