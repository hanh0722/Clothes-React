import React from 'react';
import {secondUL, thirdUL, fourthUL} from './datafooter';
import FooterList from './footerlist';
import {faFacebookF, faTwitter, faYoutube} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import p1 from '../img/logo.png';
import {Link} from 'react-router-dom';
const UL = (array) =>{
    const newUL = array.map((items, i) =>{
        return <Link key={i} to={items.path}><FooterList key={i} data={items.name}/></Link>
    })
    return newUL;
}
const Footer = () =>{
    const UL2 = UL(secondUL);
    const UL3 = UL(thirdUL);
    const UL4 = UL(fourthUL);
    return(
        <footer>
            <div className='box-information-footer'>
                {/* <p className='title-footer title-footer-2'>Fashion friends</p> */}
                <img src={p1} alt=''/>
                <div className='line-footer'></div>
                <p><a href="tel:">Phone: 0123.456.789</a></p>
                <p><a href="mailto:">Email: support@gmail.com</a></p>
                <div className='box-media'>
                    <div className='box-footer'><a href="facebook"><FontAwesomeIcon icon={faFacebookF}/></a></div>
                    <div className='box-footer'><a href="twitter"><FontAwesomeIcon icon={faTwitter}/></a></div>
                    <div className='box-footer'><a href="youtube"><FontAwesomeIcon icon={faYoutube}/></a></div>
                </div>
            </div>
            <ul>
                <li className='title-footer'>My Account</li>
                <li className='line-footer'></li>
                {UL2}
            </ul>
            <ul>
                <li className='title-footer'>Information</li>
                <li className='line-footer'></li>
                {UL3}
            </ul>
            <ul>
                <li className='title-footer'>Our services</li>
                <li className='line-footer'></li>
                {UL4}
            </ul>
        </footer>
    )
}

export default Footer;