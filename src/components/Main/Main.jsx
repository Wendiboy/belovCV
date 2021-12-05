import React from "react";
import './Main.css';

const Main = () => {
    return (
        <div className='Main'>
            <div className='Main__wrapper'>
                <div className='Main__photo'>

                </div>
                <div className='Main__info'>
                    <div className='fullname'>Mikhail Belov</div>
                    <div className='job_title'>Frontend developer</div>
                    <div className='mail'>mimikrichik@gmail.com</div>
                    <div className='phone'>+7 996 304 19 12</div>
                    <div className='location'>Novosibirsk</div>
                    <div className='social_networks'>
                        <span className='github'></span>
                        <span className='instagram'></span>
                        <span className='vk'></span>
                        <span className='telegram'></span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Main