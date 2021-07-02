import React from 'react';
import styles from './DeleteNotification.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTimesCircle} from '@fortawesome/free-regular-svg-icons';
const DeleteNotification = ({deleted, remove}) =>{
    return (
        <div className={`${styles.notification} ${deleted === true && styles['transform_back']}`}>
            <p>Deleted post successfully</p>
            <FontAwesomeIcon onClick={remove} icon={faTimesCircle}/>
        </div>
    )
}

export default DeleteNotification;