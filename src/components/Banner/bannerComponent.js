import React from 'react';  
import {Link} from 'react-router-dom'
const BannerComponent = ({imgLink, content, linkTag}) =>{
    return(
        <div className='left-banner'>
            <img src={imgLink} alt='' loading='lazy'/>
            <div className='content-banner'>
                <h2>new</h2>
                <p className='arrival'>arrivals</p>
                <p className='content-banner-text'>{content}</p>
                <div className='line-banner'></div>
                <Link to='/shop'><button>Shop now!</button></Link>
            </div>
        </div>
    )
}
export default BannerComponent;