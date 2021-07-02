import React, {useEffect} from 'react';
import styles from './DeletedView.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
const DeletedView = ({deleted, turnOff}) =>{
    useEffect(() =>{
        setTimeout(() =>{
            turnOff();
        }, 2500)
    }, [deleted, turnOff])
    return(
        <div className={`${styles.box} ${deleted === true && styles['box-transform-back']}`}>
            <FontAwesomeIcon icon={faCheckCircle}/>
            <p>Deleted successfully</p>
        </div>
    )
}

export default DeletedView;