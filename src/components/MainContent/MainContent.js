import React, {Component} from 'react';
import "./MainContent.css";

import AboutMe from '../AboutMe/AboutMe';
import Education from '../Education/Education';
import Experience from '../Experience/Experience';
import Skills from '../Skills/Skills';

class MainContent extends Component {
    render() {
        return (
            <div>
                <div>
                    <AboutMe/>
                </div>
                <div>
                    <Education/>
                </div>
                <div>
                    <Experience/>
                </div>
                <div>
                    <Skills/>
                </div>
            </div>
        )
    }
}

export default MainContent;
