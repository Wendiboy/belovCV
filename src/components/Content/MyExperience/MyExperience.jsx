import React from "react";
import './MyExprerience.css';

const MyExprerience= () => {
    return (
        <div className='MyExprerience'>

            <div className='Education'>
                <h2 className='MyExprerience__header'>Education</h2>
                <div className='Education_list'>
                    <div className='Education__elem'>Бийский лицей</div>
                    <div className='Education__elem'>СГУГиТ</div>
                </div>
            </div>

            <div className='Jobs'>
                <h2 className='MyExprerience__header'>Jobs</h2>
                <div className='Job_list'>
                    <div className='Job__elem'>Colins</div>
                    <div className='Job__elem'>ДСК "Алтай"</div>
                    <div className='Job__elem'>СГУГиТ</div>
                </div>
            </div>
        </div>
    )
}

export default MyExprerience