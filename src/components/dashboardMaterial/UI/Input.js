import React from 'react';
import styles from './Input.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
const Input = (props) =>{
    return(
        <div className={styles['search-box']}>
            <FontAwesomeIcon icon={faSearch}/>
            <input {...props.input}/>
        </div>
    )
}

export default Input;