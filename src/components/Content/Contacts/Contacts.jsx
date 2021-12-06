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
                    <img className='contact_element__icon' src={`https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.onlinewebfonts.com%2Fsvg%2Fimg_184197.png&f=1&nofb=1`}></img>
                </span>
                <span className='Contact_element'>
                    <div className='contact_element__name'>Phone</div>
                    <div className='contact_element__text'>+7 996 304 19 12</div>
                    <img className='contact_element__icon' src={`https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwebstockreview.net%2Fimages%2Fphone-icon-png-3.png&f=1&nofb=1`}></img>
                </span>
                <span className='Contact_element'>
                    <div className='contact_element__name'>Telegram</div>
                    <div className='contact_element__text'>@wendiboy</div>
                    <img className='contact_element__icon' src={`https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn.onlinewebfonts.com%2Fsvg%2Fimg_1703.png&f=1&nofb=1`}></img>
                </span>
            </div>
        </div>
    )
}

export default Contacts