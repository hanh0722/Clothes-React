import React from 'react';
import SliderFeedback from '../sliderfeedback/sliderfeedback';
import Banner from '../Banner/banner';
import BannerClock from '../bannerClock/bannerclock';
import Helmet from 'react-helmet';
import {ABOUT} from '../../Title/Title';
const About = () =>{
    return(
        <div>
            <Helmet>
                <title>{ABOUT}</title>
            </Helmet>
            <BannerClock/>
            <Banner/>
            <SliderFeedback/>
        </div>
    )
}

export default About;