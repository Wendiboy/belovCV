import React from "react";
import './Content.css';
import AboutMe from "./AboutMe/AboutMe.jsx";
import MyExprerience from "./MyExperience/MyExperience.jsx";
import Photos from "./Photos/Photos.jsx";
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';

const Content = () => {

    const description = useSelector(state => state.infoPage.description)
    const technologies = useSelector(state => state.infoPage.technologies)
    const skills = useSelector(state => state.infoPage.keyskills)
    const languages = useSelector(state => state.infoPage.languages)

    return (
        <div className='Content'>
            <Routes>
                <Route path="/photos" element={<Photos />}/>
                <Route path="/experience" element={<MyExprerience />}/>
                <Route path="*" element={<AboutMe description={description} technologies={technologies} skills={skills} languages={languages}/>}/>
            </Routes>
        </div>
    )
}

export default Content