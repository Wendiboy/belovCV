import React from "react";
import './MainMenu.css';
import {NavLink} from "react-router-dom";

const MainMenu = () => {
    return (
        <div className='MainMenu'>
            <ul className='MainMenu__wrapper'>
                <li className='MainMenu__elem'>
                    <NavLink className='MainMenu__elem__button' to='/'>
                        about me
                    </NavLink>
                </li>
                <li className='MainMenu__elem'>
                    <NavLink className='MainMenu__elem__button' to='/experience'>
                        my experience
                    </NavLink>
                </li>
                <li className='MainMenu__elem'>
                    <NavLink className='MainMenu__elem__button' to='/photos'>
                        photos
                    </NavLink>
                </li>
                <li className='MainMenu__elem'>
                    <NavLink className='MainMenu__elem__button' to='/contacts'>
                        contacts
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default MainMenu