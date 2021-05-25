import React from 'react';
import {faAngleRight} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FooterList = ({data}) =>{
    return(
        <li><FontAwesomeIcon icon={faAngleRight}/> {data}</li>
    )
}

export default FooterList;