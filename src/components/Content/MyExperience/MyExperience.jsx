import React from "react";
import './MyExprerience.css';

const MyExprerience= () => {
    return (
        <div className='MyExprerience'>

            <div className='Education'>
                <h2 className='MyExprerience__header'>Education</h2>
                <div className='Education_list'>
                    <div className='Education__elem'>
                        <div className='elem__name'>Бийский лицей</div>
                        <div className='elem__date'>2007-2018</div>
                    </div>
                    <div className='Education__elem'>
                        <div className='elem__name'>СГУГиТ (Бакалавр)</div>
                        <div className='elem__date'>2018-2022</div>
                    </div>
                </div>
            </div>

            <div className='Jobs'>
                <h2 className='MyExprerience__header'>Jobs</h2>
                <div className='Job_list'>
                    <div className='Job__elem'>
                        <div className='elem__name'>Colins</div>
                        <div className='elem__date'>02.2019 - 06.2019</div>
                    </div>
                    <div className='Job__elem'>
                        <div className='elem__name'>ДСК "Алтай"</div>
                        <div className='elem__date'>06.2021 - 07.2021</div>

                    </div>
                    <div className='Job__elem'>
                        <div className='elem__name'>СГУГиТ</div>
                        <div className='elem__date'>09.2021</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyExprerience