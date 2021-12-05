import React from "react";
import './MainMenu.css';

const MainMenu = () => {
    return (
        <div className='MainMenu'>
            <div className='MainMenu__wrapper'>
                <span className='about_me'>about me</span>
                <span className='experience'>my experience</span>
                <span className='photos'>photos</span>
                <span className='contacts'>contacts</span>
            </div>
        </div>
    )
}

export default MainMenu