import React from "react";
import './Main.css';

const Main = () => {
    return (
        <div className='Main'>
            <div className='Main__wrapper'>
                <div className='Main__photo'>
                    <img className='Main__img' src={`https://sun1-26.userapi.com/s/v1/if1/kcJABZkFFjPepTPins4WmI7knL1B1IecbKN3haukrwi-Nw79guj5ItPVEfPjuYCM08Kz3t1K.jpg?size=200x200&quality=96&crop=412,0,1707,1707&ava=1`}>
                    </img>

                </div>
                <div className='Main__info'>
                    <div className='fullname'>Mikhail Belov</div>
                    <div className='job_title'>Frontend developer</div>
                    <div className='mail'>mimikrichik@gmail.com</div>
                    <div className='phone'>+7 996 304 19 12</div>
                    <div className='location'>Novosibirsk</div>
                    <div className='social_networks'>
                        <span className='github'>
                            <img className='github_img' src={`https://cdn.onlinewebfonts.com/svg/img_44605.png`}></img>
                        </span>
                        <span className='instagram'>
                            <img className='instagram_img' src={`https://cdn3.iconfinder.com/data/icons/social-network-30/512/social-03-512.png`}></img>
                        </span>
                        <span className='vk'>
                            <img className='vk_img' src={`https://www.iconpacks.net/icons/2/free-vkontakte-logo-icon-2443-thumb.png`}></img>
                        </span>
                        <span className='telegram'>
                            <img className='telegram_img' src={`https://e7.pngegg.com/pngimages/865/299/png-clipart-social-media-telegram-computer-icons-social-media-blue-angle-thumbnail.png`}></img>
                        </span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Main