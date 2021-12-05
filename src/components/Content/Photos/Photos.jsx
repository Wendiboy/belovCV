import React from "react";
import './Photos.css';

const Photos= () => {
    return (
        <div className='Photos'>
            <h2 className='Photos__title'>Photos</h2>
            <div className='Photos__wrapper'>
                <span className='Photo__elem'>
                    <span className='image'></span>
                </span>
                <span className='Photo__elem'>
                    <span className='image'></span>
                </span>
                <span className='Photo__elem'>
                    <span className='image'></span>
                </span>
                <span className='Photo__elem'>
                    <span className='image'></span>
                </span>
                <span className='Photo__elem'>
                    <span className='image'></span>
                </span>
                <span className='Photo__elem'>
                    <span className='image'></span>
                </span>
            </div>
        </div>
    )
}

export default Photos