import React, {Component} from 'react';
import "./Experience.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAnchor, faFlag} from '@fortawesome/free-solid-svg-icons'

class Experience extends Component {
    render() {
        return (
            <div className='experience-main'>
                <div className='education-heading'>
                    <p className='education'>
                        Experience
                    </p>
                </div>

                <div className='experience-heading-2'>
                    <p className='sub-question-company'>Software Development Engineer Intern</p>
                    <FontAwesomeIcon icon={faAnchor}/><span className='completion-experience'> OYO </span>
                    <p className='completion-experience'><FontAwesomeIcon icon={faFlag} size='1x'/> Apr. 2019 - Present
                    </p>
                </div>
                <div className='experience-detail'>
                    <p className='experience-detail-text'>Experience in developing apps/website from scratch in React
                        Native, React.JS</p>
                    <p className='experience-detail-text'>Developed an End-to-End server and AWS-Kafka pipeline to
                        enable IOT based devices to
                        communicate with the server
                    </p>
                    <p className='experience-detail-text'>Experienced in Backend Development in Java, SpringBoot,
                        Hibernate</p>
                    <p className='experience-detail-text'>Experienced in managing and deploying servers using
                        Kubernetes, Jenkins, K8s</p>
                    <p className='experience-detail-text'>Experienced in managing NoSQL databases like MongoDB Key
                        Accomplishments</p>

                </div>
            </div>
        )
    }
}

export default Experience;

// • Experience in developing apps/website from scratch in React Native, React.JS
// • Developed an End-to-End server and AWS-Kafka pipeline to enable IOT based devices to communicate with the server
// • Experienced in Backend Development in Java, SpringBoot, Hibernate
// • Experienced in managing and deploying servers using Kubernetes, Jenkins, K8s
// • Experienced in managing NoSQL databases like MongoDB Key Accomplishments
