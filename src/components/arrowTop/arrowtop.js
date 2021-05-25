import React from 'react';
import {faAngleUp} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const ArrowTop = ({onTop}) =>{
    return(
        <div onClick={onTop} className='arrow-top'>
            <FontAwesomeIcon icon={faAngleUp}/>
        </div>
    )
}
export default ArrowTop;