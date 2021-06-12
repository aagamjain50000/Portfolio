import React, { Component } from 'react'
import './RepresentedPage.css'
export default class RepresentedPage extends Component {
    render() {
        return (
            <div className="Represented-Page ">
                <div className="flex column">
                    <p className="Large-text">
                        Proudly present by
                    </p>
                    <div className="Small-text">
                        Lorem ipsum dolor sit, consectetur adispiscing elit, sed do eiusmod tempor<br />
                        incididunt ut labore et dolore magna aliqua.
                    </div>
                </div>
                <div className="Swip flex">
                    <img src={"./assests/Group 39.png"} alt="" ></img>
                    <img src={"./assests/Group 64.png"} alt="" ></img>
                    <img src={"./assests/Group 55.png"} alt="" ></img>
                    <img src={"./assests/Group 64.png"} alt="" ></img>
                    <img src={"./assests/Group 39.png"} alt="" ></img>
                </div>

            </div>
        )
    }
}
