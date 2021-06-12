import React, { Component } from 'react';
import { WelcomeScreen } from './WelcomeScreen/WelcomeScreen';
import TourPage from './TourPage.js/TourPage';
import RepresentedPage from './RepresentedPage/RepresentedPage';
import Footer from './Footer/Footer';
import Blog from './Blog/Blog';
import Review from './Review/Review';
import '../Styles/Home.css'

export default class Home extends Component {
    render() {
        return (
            <div className="Homepage">

                {/* First Page Start */}
                <WelcomeScreen />
                {/* First Page End */}

                {/* Second Page Start */}
                <TourPage />
                {/* Second Page End */}
                
                {/* Third Page Start */}
                <RepresentedPage />
                {/* Third Page End */}

                {/* Fourth Page Start */}
                <Review />
                {/* Fourth Page End */}

                {/* Fifth Page Start */}
                <Blog />
                {/* Fifth Page End */}

                {/* Sixth Page Start */}
                <Footer />
                {/* Sixth Page End */}
                              
            </div>
        )
    }
}
