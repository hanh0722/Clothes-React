import React from 'react';
import BannerClock from '../bannerClock/bannerclock';
import Box from '../box/box'
import ListProduct from '../boxProducts/listproduct';
import Helmet from 'react-helmet';
import {SERVICES} from '../../Title/Title';
const Services = () =>{
    return(
        <>
            <Helmet><title>{SERVICES}</title></Helmet>
            <BannerClock/>
            <Box/>
            <ListProduct/>
        </>
    )
}

export default Services;