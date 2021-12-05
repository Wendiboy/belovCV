import React from "react";
import './AboutMe.css';
import TechnologiesElem from "./TechnologiesElem/TechnplogiesElem.jsx";

const AboutMe = (props) => {

    let descriprion = props.description;
    let technologiesElements = () => {
        let techArr = props.technologies.map(u => <TechnologiesElem key={u.id} tech={u} />);
        return techArr
    }
    let skillsElements = () => {
        let skillsArr = props.skills.map(u => <div className='skills__elem' key={u.id}>{u}</div>);
        return skillsArr
    }
    let langElements = () => {
        let langArr = props.languages.map(u => <div className='lang__item' key={u.id}>{u}</div>);
        return langArr
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
                {skillsElements()}
            </div>
            <h2 className='AboutMe__header'>Languages</h2>
                {langElements()}
        </div>
    )
}

export default AboutMe