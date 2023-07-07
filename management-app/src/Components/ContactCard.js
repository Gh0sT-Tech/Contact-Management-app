import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';

function ContactCard(props) {
    const { id, name, email} = props.contact;
  return (
    <div className='contacts-container'>
    <div className='contact-content'>
        <AccountCircleIcon sx={{ fontSize: "50px" }}/>
        <div className='contact-item'>
            <Link to ={`/contnp act/${id}`}>
                <div>
                <div className='name-content'>{name}</div>
                 <div className='email-content'>{email}</div>
                </div>
            </Link>
        </div>
       
    </div>
    <DeleteIcon sx={{ fontSize: "30px" }} 
        onClick ={() => props.deleteContactHandler(id)}
    />           
</div>
  )
}

export default ContactCard