import React from "react";
import './MainMenu.css';

const MainMenu = () => {
    return (
        <div className='MainMenu'>
            <ul className='MainMenu__wrapper'>
                <li className='MainMenu__elem'>
                    <a className='MainMenu__elem__button'>
                        about me
                    </a>
                </li>
                <li className='MainMenu__elem'>
                    <a className='MainMenu__elem__button'>
                        my experience
                    </a>
                </li>
                <li className='MainMenu__elem'>
                    <a className='MainMenu__elem__button'>
                        photos
                    </a>
                </li>
                <li className='MainMenu__elem'>
                    <a className='MainMenu__elem__button'>
                        contacts
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default MainMenu