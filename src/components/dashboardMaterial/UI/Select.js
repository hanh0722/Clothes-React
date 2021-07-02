import React from 'react';
import styles from './Select.module.scss'
const Select = ({onChangeUser}) =>{
    const changePageHandler = (event) =>{
        onChangeUser(event.target.value);
    } 
    return(
        <select onChange={changePageHandler} className={styles.select}>
            <option value='5'>5</option>
            <option value='10'>10</option>
            <option value='15'>15</option>
        </select>
    )
}

export default Select;