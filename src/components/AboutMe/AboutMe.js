import React, {Component} from 'react';
import "./AboutMe.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUniversalAccess, faHeartbeat} from '@fortawesome/free-solid-svg-icons'

export const chitkaraLink = "https://www.chitkara.edu.in/"
class AboutMe extends Component {
    render() {
        return (
            <div className='about-main'>
                <div className='heading'>
                    <p className='about-me'>
                        About Me
                    </p>
                </div>
                <div className='heading-2'>
                    <p className='sub-question'>
                        <FontAwesomeIcon icon={faUniversalAccess} size='1px'/>  Who Am I ?
                    </p>
                </div>
                <div className='detail'>
                    <p className='detail-text'>
                        I'm a 20 year old guy studying in the final year of my college, <a style={{textDecoration: 'none'}} href={chitkaraLink} target='_blank'>Chitkara University</a>.
                        Born and raised in Patiala, Punjab. Moved to the city of Bangalore in 2019. Hardworking and
                        passionate for what I do.
                        Love to stay fit and help others to acheive their fitness goals.
                    </p>
                </div>

                <div className='heading-2'>
                    <p className='sub-question'>
                        <FontAwesomeIcon icon={faHeartbeat} size='1px'/>  What I love ?
                    </p>
                </div>
                <div className='detail'>
                    <p className='detail-text'>
                        I love Problem Solving and challenges that require Critical Thinking and pushing the limits of
                        my brain to the edge.
                        I have a good grasp over Data Structures, Algorithms, Databases and Object Oriented languages
                        like Java, C++.
                        Also I have worked on various full-blown projects that included development and management of
                        front-end, back-end and database.
                    </p>
                </div>
            </div>
        )
    }
}

export default AboutMe;
