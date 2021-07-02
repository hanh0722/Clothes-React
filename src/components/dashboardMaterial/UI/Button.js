import React from 'react';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';
import styles from '../BlogAdmin/CreateBlog.module.scss';
const Button = (props) =>{
    return(
        <Link to={props.link}>
            <button className={styles['create_post']}>
                <span className={styles.plus}><FontAwesomeIcon icon={faPlus}/></span>
                <span>{props.content}</span>
            </button>
        </Link>
    )
}

export default Button;