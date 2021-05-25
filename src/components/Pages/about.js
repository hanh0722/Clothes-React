import React from 'react';
import SliderFeedback from '../sliderfeedback/sliderfeedback';
import Banner from '../Banner/banner';
import BannerClock from '../bannerClock/bannerclock';
const About = () =>{
    return(
        <div>
            <BannerClock/>
            <Banner/>
            <SliderFeedback/>
        </div>
    )
}

export default About;