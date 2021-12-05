import React from "react";
import './PhotoElem.css';

const PhotoElem = (props) => {

    return(
        <span className='Photo__elem'>
            <span className='image'>
                <img src={props.photo} ></img>
            </span>
        </span>
    )
}

export default PhotoElem


