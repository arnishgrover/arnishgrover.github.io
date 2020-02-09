import React, {Component} from 'react';
import "./Education.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFlag, faSchool} from '@fortawesome/free-solid-svg-icons'

class Education extends Component {
    render() {
        return (
            <div className='education-main'>
                <div className='education-heading'>
                    <p className='education'>
                        Education
                    </p>
                </div>

                <div className='education-heading-2'>
                    <p className='sub-question-degree'>Bachelor's of Technology - <span style={{fontSize: "14px"}}>Computer Science Engineering</span>
                    </p>
                    <FontAwesomeIcon icon={faSchool}/><span className='completion'> CHITKARA UNIVERSITY </span>
                    <p className='completion'><FontAwesomeIcon icon={faFlag} size='1x'/> Expected Jul. 2020</p>
                </div>
                <div className='education-detail'>
                    <p className='education-detail-text'>
                        I am pursuing my under-graduation studies with major in CSE (Computer Science Engineering) from
                        Chitkara University.
                        I have taken courses like DSA, OOPs, Computer Networks, Web-Data Management over the years and
                        have good understanding of these subjects.
                        I have been a university topper for my batch for consecutive 3 semesters with an average CGPA
                        9.81
                    </p>
                </div>
                <hr /><br/>


                <div className='education-heading-2'>
                    <p className='sub-question-degree'>Certification - <span style={{fontSize: "14px"}}>Full Stack Web Development</span>
                    </p>
                    <FontAwesomeIcon icon={faSchool}/><span className='completion'> FREECODECAMP.ORG </span>
                    <p className='completion'><FontAwesomeIcon icon={faFlag} size='1x'/> Completed Dec. 2017</p>
                </div>
                <div className='education-detail'>
                    <p className='education-detail-text'>
                        I have completed a Full stack web development certification from Free Code Camp.
                    </p>
                </div>
                <hr /> <br />

                <div className='education-heading-2'>
                    <p className='sub-question-degree'>Senior Secondary Education - <span style={{fontSize: "14px"}}>Science</span>
                    </p>
                    <FontAwesomeIcon icon={faSchool}/><span className='completion'> NARAIN PUBLIC SCHOOL </span>
                    <p className='completion'><FontAwesomeIcon icon={faFlag} size='1x'/> Completed Apr. 2016</p>
                </div>
                <div className='education-detail'>
                    <p className='education-detail-text'>
                        I have completed my Senior Secondary Education in Science stream from Narain Public School.
                        I have studied subjects Physics, Chemistry and Mathematics. I was the school topper for my batch with a
                        94% in all subjects and 95.13% in PCM (Physics, Chemistry and Mathematics).
                    </p>
                </div>
            </div>
        )
    }
}

export default Education;
