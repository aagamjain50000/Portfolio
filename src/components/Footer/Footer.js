import React, { Component } from 'react'
import './Footer.css'
export default class Footer extends Component {
    render() {
        return (
            <div className="Rectangle-49">
                <div className="f1" style={{ backgroundImage: 'url("./assests/Group 229.png")' }}>
                    <div className="logo1">
                        <img className="logo1-icon" src="./assests/Group 225.png" alt="" />
                    </div>
                    <div className="Small-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing<br />
                        elit, sed do eiusmod tempor <br />

                    </div>
                    
                    <div className="CopyRight">
                        © Copyright 2020 Nature
                    </div>
                    <div className="Information">
                        <h4 className="Lrge-text">Information</h4>
                        <p>About Us</p>
                        <p>Products</p>
                        <p>Contact Us</p>
                        <p>Terms of services</p>
                    </div>
                    <div className="Follow">
                        <h4 className="Lrge-text">Follow Us</h4>
                        <div className="img">
                            <img src={"./assests/Group 99.png"} alt="" />
                            <img src={"./assests/Group 100.png"} alt="" />
                            <img src={"./assests/Group 99.png"} alt="" />
                            <img src={"./assests/Group 105.png"} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
