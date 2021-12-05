import React from "react";
import './Content.css';
import AbouteMe from "./AboutMe/AbouteMe.jsx";
import MyExprerience from "./MyExperience/MyExperience.jsx";

const Content = () => {
    return (
        <div className='Content'>
            {/*<AbouteMe />*/}
            <MyExprerience/>
        </div>
    )
}

export default Content