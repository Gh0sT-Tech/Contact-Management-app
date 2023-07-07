import React from 'react'
import "./App.css";
import ContactCard from './ContactCard';
import { Link } from 'react-router-dom';
function ContactList(props) {

  function deleteContactHandler(id){
    props.getContactId(id);
  }
    const renderContacts = props.contacts.map((contact) =>{
        return(
           <ContactCard contact={contact} 
           deleteContactHandler={deleteContactHandler}
            key={contact.id}
           />
        )
    })
  return (
    <div className='contactlist-container'>
        <div className='contactlist-content'>
          <div className='list-items'>
              <h2>Contact List</h2>
              <Link to='/add'><button>Add Contact</button></Link>
          </div>
           

            {renderContacts}
        </div>
    </div>
  )
}

export default ContactList