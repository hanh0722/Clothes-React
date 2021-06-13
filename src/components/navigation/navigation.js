import React from 'react';
import {faAngleDown, faTimes} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';
const Navigation = ({onNav, addAnimation}) =>{
    return(
        <div>
            <div onClick={onNav} className='background-black'></div>
            <nav>
                <ul className='nav-list'>
                    <FontAwesomeIcon className='button-click-close' onClick={onNav} icon={faTimes}/>
                    <Link to='/'><li className={addAnimation} onClick={onNav}>Home</li></Link>
                    <Link to='/about'><li className={addAnimation} onClick={onNav}>About us</li></Link>
                    <Link to='/services'><li className={addAnimation} onClick={onNav}>Services</li></Link>
                    <li className={`${addAnimation} list-2`}>
                        <Link className={`${addAnimation} title-navbar`}
                        onClick={onNav} to='/shop'>Shop <FontAwesomeIcon icon={faAngleDown}/></Link>
                        <ul className='list-inside'>
                            <Link to='/shop/account'><li className={addAnimation} onClick={onNav}>My Account</li></Link>
                            <Link to='/shop/checkout'><li className={addAnimation} onClick={onNav}>Checkout</li></Link>
                            <Link to='/shop/cart'><li className={addAnimation}  onClick={onNav}>Cart</li></Link>
                        </ul>
                    </li>
                    <Link to='/blog'><li className={addAnimation} onClick={onNav}>Blog</li></Link>
                    <Link to='/contact'><li className={addAnimation} onClick={onNav}>Contact</li></Link>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation;