import React from "react";
import './Contacts.css';

const Contacts = () => {
    return (
        <div className='Contacts'>
            <h2 className='contacts__header'>Contacts</h2>
            <div className='contacts_list'>
                <span className='Contact_element'>
                    <div className='contact_element__name'>Email</div>
                    <div className='contact_element__text'>mimikrichik@gmail.com</div>
                    <div className='contact_element__icon'></div>
                </span>
                <span className='Contact_element'>
                    <div className='contact_element__name'>Phone</div>
                    <div className='contact_element__text'>+7 996 304 19 12</div>
                    <div className='contact_element__icon'></div>
                </span>
                <span className='Contact_element'>
                    <div className='contact_element__name'>Telegram</div>
                    <div className='contact_element__text'>@wendiboy</div>
                    <div className='contact_element__icon'></div>
                </span>
            </div>
        </div>
    )
}

export default Contacts