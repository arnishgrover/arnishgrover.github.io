import React, {Component} from 'react';
import "./Skills.css";
import {Line, Circle} from 'rc-progress';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngleDoubleRight} from '@fortawesome/free-solid-svg-icons'

class Skills extends Component {
    render() {
        return (
            <div className='skills-main'>
                <div className='skills-heading'>
                    Skills
                </div>

                <div>
                    <div className='skill-group'>
                        <div className='skill-text'>
                            <p className='skill-text-main'><FontAwesomeIcon icon={faAngleDoubleRight}/> Java</p>
                        </div>
                        <div className='skill-bar'>
                            <Line percent="70" strokeWidth="3" trailWidth="3" strokeColor="green"/>
                        </div>
                    </div>

                    <div className='skill-group'>
                        <div className='skill-text'>
                            <p className='skill-text-main'><FontAwesomeIcon icon={faAngleDoubleRight}/> C++</p>
                        </div>
                        <div className='skill-bar'>
                            <Line percent="60" strokeWidth="3" trailWidth="3" strokeColor="green"/>
                        </div>
                    </div>

                    <div className='skill-group'>
                        <div className='skill-text'>
                            <p className='skill-text-main'><FontAwesomeIcon icon={faAngleDoubleRight}/> JavaScript</p>
                        </div>
                        <div className='skill-bar'>
                            <Line percent="70" strokeWidth="3" trailWidth="3" strokeColor="green"/>
                        </div>
                    </div>

                    <div className='skill-group'>
                        <div className='skill-text'>
                            <p className='skill-text-main'><FontAwesomeIcon icon={faAngleDoubleRight}/> React</p>
                        </div>
                        <div className='skill-bar'>
                            <Line percent="60" strokeWidth="3" trailWidth="3" strokeColor="green"/>
                        </div>
                    </div>

                    <div className='skill-group'>
                        <div className='skill-text'>
                            <p className='skill-text-main'><FontAwesomeIcon icon={faAngleDoubleRight}/> Spring</p>
                        </div>
                        <div className='skill-bar'>
                            <Line percent="80" strokeWidth="3" trailWidth="3" strokeColor="green"/>
                        </div>
                    </div>

                    <div className='skill-group'>
                        <div className='skill-text'>
                            <p className='skill-text-main'><FontAwesomeIcon icon={faAngleDoubleRight}/> AWS</p>
                        </div>
                        <div className='skill-bar'>
                            <Line percent="50" strokeWidth="3" trailWidth="3" strokeColor="green"/>
                        </div>
                    </div>

                    <div className='skill-group'>
                        <div className='skill-text'>
                            <p className='skill-text-main'><FontAwesomeIcon icon={faAngleDoubleRight}/> Linux</p>
                        </div>
                        <div className='skill-bar'>
                            <Line percent="70" strokeWidth="3" trailWidth="3" strokeColor="green"/>
                        </div>
                    </div>

                    <div className='skill-group'>
                        <div className='skill-text'>
                            <p className='skill-text-main'><FontAwesomeIcon icon={faAngleDoubleRight}/> Docker</p>
                        </div>
                        <div className='skill-bar'>
                            <Line percent="40" strokeWidth="3" trailWidth="3" strokeColor="green"/>
                        </div>
                    </div>

                    <div className='skill-group'>
                        <div className='skill-text'>
                            <p className='skill-text-main'><FontAwesomeIcon icon={faAngleDoubleRight}/> GitHub</p>
                        </div>
                        <div className='skill-bar'>
                            <Line percent="80" strokeWidth="3" trailWidth="3" strokeColor="green"/>
                        </div>
                    </div>

                    <div className='skill-group'>
                        <div className='skill-text'>
                            <p className='skill-text-main'><FontAwesomeIcon icon={faAngleDoubleRight}/> Kafka</p>
                        </div>
                        <div className='skill-bar'>
                            <Line percent="60" strokeWidth="3" trailWidth="3" strokeColor="green"/>
                        </div>
                    </div>

                    <div className='skill-group'>
                        <div className='skill-text'>
                            <p className='skill-text-main'><FontAwesomeIcon icon={faAngleDoubleRight}/> NoSQL</p>
                        </div>
                        <div className='skill-bar'>
                            <Line percent="70" strokeWidth="3" trailWidth="3" strokeColor="green"/>
                        </div>
                    </div>

                    <div className='skill-group'>
                        <div className='skill-text'>
                            <p className='skill-text-main'><FontAwesomeIcon icon={faAngleDoubleRight}/> IoT</p>
                        </div>
                        <div className='skill-bar'>
                            <Line percent="90" strokeWidth="3" trailWidth="3" strokeColor="green"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Skills;
