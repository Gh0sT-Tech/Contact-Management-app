import React from 'react'
import user from "../Images/img 1.png";


function ContactDetails(props) {
  return (
    <div>
        <div className='details-container'>
            <div className='details-img'>
                    <img src={user} alt='user  '/>
            </div>
            <div className='details-content'>
                <div className='details-header'>Elano</div>
                <div className='details-description'>elano@gmail.com</div>
            </div>
        </div>
    </div>
  )
}

export default ContactDetails