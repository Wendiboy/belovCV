import React from "react";
import './AboutMe.css';

const AboutMe = () => {
    return (
        <div className='AboutMe'>
            <h2 className='AboutMe__header'>About me</h2>
            <p className='AboutMe__text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
                aspernatur, aut consectetur dicta iure molestiae nam obcaecati odio omnis optio quo,
                repellendus rerum similique sint tenetur totam vel voluptas. Praesentium!
            </p>
            <h2 className='AboutMe__header'>What I do</h2>
            <div className='technologies_list'>
                <div className='technologies__elem'>React</div>
                <div className='technologies__elem'>HTML</div>
                <div className='technologies__elem'>CSS</div>
            </div>
            <h2 className='AboutMe__header'>Key skills</h2>
            <div className='skills_list'>
                <div className='skills__elem'>Ответственность</div>
                <div className='skills__elem'>Усидчивость</div>
                <div className='skills__elem'>Стрессоустойчивость</div>
                <div className='skills__elem'>Пользователь ПК</div>
            </div>
            <h2 className='AboutMe__header'>Languages</h2>
                <div className='lang__item'>Русский — Родной</div>
                <div className='lang__item'>Английский — B2 — Средне-продвинутый</div>
        </div>
    )
}

export default AboutMe