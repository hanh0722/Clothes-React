import React, {useState, useEffect} from 'react';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import ComponentBlog from './componentblog';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LayoutDashBoard from '../../Layout/LayoutDashboard';
import RightSide from '../RightSide/Rightside';
import CreatePost from './CreateBlog';
import styles from './BlogAdmin.module.scss';
import DeleteNotification from './DeleteNotification';
const ManageBlog = ({handleData}) =>{
    const [blogs, setBlog] = useState([]);
    const [searchfield, setSearchField] = useState('');
    const [isValidDeleted, setIsValidDeleted] = useState(false);
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

    const removeHandler = () =>{
        setIsValidDeleted(false);
    }
    const trashHandler = (id) =>{
        setBlog(prevState =>{
            const deleteBlogs = blogs.filter(items =>{
                return items.id !== id;
            })
            return deleteBlogs;
        })
        fetch('http://localhost:3001/blogs', {
            method: 'DELETE',
            headers: {'Content-Type': 'Application/json'},
            body: JSON.stringify({
                id: id
            })
        }).then(response => response.json())
        .then(data => {
            if(data === 1){
                setIsValidDeleted(true);
            }
        }).catch(err => console.log(err));  
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
        setId={trashHandler}
        content={items.contentblog}
        all={items}
        setHandleData={setHandleData}
        />
    })
    return(
        <LayoutDashBoard>
            <RightSide>
                <div className='blog-homepage'>
                    <div className={styles.title}>
                        <p>Manage Blogs</p>
                        <CreatePost/>
                    </div>
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
                    <DeleteNotification remove={removeHandler} deleted={isValidDeleted}/>
                </div>
            </RightSide>
        </LayoutDashBoard>
    )       
}

export default ManageBlog;