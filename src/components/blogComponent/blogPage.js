import React from 'react';
import BannerClock from '../bannerClock/bannerclock';
const BlogPage = () =>{
    const DataPage = JSON.parse(sessionStorage.getItem('pageBlog'));
    return(
        <div>
            <BannerClock/>
            <div className='container-section container-blog-page'>
                <p className='title-page-blog'>
                    {DataPage.title}
                </p>
                <div style={{whiteSpace: 'pre-line'}} className='content-page'>
                    {DataPage.content}
                </div>
            </div>
        </div>
    )
}

export default BlogPage;