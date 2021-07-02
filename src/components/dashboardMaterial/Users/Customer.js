import React from 'react';
import styles from './scss/Hover.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const Customer = ({name, age, email, priority, background, id , deleteUserHandler}) =>{
    return(
        <tr className={styles.hover} style={{background: background}}>
            <td>{name}</td>
            <td>{age}</td>
            <td>{email}</td>
            <td>{priority}</td>
            <td className={styles.fixed}>
                <Link to={`/dashboard/admin/user/${id}`}><FontAwesomeIcon icon={faPencilAlt}/></Link>
                <FontAwesomeIcon onClick={deleteUserHandler.bind(null, id)} icon={faTrash}/>
            </td>
        </tr>
    )
}

export default Customer;