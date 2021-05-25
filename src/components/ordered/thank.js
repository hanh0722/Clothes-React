import React from 'react';
import p1 from '../img/20170329-shopping-1-large.png';
import {Link} from 'react-router-dom';
const Bought = () =>{
    return(
        <div className='container-bought'>
            <div className='div-img-bought'>
                <img alt='' src={p1} loading='lazy'/>
            </div>
            <p>Thank you so much for buying our items!</p>
            <p>Your order will be processed and delivered soon</p>
            <div className='div-button-bought'>
                <Link to='/'><button>Go to first page!</button></Link>
                <Link to='/shop'><button>Go to shop!</button></Link>
            </div>
        </div>
    )
}

export default Bought;