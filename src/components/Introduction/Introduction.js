import React, {Component} from "react";
import './Introduction.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope, faMap, faMouse, faLink, faHeart, faClock, faDownload} from '@fortawesome/free-solid-svg-icons'
import Button from '@material-ui/core/Button';

const bangaloreMapLink = "https://www.google.com/maps/place/Bengaluru,+Karnataka/@12.9538477,77.3507442,10z/data=!3m1!4b1!4m5!3m4!1s0x3bae1670c9b44e6d:0xf8dfc3e8517e4fe0!8m2!3d12.9715987!4d77.5945627";
const emailLink = "mailto:arnishgrover@gmail.com";
const githubLink = "https://github.com/arnishgrover";
const linkedInLink = "https://www.linkedin.com/in/arnishgrover";
const cvDownloadLink = "https://drive.google.com/open?id=1csA5lOyABv9uAlFvP6DwAaAvnxKOJLt8";

class Introduction extends Component {
    render() {
        return (
            <div>
                <div className="main">
                    <div className="profile-pic">
                        <img src={require("../../images/profile.jpeg")} alt={"Alternate"} className="image"/>
                    </div>
                    <div className="Name">
                        <h2 className="text">Arnish Grover</h2>
                    </div>
                    <div className="contact">
                        <a className="info" href={emailLink}><FontAwesomeIcon icon={faEnvelope}/> arnishgrover@gmail.com</a><br/>
                        <a className="info" href={bangaloreMapLink} target={"blank"}><FontAwesomeIcon
                            icon={faMap}/> Bangalore, Karnataka, India</a>
                        <p style={{fontSize: 12, fontFamily: "Arial"}}>OTHER LINKS</p>
                        <a className="info" href={githubLink} target={"blank"}
                           style={{color: '#ff420e'}}><FontAwesomeIcon icon={faMouse}/> GitHub</a><br/>
                        <a className="info" href={linkedInLink} target={"blank"}
                           style={{color: '#18322f'}}><FontAwesomeIcon icon={faLink}/> LinkedIn</a>
                    </div>
                    <div className='cv'>
                        <Button variant="contained" color="primary" href={cvDownloadLink} target='_blank'>
                            Get My CV    <pre>  </pre><FontAwesomeIcon icon={faDownload}/>
                        </Button>
                    </div>
                    <div className="end">
                        <p className="end-text">Made with <FontAwesomeIcon icon={faHeart}/> and a lot
                            of <FontAwesomeIcon icon={faClock}/> investment</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Introduction;
