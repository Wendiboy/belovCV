import React from "react";
import './Photos.css';

const Photos= (props) => {
    return (
        <div className='Photos'>
            <h2 className='Photos__title'>Photos</h2>
            <div className='Photos__wrapper'>
                <span className='Photo__elem'>
                    <span className='image'>
                        <img src={props.photos[1]}></img>
                        {console.log(props.photos[1])}
                    </span>
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