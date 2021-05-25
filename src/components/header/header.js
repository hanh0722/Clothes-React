import React from 'react';
import Logo from '../img/logo.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMobileAlt} from '@fortawesome/free-solid-svg-icons';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';
import {faFacebookF, faTwitter, faYoutube} from '@fortawesome/free-brands-svg-icons';
import {Link} from 'react-router-dom'
const Header = ({onNavBar, SignOut}) =>{
    return(
        <div>
            <div className='header'>
                <div className='logo'>
                    <Link to="/"><img src={Logo} alt=''/></Link>
                </div>
                <div className='middle-header'>
                    <p><FontAwesomeIcon icon={faMobileAlt} /> 123 456 7890</p>
                    <p><FontAwesomeIcon icon={faEnvelope} />info@gmail.com</p>
                </div>
                <div className='contact-social'>
                    <div className='box-icon'>
                        <a href="facebook"><FontAwesomeIcon icon={faFacebookF}/></a>
                    </div>
                    <div className='box-icon'>
                        <a href="twitter"><FontAwesomeIcon icon={faTwitter}/></a>
                    </div>
                    <div className='box-icon'>
                        <a href="youtube"><FontAwesomeIcon icon={faYoutube}/></a>
                    </div>
                </div>
                <div onClick={onNavBar} className ='hamburger'>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                {/* <div className='box-signin'>
                    <FontAwesomeIcon icon={faSignInAlt}/>
                    <div className='signin-link'>
                        {
                            localStorage.getItem('email') === null ?
                            <Link to='/shop/account'>Sign in</Link>
                            :
                            <p onClick={SignOut} style={{marginLeft: '10px'}}>Sign out</p>
                        }
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Header;