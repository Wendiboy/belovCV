import React from "react";
import './TechnologiesElem.css';

const TechnologiesElem = (props) => {

    const name = props.tech.name;

    return (
        <div className='TechnologiesElem'>
            {name}
        </div>
    )
}

export default TechnologiesElem