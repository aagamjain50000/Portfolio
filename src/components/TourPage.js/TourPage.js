import React, { Component } from 'react'
import './TourPage.css'
export default class TourPage extends Component {
    render() {
        return (
            <div className="tour-page">
                <div className="flex column">
                    <img className="Group-114" src={"./assests/Group 114.png"} alt=""></img>
                    <div className="Large-text">
                        Welcome to Nature
                    </div>
                    <div className="Small-text">
                        Loreum ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br />
                        incididunt ut labore et dolore magna aliqua.
                    </div>
                </div>
                <div className="flex">
                    <div className="Image">
                        <img src={"./assests/Group 207.png"} alt=""></img>
                    </div>
                    <div className="Image">
                        <img src={"./assests/Group 205.png"} alt=""></img>
                    </div>
                    <div className="Image">
                        <img src={"./assests/Group 207.png"} alt=""></img>
                    </div>
                    <div className="Image">
                        <img src={"./assests/Group 207.png"} alt=""></img>
                    </div>
                </div>
            </div>
        )
    }
}
