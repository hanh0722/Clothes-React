import React from 'react';
import {faPen} from '@fortawesome/free-solid-svg-icons';
import {faTrashAlt} from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
const ComponentBlog = ({title, url, id, setId, content, all, setHandleData}) =>{
    return(
        <div className='blog-component-admin'>
            <div className='img-box'>
            {/* if we want to change the picture we can use require and .default to make sure that we can show up */}
                <img alt='' src={require(`../../img/${url}`).default}/>
            </div>
            <div className='content-blog'>
                <p>{title}</p>
                <p className='text-blog'>{content}</p>
                <div className='setting-blog'>
                    <Link onClick={() => setHandleData(all)} to={`/dashboard/admin/blog/fix/${id}`}>
                        <FontAwesomeIcon icon={faPen}/>
                    </Link>
                    <FontAwesomeIcon onClick={() => setId(id)} icon={faTrashAlt}/>
                </div>
            </div>
        </div>
    )
}

export default ComponentBlog;