import React, {Component} from 'react';
import image from '../../../public/images/main-pic.jpg';
class SideBar extends Component {
    render() {
        return (
            <div>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <style
                    dangerouslySetInnerHTML={{
                        __html:
                            "\nbody {\n  margin: 0;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.topnav {\n  overflow: hidden;\n  background-color: #333;\n}\n\n.topnav a {\n  float: left;\n  color: #f2f2f2;\n  text-align: center;\n  padding: 14px 16px;\n  text-decoration: none;\n  font-size: 17px;\n}\n\n.topnav a:hover {\n  background-color: #ddd;\n  color: black;\n}\n\n.topnav a.active {\n  background-color: #4CAF50;\n  color: white;\n}\n"
                    }}
                />
                <div className="topnav">
                    <a className="active" href="#home">
                        Home
                    </a>
                    <a href="#news">News</a>
                    <a href="#contact">Contact</a>
                    <a href="#about">About</a>
                </div>
                <div style={{paddingLeft: 16}}>
                    <img src={image}/>
                </div>
            </div>
        )
    }
}

export default SideBar;
