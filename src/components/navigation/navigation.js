import React from 'react';
import {faAngleDown, faTimes} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';
const Navigation = ({onNav}) =>{
    return(
        <div>
            <div onClick={onNav} className='background-black'></div>
            <nav>
                <ul className='nav-list'>
                <FontAwesomeIcon className='button-click-close' onClick={onNav} icon={faTimes}/>
                    <li onClick={onNav}>
                        <Link to='/'>Home</Link>
                    </li>
                    <li onClick={onNav}>
                        <Link to='/about'>About us</Link>
                    </li>
                    <li onClick={onNav}>
                        <Link to='/services'>Services</Link>
                    </li>
                    <li onClick={onNav} className='list-2'>
                        <Link to='/shop'><span>Shop</span> <FontAwesomeIcon icon={faAngleDown}/></Link>
                        <ul onClick={onNav} className='list-inside'>
                            <li onClick={onNav}>
                                <Link to='/shop/account'>My Account</Link>
                            </li>
                            <li onClick={onNav}>
                                <Link to='/shop/checkout'>Checkout</Link>
                            </li>
                            <li onClick={onNav}>
                                <Link to='/shop/cart'>Cart</Link>
                            </li>
                        </ul>
                    </li>
                    <li onClick={onNav}><Link to='/blog'>Blog</Link></li>
                    <li onClick={onNav} className='contact'>
                        <Link to='/contact'>Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation;