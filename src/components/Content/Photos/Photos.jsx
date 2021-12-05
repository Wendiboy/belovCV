import React from "react";
import './Photos.css';
import PhotoElem from "./PhotoElem/PhotoElem.jsx";

const Photos= (props) => {
    return (
        <div className='Photos'>
            <h2 className='Photos__title'>Photos</h2>
            <div className='Photos__wrapper'>

                {props.photos.map(p => <PhotoElem photo={p} />)}



                {/*<span className='Photo__elem'>*/}
                {/*    <span className='image'>*/}
                {/*        <img src={props.photos[1]}></img>*/}
                {/*        {console.log(props.photos[1])}*/}
                {/*    </span>*/}
                {/*</span>*/}

            </div>
        </div>
    )
}

export default Photos