import React from 'react';
import Shipping from '../img/shipping.png';
import Protect from '../img/protect.png';
import Headphone from '../img/phone.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
class Box extends React.Component{
    componentDidMount(){
        AOS.init();
    }
    render(){
        return(
            <div className='container'>
                <div data-aos='fade-right' data-aos-duration='1000' className='box'>
                    <img src={Shipping} alt=''/>
                    <div className='content-img'>
                        <p>Free shipping</p>
                        <p>Phasellus nunc daccu magna bibendum vehicula ultricies...</p>
                    </div>
                </div>
                <div data-aos='fade-up' data-aos-duration='1000' className='box'>
                    <img src={Protect} alt=''/>
                    <div className='content-img'>
                        <p>Money back guarantee</p>
                        <p>Phasellus nunc daccu magna bibendum vehicula ultricies...</p>
                    </div>
                </div>
                <div data-aos='fade-left' data-aos-duration='1000' className='box'>
                    <img src={Headphone} alt=''/>
                    <div className='content-img'>
                        <p>Online support</p>
                        <p>Phasellus nunc daccu magna bibendum vehicula ultricies...</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default Box;