import React, { Component } from 'react'
import './Blog.css'

export default class Blog extends Component {
    render() {
        return (
            <div className="Blog">
                <div className="Block-1">
                    <img src={"./assests/Group 114.png"} alt=""></img>
                    <div className="H1">
                        Read Our Blog
                    </div>
                    <div className="small-text">
                        Loreum ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br />
                        incididunt ut labore et dolore magna aliqua.
                    </div>
                </div>
                <div className="Block-2" >
                    <div className="img2">
                        <img className="Group45" src={"./assests/Group 45.webp "} alt=""></img>
                        <p className="Blog-Post-One">Blog Post One</p>
                        <div>
                            Lorem ipsum dolor sit amet,<br />
                            consectetur adipiscing elit, sed<br />
                            do eiusmod.
                        </div>
                        <p className="Read">Read More</p>
                    </div>

                    <div className="img2">
                        <img className="Group30" src={"./assests/Group 30.webp "} alt=""></img>
                        <p className="Blog-Post-One">Blog Post One</p>
                        <div>
                            Lorem ipsum dolor sit amet,<br />
                            consectetur adipiscing elit, sed<br />
                            do eiusmod.
                        </div>
                        <p className="Read">Read More</p>
                    </div>

                    <div className="img2">
                        <img className="Group11" src={"./assests/Group 11.webp "} alt=""></img>
                        <p className="Blog-Post-One">Blog Post One</p>
                        <div>
                            Lorem ipsum dolor sit amet,<br />
                            consectetur adipiscing elit, sed<br />
                            do eiusmod.
                        </div>
                        <p className="Read">Read More</p>
                    </div>
                </div>

            </div>
        )
    }
}
