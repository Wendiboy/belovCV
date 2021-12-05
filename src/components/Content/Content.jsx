import React from "react";
import './Content.css';
import AboutMe from "./AboutMe/AbouteMe.jsx";
import MyExprerience from "./MyExperience/MyExperience.jsx";
import Photos from "./Photos/Photos.jsx";
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";

const Content = () => {
    return (
        <div className='Content'>

            <Routes>
                <Route path="/photos" element={<Photos />}/>
                <Route path="/experience" element={<AboutMe />}/>
                <Route path="*" element={<AboutMe />}/>
            </Routes>
        </div>
    )
}

export default Content