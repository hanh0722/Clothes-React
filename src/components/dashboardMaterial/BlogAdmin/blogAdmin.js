import React, {useState, useEffect} from 'react';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import ComponentBlog from './componentblog';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const ManageBlog = ({handleData}) =>{
    const [blogs, setBlog] = useState([]);
    const [searchfield, setSearchField] = useState('');
    useEffect(() =>{
        fetch('http://localhost:3001/blog').then(response => response.json())
        .then(data =>{
            setBlog(data);
        })
        
    }, [])

    const onChangeField = (event) =>{
        setSearchField(event.target.value);
    } 
    const filterBlogs = blogs.filter(items =>{
        return items.title.toLowerCase().includes(searchfield.toLowerCase());
    });
    const setId = (id) =>{
        console.log(id);
    }
    const setHandleData = (data) =>{
        handleData(data);
    }
    const blogsAfterFilter = filterBlogs.map((items, index) =>{
        return <ComponentBlog 
        key={index} 
        url={items.url} 
        title={items.title}
        id={items.id}
        setId={setId}
        content={items.contentblog}
        all={items}
        setHandleData={setHandleData}
        />
    })
    return(
        <div className='blog-homepage'>
            <p>Manage Blogs</p>
            <div className='input-search-blog'>
                <FontAwesomeIcon icon={faSearch}/>
                <input onChange={onChangeField} type='text' placeholder='Search Blog'/>
            </div>
            <div className='blog-list'>
                {
                    blogsAfterFilter.length === 0 ? 
                    <p className='no-result'>No posts exist with your search!</p>
                    :
                    blogsAfterFilter
                }
            </div>
        </div>
    )       
}

export default ManageBlog;