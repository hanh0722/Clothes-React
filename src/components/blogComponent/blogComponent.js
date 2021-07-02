import React from 'react';
import {faCalendarAlt} from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const BlogComponent = ({url, link, title, content}) => {
    const newUrl = link.split(' ').join('-');
    const setRender = () =>{
        const data = {
            url: url,
            title: title,
            content: content
        };
        sessionStorage.setItem('pageBlog', JSON.stringify(data));
    }
    return(
        <div className='blog-component'>
        <img onClick={setRender} src={url} loading='lazy' alt=''/>
        <div className='content-blog'>
            <p onClick={setRender}><Link to={`/blog/${link}`}>{title}</Link></p>
            <p><FontAwesomeIcon icon={faCalendarAlt}/> November 11, 2016</p>
            <p className='introduction-blog'>{content}</p>
            <div className='border-bottom-blog'>
                <Link onClick={setRender} to={`/blog/${newUrl}`}><p>+ Read more</p></Link>
            </div>
        </div>
    </div>
    )
    
}

export default BlogComponent;