import React, { Component } from 'react'
import './Review.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
export default class Review extends Component {
    render() {
        return (
            <div className="Review">
                <div className="flex column">
                    <div>
                        <img className="Rectangle-26" src={"./assests/Group 86.png"} alt="" ></img>
                    </div>
                    <div >
                        <img className="profile" src={"./assests/profile.webp"} alt="" ></img>
                    </div>
                    <div>

                    </div>
                    <div className="Large-text">
                    Jane Doe<br />
                    </div>
                    <div className="star">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                    </div>
                    <div className="Small-text">
                    Thank you for all the amazing produce and products you deliver each week...<br />
                    you make my life so easy an bring goodness into family eating<br />
                    I've been roasting a lot of brussel sprouts and<br />
                    </div>
                </div>
                <div className='Subscribe'>
                    <div className="Large-text">
                    Subscribe to Our Newsletter<br />
                    </div>
                    <img className="Group-134" src="./assests/Group 134.png" alt=""></img>
                    <div className="Small-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br />
                        incididunt ut labore et dolore magna aliqua.
                    </div>
                    <div className="SearchBar">
                    <input name='Email' id="Email" value="" type="email" placeholder="Enter Your Email address" />
                        <button className="subscribe-btn" type="submit">subscribe</button>
                    </div>
                </div>

            </div>
        )
    }
}
