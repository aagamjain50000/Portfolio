import React, { Component } from 'react'
import './WelcomeScreen.css';

export class WelcomeScreen extends Component {
    render() {
        return (
            <div className="home-welcome-screen">
                <div className="header">
                    <div className="logo">
                        <img className="logo-icon" src="./assests/Group 228.png" alt="" />
                        <div className="logo-name">organic</div>
                    </div>
                    <div className="navbar">
                        {
                            ['Home', 'Products', 'Blog', 'About Us', 'Contact'].map(item => <div className="item">{item}</div>)
                        }
                    </div>
                </div>

                <div className="info">
                    <span className="small-text">Healthy life with</span>
                    <span className="large-heading">Nature Organic</span>
                    <div className="description">
                        Vegetables are the edible parts of a plant <br /> that is used in cooking or can be eaten now.                        </div>
                    <button className="explore-btn" >Explore Now</button>
                </div>

                <div className="graphics">
                    <img className="image-1" src={"./assests/Group 195.png"} alt=""></img>
                    <img className="image-2" src={"./assests/Group 228.png"} alt=""></img>
                </div>
            </div>
        )
    }
}
