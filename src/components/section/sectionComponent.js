import React from 'react';
import styles from './SectionComponent.module.scss';
import {Link} from 'react-router-dom';
const SectionComponent = ({url, name, content}) =>{
    const setBlogRender = () =>{
        const data = {
            url: url,
            title: name,
            content: content
        };
        sessionStorage.setItem('pageBlog', JSON.stringify(data));
    }
    return(
        <div className='box-introduce'>
            <img src={require(`../img/${url}`).default} alt=''/>
            <div className='box-information'>
                <h3 className={styles.title}>{name}</h3>
                <p className={styles['short-text']}>{content}</p>
                <div className='line-information'></div>
                <Link onClick={setBlogRender} to={`/blog/${name}`}><p>Read more</p></Link>
            </div>
        </div>
    )
}

export default SectionComponent;