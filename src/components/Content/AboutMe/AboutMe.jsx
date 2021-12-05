import React from "react";
import './AboutMe.css';
import TechnologiesElem from "./TechnologiesElem/TechnplogiesElem.jsx";

const AboutMe = (props) => {

    let descriprion = props.description;
    let technologiesElements = () => {
        let techArr = props.technologies.map(u => <TechnologiesElem key={u.id} tech={u} />);
        return techArr
    }

    return (
        <div className='AboutMe'>
            <h2 className='AboutMe__header'>About me</h2>
            <p className='AboutMe__text'>{descriprion}
            </p>
            <h2 className='AboutMe__header'>What I do</h2>
            <div className='technologies_list'>
                {technologiesElements()}
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