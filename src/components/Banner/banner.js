import React from 'react';
import p1 from '../img/new-banner-1.jpg';
import p2 from '../img/banner-new.jpg';
import BannerComponent from './bannerComponent';
const Banner = ({loadShop}) =>{
    const data = [
        {
            imgLink: p2,
            content: 'womens special collections',
            gender: 'women'
        },
        {
            imgLink: p1,
            content: 'mens special collections',
            gender: 'men'
        }
    ]
    const BannerContainer = data.map((items, i) =>{
        return <BannerComponent key={i} linkTag={items.gender} imgLink={items.imgLink} content={items.content}/>
    });

    return(
        <div className='banner'>
            {BannerContainer}
        </div>
    )
}

export default Banner;