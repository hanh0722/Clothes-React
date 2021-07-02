import React from 'react';  
import Button from './button';
const BannerComponent = ({imgLink, content, linkTag}) =>{
    return(
        <div className='left-banner'>
            <img src={imgLink} alt='' loading='lazy'/>
            <div className='content-banner'>
                <h2>new</h2>
                <p className='arrival'>arrivals</p>
                <p className='content-banner-text'>{content}</p>
                <div className='line-banner'></div>
                <Button url={linkTag}/>
            </div>
        </div>
    )
}
export default BannerComponent;